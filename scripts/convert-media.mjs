import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import ffmpeg from 'ffmpeg-static';
import sharp from 'sharp';

const SRC_DIR = path.resolve('media-source');
const OUT_DIR = path.resolve('public/media');
const MANIFEST_PATH = path.resolve('src/data/media-manifest.json');
const CASE_STUDIES_DIR = path.resolve('src/data/caseStudies');

const ACCEPTED_EXTS = new Set(['.gif', '.png', '.jpg', '.jpeg', '.webp']);

// Default expected media names from prompt
const expectedNames = new Set([
  'applatchkids-hero',
  'applatchkids-overview-phone',
  'applatchkids-locked-ipad',
  'applatchkids-loomey',
  'applatchkids-quiz',
  'applatchkids-shop',
  'applatchkids-parents-phone',
  'applatchkids-control',
  'applatchkids-reporting',
  'applatchkids-remote'
]);

// Dynamically discover expected media names from any case study files
const SITE_PATH = path.resolve('src/data/site.ts');
if (fs.existsSync(SITE_PATH)) {
  const content = fs.readFileSync(SITE_PATH, 'utf8');
  const mediaMatches = content.matchAll(/(?:media|hero):\s*['"]([^'"]+)['"]/g);
  for (const m of mediaMatches) {
    if (m[1]) expectedNames.add(m[1]);
  }
}

