import type { CaseStudy } from './types';

export const chadaCaseStudy: CaseStudy = {
  slug: 'chada',
  title: 'Chada - Own & Trade Crypto Assets',
  category: 'UI/UX Design',
  hero: 'chada-hero',
  heroAlt: 'Chada crypto assets dashboard and mobile screens preview',
  blocks: [
    {
      type: 'text',
      heading: 'The Premise',
      uppercase: false,
      paragraphs: [
        'Crypto platforms are historically built for high-frequency trading, not long-term wealth building. Chada disrupts this by merging the intuitive, goal-oriented savings mechanics of traditional fintechs with the high-yield capabilities of decentralized finance. The platform allows users to hold digital assets, earn compounding monthly returns, and execute cross-border transfers seamlessly.',
      ],
    },
    {
      type: 'media',
      media: 'chada-onboarding',
      alt: 'Chada onboarding and authentication screens',
      displayWidth: 166,
    },
    {
      type: 'text',
      heading: 'Portfolio Health for Trust Signal',
      uppercase: false,
      paragraphs: [
        'Knowing that trust is established in milliseconds, to eliminate the anxiety triggered by traditional exchange interfaces, I replaced aggressive candlestick data with smooth, scannable gradient visualizations. I isolated essential liquidity actions: sending and conversions into approachable, into easy low effort actions. This allowed me to provide a familiar, traditional banking mental model while surfacing real-time crypto equity effortlessly.',
      ],
    },
    {
      type: 'media',
      media: 'chada-portfolio',
      alt: 'Chada portfolio balances and liquidity overview',
      displayWidth: 386,
    },
    {
      type: 'text',
      heading: 'Frictionless Borderless Liquidity',
      uppercase: false,
      paragraphs: [
        'To prevent capital flight, I made the transfer process entirely frictionless. I built the account selection UI to let users intuitively toggle between regional fiat (USD, NGN) and crypto wallets without context switching. In the final transfer flow, I stripped away all secondary navigation and utilized an oversized numeric pad to drive confident, error-free transactions.',
      ],
    },
    {
      type: 'media',
      media: 'chada-liquidity',
      alt: 'Borderless liquidity and cross-border transfers',
      displayWidth: 190,
    },
    {
      type: 'text',
      heading: 'Intelligence-Driven Market Reassurance',
      uppercase: false,
      paragraphs: [
        "Because market anxiety is the leading cause of abandoned savings plans, I integrated 'Jenna', an expert AI trading agent that I designed with a core focus on emotional intelligence. Rather than just having the system spit out raw data, Jenna is structured to contextualize market pullbacks, deliver expert projections, and provide the proactive, human-like customer support required to keep users confident in their long-term holdings.",
      ],
    },
    {
      type: 'media',
      media: 'chada-jenna',
      alt: 'Jenna AI trading assistant and market advisor',
      displayWidth: 190,
    },
    {
      type: 'grid',
      items: [
        {
          media: 'chada-grid-1',
          alt: 'numeric keypad send flow',
        },
        {
          media: 'chada-grid-2',
          alt: 'dark assets and Bitcoin chart',
        },
        {
          media: 'chada-grid-3',
          alt: 'naira keypad and success confirmation',
        },
        {
          media: 'chada-grid-4',
          alt: 'transfer form screens',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Final note',
      uppercase: false,
      paragraphs: [
        "Ultimately, designing Chada was about bridging the gap between raw financial data and human trust. Developing the foundation for 'Jenna' allowed me to deeply explore how emotional intelligence systems can elevate a standard AI agent into a proactive, reassuring advisor. The end result is a cohesive platform that not only secures assets but actively encourages users to build long-term wealth with confidence.",
      ],
    },
  ],
};

export default chadaCaseStudy;