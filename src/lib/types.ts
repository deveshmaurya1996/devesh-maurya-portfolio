import type { StaticImageData } from "next/image";

export type TechDetailsType = {
  label: string;
  url: string;
  logo?: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
};

export type ExperienceDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  company: string;
  companyUrl?: string;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type ProjectCategory =
  | "Web"
  | "Mobile"
  | "AI"
  | "SaaS"
  | "Open Source";

export type CaseStudyLayer = {
  summary: string;
  stack: string[];
  details: string[];
};

export type CaseStudyModule = {
  name: string;
  description: string;
};

export type ProjectDetails = {
  name: string;
  slug: string;
  description: string;
  url: string;
  previewImage: string | StaticImageData;
  technologies: string[];
  androidLink: string;
  iosLink: string;
  categories: ProjectCategory[];
  featured?: boolean;
  role?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  challenges?: string[];
  impact?: string[];
  architecture?: { nodes: string[] };
  frontend?: CaseStudyLayer;
  backend?: CaseStudyLayer;
  modules?: CaseStudyModule[];
  apiHighlights?: string[];
  gallery?: (string | StaticImageData)[];
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};

export type SkillItem = {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export type SkillCategory = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
};

export type SkillFrequency = "Daily" | "Weekly" | "Occasionally";

export type FrequencySkill = {
  label: string;
  techLabel?: string;
};

export type FrequencySkillGroup = {
  frequency: SkillFrequency;
  skills: FrequencySkill[];
};

export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  tag?: string;
  /** Path under public/, e.g. /images/blog/cover.svg */
  coverImage?: string;
};

export type HowIBuildPrinciple = {
  title: string;
  description: string;
};

export type OpenSourceTool = {
  name: string;
  tagline: string;
  description: string;
  installCommand?: string;
  npmUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  blogSlug?: string;
  highlights: string[];
  brand?: string;
  /** Cover / preview under public/, e.g. /images/blog/cover.png */
  coverImage?: string;
};
