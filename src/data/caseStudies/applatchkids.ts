import type { CaseStudy } from './types';

export const applatchkidsCaseStudy: CaseStudy = {
  slug: 'applatchkids',
  title: 'ApplatchKids App - Education & Parental Control',
  category: 'Product Design',
  websiteUrl: 'https://www.applatchkids.com',
  hero: 'applatchkids-hero',
  heroAlt: 'ApplatchKids parent and child app interfaces showcase',
  blocks: [
    {
      type: 'text',
      heading: 'Overview',
      uppercase: false,
      paragraphs: [
        'Applatch is a connected parent-and-child experience that helps families build healthier screen-time habits. Parents set the boundaries; children complete educational quizzes to earn access to entertainment apps.',
        'Parents define screen-time boundaries and learning goals. When access runs out, children can complete short educational quizzes to earn time back.',
      ],
    },
    {
      type: 'media',
      media: 'applatchkids-overview-phone',
      alt: 'ApplatchKids child app overview on iPhone',
      displayWidth: 368, // 2x from 184
    },
    {
      type: 'text',
      heading: "Designing around children's frustration",
      uppercase: true,
      paragraphs: [
        "When a child's apps are locked, the goal is for Applatch to not become another punishment exercise, which reduces a child's motivation for using the platform. I designed a learning loop that gives them a clear path forward, complete a quiz, make progress 'academically', and earn part of that screen time access back.",
        'But earning screen time alone wasn\'t enough to make the child experience engaging. I built motivation around the learning itself through Loomey, rewards, collections and competition.',
      ],
    },
    {
      type: 'media',
      media: 'applatchkids-locked-ipad',
      alt: 'Locked apps interface on iPad',
      displayWidth: 490,
    },
    {
      type: 'split',
      side: 'media-left',
      media: 'applatchkids-loomey',
      displayWidth: 475,
      alt: 'Loomey character guiding child through quizzes',
      heading: 'Loomey as an active guide',
      body: 'I designed Loomey to initiate interaction rather than sit decoratively in the interface, inviting children into quizzes, directing attention and reacting to progress through personality, sound and motion.',
    },
    {
      type: 'split',
      side: 'media-right',
      media: 'applatchkids-quiz',
      displayWidth: 475,
      alt: 'Educational quiz questions and completion rewards',
      heading: 'Learning that leads somewhere',
      body: 'I kept quiz interactions simple and consistent, then connected completion to rewards and collectible currency so progress continued beyond the results screen.',
    },
    {
      type: 'split',
      side: 'media-left',
      media: 'applatchkids-shop',
      displayWidth: 475,
      alt: 'Rewards shop with collectible cards and leaderboard',
      heading: 'Building a reason to return',
      body: 'I connected rewards to the shop and leaderboard, creating a wider engagement loop where learning feeds choice, collecting and competition.',
    },
    {
      type: 'text',
      heading: 'Designing for parents',
      uppercase: true,
      paragraphs: [
        "Parents needed more than a place to set restrictions. I designed the experience so they could control screen time, see what was happening on the child's device, and understand their learning progress without needing physical access to that device. Reporting plays a key role in how the parent interprets child's activities on child's devices, being informed is key, and I ensure to design around that importance.",
      ],
    },
    {
      type: 'media',
      media: 'applatchkids-parents-phone',
      alt: 'Parent app dashboard on iPhone',
      displayWidth: 368, // 2x from 184
    },
    {
      type: 'split',
      side: 'media-left',
      media: 'applatchkids-control',
      displayWidth: 240, // 2x from 120
      alt: 'Flexible screen-time controls interface',
      heading: 'Control that adapts to real life',
      body: 'I designed screen-time controls around flexibility rather than a single rigid limit. Parents can manage when and how children access apps, make temporary changes when circumstances change, and retain control without having to reconfigure the whole system.',
    },
    {
      type: 'split',
      side: 'media-right',
      media: 'applatchkids-reporting',
      displayWidth: 248, // 2x from 124
      alt: 'Parent reporting and live insights window',
      heading: 'Reporting, the core feedback',
      body: 'I turned the parent app into a live window into the child\'s device. Report helps parents understand their child better, from screen time to quiz details. Activity is translated into progress, strengths and areas that may need attention, giving parents a clearer picture of learning over time.',
    },
    {
      type: 'split',
      side: 'media-left',
      media: 'applatchkids-remote',
      displayWidth: 244, // 2x from 122
      alt: 'Real-time synchronization between parent and child devices',
      heading: 'Parent phone as a remote control',
      body: 'Through real-time synchronisation, changes made in the parent app are reflected on the child\'s device, while device state flows back to the parent. This turns the parent experience into a lightweight remote control of the child\'s screen-time environment.',
    },
    {
      type: 'text',
      heading: 'One connected experience',
      uppercase: true,
      paragraphs: [
        'A parent\'s decision becomes something the child experiences. A child\'s effort becomes something the parent can understand. That connection shaped many decisions across Applatch and became as important as either app on its own. I am super happy how the project turned out.',
      ],
    },
  ],
};

export default applatchkidsCaseStudy;