if (fs.existsSync(CASE_STUDIES_DIR)) {
  const files = fs.readdirSync(CASE_STUDIES_DIR);
  for (const f of files) {
    if (f.endsWith('.ts') || f.endsWith('.js')) {
      const content = fs.readFileSync(path.join(CASE_STUDIES_DIR, f), 'utf8');
      const mediaMatches = content.matchAll(/(?:media|hero):\s*['"]([^'"]+)['"]/g);
      for (const m of mediaMatches) {
        if (m[1]) expectedNames.add(m[1]);
      }
    }
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function run() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }
  if (!fs.existsSync(path.dirname(MANIFEST_PATH))) {
    fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
  }

  let manifest = {};
  let existingManifestHadEntries = false;
  if (fs.existsSync(MANIFEST_PATH)) {
    try {
      manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
      if (Object.keys(manifest).length > 0) {
        existingManifestHadEntries = true;
      }
    } catch {
      manifest = {};
    }
  }

  // If media-source does not exist, do not touch outputs or manifest
  if (!fs.existsSync(SRC_DIR)) {
    console.log('[convert-media] media-source/ directory missing. Preserving existing public/media outputs and manifest.');
    return;
  }

  // 1. Scan source files
  const rawFiles = fs.readdirSync(SRC_DIR);
  const mediaFiles = rawFiles.filter(file => ACCEPTED_EXTS.has(path.extname(file).toLowerCase()));

  // If no media sources exist (e.g. fresh clone on CI with only .gitkeep), preserve existing outputs and manifest
  if (mediaFiles.length === 0) {
    console.log('[convert-media] No media sources found in media-source/. Preserving existing public/media outputs and manifest.');
    return;
  }

  const grouped = new Map();
  for (const file of mediaFiles) {
    const ext = path.extname(file).toLowerCase();
    const base = path.basename(file, ext);
    if (!grouped.has(base)) grouped.set(base, []);
    grouped.get(base).push({ file, ext });
  }

  // Active slots: GIF wins over stills
  const activeSources = new Map();
  for (const [base, candidates] of grouped.entries()) {
    const gif = candidates.find(c => c.ext === '.gif');
    if (gif) {
      activeSources.set(base, { file: gif.file, isVideo: true });
    } else {
      activeSources.set(base, { file: candidates[0].file, isVideo: false });
    }
  }

  // 2. Remove stale entries from manifest only when media-source has active files
  for (const key of Object.keys(manifest)) {
    if (!activeSources.has(key)) {
      delete manifest[key];
    }
  }

  // 3. Remove stale output files in public/media only when media-source has active files
  const activeOutputFiles = new Set();
  for (const [base, src] of activeSources.entries()) {
    if (src.isVideo) {
      activeOutputFiles.add(base + '.mp4');
      activeOutputFiles.add(base + '.webm');
      activeOutputFiles.add(base + '.webp');
    } else {
      activeOutputFiles.add(base + '.webp');
    }
  }
  const existingOutputs = fs.readdirSync(OUT_DIR);
  for (const f of existingOutputs) {
    if (!activeOutputFiles.has(f)) {
      try {
        fs.unlinkSync(path.join(OUT_DIR, f));
      } catch {}
    }
  }

  const summary = [];

  // 4. Convert or optimize active sources
  for (const [name, src] of activeSources.entries()) {
    const srcPath = path.join(SRC_DIR, src.file);
    const srcStat = fs.statSync(srcPath);
    const srcMtime = srcStat.mtimeMs;
    const srcSize = formatSize(srcStat.size);

    if (src.isVideo) {
      const outMp4 = path.join(OUT_DIR, name + '.mp4');
      const outWebm = path.join(OUT_DIR, name + '.webm');
      const outWebp = path.join(OUT_DIR, name + '.webp');

      const isUpToDate =
        fs.existsSync(outMp4) &&
        fs.existsSync(outWebm) &&
        fs.existsSync(outWebp) &&
        fs.statSync(outMp4).mtimeMs >= srcMtime &&
        fs.statSync(outWebm).mtimeMs >= srcMtime &&
        fs.statSync(outWebp).mtimeMs >= srcMtime &&
        manifest[name] &&
        manifest[name].type === 'video' &&
        manifest[name].width &&
        manifest[name].height;

      if (!isUpToDate) {
        console.log(`[video] Converting ${name} (${src.file})...`);
        const meta = await sharp(srcPath, { page: 0 }).metadata();
        let targetW = meta.width > 1600 ? 1600 : meta.width;
        if (targetW % 2 !== 0) targetW -= 1;

        // Generate poster (webp) from first frame
        await sharp(srcPath, { page: 0 })
          .resize({ width: targetW, withoutEnlargement: true })
          .webp({ quality: 85 })
          .toFile(outWebp);

        const posterMeta = await sharp(outWebp).metadata();
        let finalW = posterMeta.width || targetW;
        let finalH = posterMeta.height || meta.height;
        if (finalH % 2 !== 0) finalH -= 1;

        // Generate MP4
        execFileSync(
          ffmpeg,
          [
            '-y',
            '-i', srcPath,
            '-vf', `scale=${targetW}:-2`,
            '-c:v', 'libx264',
            '-pix_fmt', 'yuv420p',
            '-crf', '28',
            '-movflags', '+faststart',
            '-an',
            outMp4
          ],
          { stdio: 'pipe' }
        );

        // Generate WebM
        execFileSync(
          ffmpeg,
          [
            '-y',
            '-i', srcPath,
            '-vf', `scale=${targetW}:-2`,
            '-c:v', 'libvpx-vp9',
            '-b:v', '0',
            '-crf', '34',
            '-an',
            outWebm
          ],
          { stdio: 'pipe' }
        );

        manifest[name] = {
          type: 'video',
          width: finalW,
          height: finalH,
          poster: `/media/${name}.webp`,
          mp4: `/media/${name}.mp4`,
          webm: `/media/${name}.webm`
        };
      }

      const mp4Size = fs.existsSync(outMp4) ? formatSize(fs.statSync(outMp4).size) : 'n/a';
      const webmSize = fs.existsSync(outWebm) ? formatSize(fs.statSync(outWebm).size) : 'n/a';
      const webpSize = fs.existsSync(outWebp) ? formatSize(fs.statSync(outWebp).size) : 'n/a';

      summary.push({
        Name: name,
        Type: 'video',
        'Source Size': srcSize,
        'Output Sizes': `mp4: ${mp4Size}, webm: ${webmSize}, webp: ${webpSize}`
      });
    } else {
      // Still image
      const outWebp = path.join(OUT_DIR, name + '.webp');
      const isUpToDate =
        fs.existsSync(outWebp) &&
        fs.statSync(outWebp).mtimeMs >= srcMtime &&
        manifest[name] &&
        manifest[name].type === 'image' &&
        manifest[name].width &&
        manifest[name].height;

      if (!isUpToDate) {
        console.log(`[image] Optimizing ${name} (${src.file})...`);
        await sharp(srcPath)
          .resize({ width: 2000, withoutEnlargement: true })
          .webp({ quality: 85 })
          .toFile(outWebp);

        const imgMeta = await sharp(outWebp).metadata();
        manifest[name] = {
          type: 'image',
          width: imgMeta.width,
          height: imgMeta.height,
          poster: `/media/${name}.webp`
        };
      }

      const outSize = fs.existsSync(outWebp) ? formatSize(fs.statSync(outWebp).size) : 'n/a';
      summary.push({
        Name: name,
        Type: 'image',
        'Source Size': srcSize,
        'Output Sizes': `webp: ${outSize}`
      });
    }
  }

  // 5. Write manifest file (never write an empty manifest over a non-empty one)
  const newManifestKeys = Object.keys(manifest);
  if (newManifestKeys.length === 0 && existingManifestHadEntries) {
    console.warn('[convert-media] Warning: Refusing to overwrite non-empty manifest with empty manifest!');
  } else {
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
  }

  // 6. Summary table
  console.log('\n=== MEDIA CONVERSION SUMMARY ===');
  console.table(summary);

  const missing = [];
  for (const exp of expectedNames) {
    if (!activeSources.has(exp)) missing.push(exp);
  }

  if (missing.length > 0) {
    console.log('\n[!] Missing Expected Media:');
    for (const m of missing) {
      console.log(`  - ${m}`);
    }
  } else {
    console.log('\nAll expected media files are present!');
  }
}

run().catch(err => {
  console.error('Media pipeline failed:', err);
  process.exit(1);
});