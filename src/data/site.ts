export interface Project {
  title: string;
  subtitle: string;
  poster: string;
  video: string | { mp4?: string; webm?: string } | null;
  tag?: string;
  aspect?: string;
  radius?: 'radius-1' | 'radius-2';
  featured?: boolean;
  href?: string;
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
      title: "ApplatchKids App - Education & Parental Control",
      subtitle: "Product design",
      poster: "/images/projects/applatch-kids.png",
      video: null,
      aspect: "1.76/1",
      radius: "radius-2",
      featured: true,
    },
    {
      title: "Chada - Own & Trade Crypto Assets",
      subtitle: "UI/UX Design",
      poster: "/images/projects/chada.png",
      video: null,
      aspect: "1.13/1",
      radius: "radius-1",
      featured: false,
    },
    {
      title: "'Redacted' - Healthy Meal Planner",
      subtitle: "UI/UX Design",
      poster: "/images/projects/meal-planner.png",
      video: null,
      aspect: "1.13/1",
      radius: "radius-1",
      featured: false,
    },
    {
      title: "AgentFram - SaaS Automation Tool",
      subtitle: "Framer Template",
      tag: "Free",
      poster: "/images/projects/agent-flow.png",
      video: null,
      aspect: "1.13/1",
      radius: "radius-1",
      featured: false,
    },
    {
      title: "Finnoval - Payment Infrastructure",
      subtitle: "Framer Template",
      tag: "$59",
      poster: "/images/projects/finwave.png",
      video: null,
      aspect: "1.13/1",
      radius: "radius-1",
      featured: false,
    },
  ],
};

export default siteConfig;
