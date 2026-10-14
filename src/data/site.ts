export interface Project {
  title: string;
  subtitle: string;
  poster: string;
  video: string | { mp4?: string; webm?: string } | null;
  tag?: string;
  aspect?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  bio: string;
  email: string;
  xUrl: string;
  projects: Project[];
}

export const siteConfig: SiteConfig = {
  name: "Abiodun Popoola",
  title: "Designer & UI Engineer",
  role: "Lead Product Designer & UI Engineer",
  bio: "I design and build clean, intuitive digital experiences for everyday use.",
  email: "popsabey@gmail.com",
  xUrl: "https://x.com/popsabey",
  projects: [
    {
      title: "AppLatch Kids App - Education & Parental Control",
      subtitle: "Product design",
      poster: "/images/projects/applatch-kids.png",
      video: null,
      aspect: "16/9"
    },
    {
      title: "Chada - Own & Trade Crypto Assets",
      subtitle: "UI/UX Design",
      poster: "/images/projects/chada.png",
      video: null,
      aspect: "1/1"
    },
    {
      title: "[Redacted] - Healthy Meal Planner",
      subtitle: "UI/UX Design",
      poster: "/images/projects/meal-planner.png",
      video: null,
      aspect: "1/1"
    },
    {
      title: "Agent Flow - SaaS Automation Tool",
      subtitle: "Framer Template",
      poster: "/images/projects/agent-flow.png",
      video: null,
      tag: "Free",
      aspect: "1/1"
    },
    {
      title: "Finwave - Payment Infrastructure",
      subtitle: "Framer Template",
      poster: "/images/projects/finwave.png",
      video: null,
      tag: "$35",
      aspect: "1/1"
    }
  ]
};

export default siteConfig;
