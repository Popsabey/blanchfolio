import type { CaseStudy } from './types';

export const redactedCaseStudy: CaseStudy = {
  slug: 'redacted',
  title: '‘Redacted’ - Healthy Meal Planner',
  category: 'UI/UX Design',
  hero: 'redacted-hero',
  heroAlt: '‘Redacted’ food planner and calorie tracking mobile application showcase',
  blocks: [
    {
      type: 'text',
      heading: 'Overview',
      uppercase: false,
      paragraphs: [
        'I designed ‘Redacted’ to serve as an intelligent food planner and calorie tracking platform that actively guides users toward healthier lifestyles. Designed to go beyond simple calorie counting; it uses data tracking and artificial intelligence to analyze eating habits and deliver personalized meal recommendations, empowering users to make informed nutritional choices effortlessly.',
      ],
    },
    {
      type: 'media',
      media: 'redacted-preferences',
      alt: 'Personalized dietary preferences and meal customization interface',
      displayWidth: 510,
    },
    {
      type: 'text',
      heading: 'Designing for Sustainable Habits',
      uppercase: false,
      paragraphs: [
        "I recognized that the biggest hurdle in health apps is user fatigue—logging meals and tracking data often feels like a chore, leading to high drop-off rates. My challenge was to design a frictionless, engaging interface that seamlessly integrates tracking into the user's daily routine. I needed to present complex nutritional data and AI-driven insights in a way that felt encouraging and actionable, rather than overwhelming or clinical.",
      ],
    },
    {
      type: 'media',
      media: 'redacted-dietitian',
      alt: 'Daily calorie tracking and nutritional data insights on mobile',
      displayWidth: 184,
    },
    {
      type: 'text',
      heading: 'Intuitive Meal Planning',
      uppercase: false,
      paragraphs: [
        "To make daily planning effortless, I designed a calendar-based interface that clearly maps out the week's meals. I broke down the daily view into digestible, card-based modules that pair the food item with immediate context (e.g., “Just the right amount of calories”). This allowed me to present the day's nutritional strategy at a glance.",
      ],
    },
    {
      type: 'media',
      media: 'redacted-planner',
      alt: 'Calendar-based weekly meal planner and recipe cards',
      displayWidth: 351,
    },
    {
      type: 'text',
      heading: 'Actionable II Integration',
      uppercase: false,
      paragraphs: [
        "I integrated “Essie,” the AI assistant, directly into the meal context. Instead of forcing users to dig for information, I designed Essie to proactively surface health benefits and preparation instructions right on the meal card. I also built a dedicated conversational UI with both voice (as the human comms means) and text inputs, giving users an on-demand digital dietician to ask specific questions about their diet in a natural, conversational format.",
      ],
    },
    {
      type: 'media',
      media: 'redacted-essie',
      alt: 'Essie AI voice and conversational assistant interface',
      displayWidth: 345,
    },
    {
      type: 'text',
      heading: 'Visualizing Progress & Ecosystem',
      uppercase: false,
      paragraphs: [
        "To encourage long-term retention, I visualized user data through engaging, easy-to-scan charts on the home dashboard. I used bar graphs for weekly calorie intake and a donut chart for eating habits to provide immediate positive reinforcement. In the profile section, I implemented a calendar heatmap to track diet consistency over several months and added a simple “Connected devices” hub, allowing users to seamlessly sync their wearables for automated tracking.",
      ],
    },
    {
      type: 'media',
      media: 'redacted-profile',
      alt: 'Dashboard health charts, habit heatmap, and connected devices',
      displayWidth: 353,
    },
    {
      type: 'text',
      heading: 'Final note',
      uppercase: false,
      paragraphs: [
        "Ultimately, designing ‘Redacted’ was about transforming raw nutritional data into a supportive digital companion. By embedding ‘Essie’ intuitively throughout the user journey, I was able to shift the platform from a passive tracking tool into a proactive health coach. I focused heavily on softening the presentation of data using approachable visualizations and conversational interfaces to ensure users feel guided rather than judged.",
      ],
    },
  ],
};

export default redactedCaseStudy;
