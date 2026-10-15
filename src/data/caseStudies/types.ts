export interface TextBlock {
  type: 'text';
  heading: string;
  uppercase?: boolean;
  paragraphs: string[];
}

export interface MediaBlock {
  type: 'media';
  media: string;
  alt: string;
  displayWidth: number;
}

export interface SplitBlock {
  type: 'split';
  side: 'media-left' | 'media-right';
  media: string;
  alt: string;
  displayWidth: number;
  heading: string;
  body: string;
}

export type CaseStudyBlock = TextBlock | MediaBlock | SplitBlock;

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  websiteUrl: string;
  hero: string;
  heroAlt: string;
  blocks: CaseStudyBlock[];
}