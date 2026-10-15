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

export interface ExperienceItem {
  company: string;
  role: string;
  years: string;
  logo: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  bio: string;
  email: string;
  xUrl: string;
  projects: Project[];
  experiences: ExperienceItem[];
}

export const siteConfig: SiteConfig = {
  name: "Abiodun Popoola",
  title: "Designer & UI Engineer",
  role: "Lead Product Designer & UI Engineer",
  bio: "I design and build clean, intuitive digital experiences for everyday use.",
  email: "popsabey.ux@gmail.com",
  xUrl: "https://x.com/TODO", // TODO: Add real X URL
  projects: [
    {
      title: "ApplatchKids App - Education & Parental Control",
      subtitle: "Product design",
      poster: "/images/projects/applatch-kids.png",
      video: null,
      aspect: "1.76/1",
      radius: "radius-2",
      featured: true,
      href: "/work/applatchkids",
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
  experiences: [
    {
      company: "Applatch/ApplatchKids",
      role: "Staff Product Designer",
      years: "2025 - Present",
      logo: "/images/experience/applatch.png",
    },
    {
      company: "Proattire Technology",
      role: "Product Designer",
      years: "2023 - 2025",
      logo: "/images/experience/proattire.png",
    },
    {
      company: "Freelance",
      role: "Product Designer",
      years: "2022 - 2023",
      logo: "/images/experience/freelance.svg",
    },
    {
      company: "Foodyours",
      role: "UI/UX Designer",
      years: "2021 - 2022",
      logo: "/images/experience/foodyours.png",
    },
    {
      company: "Kufuta",
      role: "UI/UX Designer",
      years: "2020",
      logo: "/images/experience/kufuta.png",
    },
  ],
};

export default siteConfig;