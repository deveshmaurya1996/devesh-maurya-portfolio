import { EXTERNAL_LINKS, getFeaturedProjects } from "@/lib/data";
import { calculateYearsOfExperience } from "@/lib/utils";

export const RECRUITER_PROFILE = {
  name: "Devesh Maurya",
  role: "Full Stack Engineer",
  availability: "Open to opportunities",
  location: "Mumbai, India",
  noticePeriod: "Flexible / as agreed",
  experience: `${calculateYearsOfExperience()} years`,
  currentStack: [
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "TypeScript",
    "FastAPI",
    "AI APIs",
  ],
  email: EXTERNAL_LINKS.EMAIL,
  linkedIn: EXTERNAL_LINKS.LINKEDIN,
  github: EXTERNAL_LINKS.GITHUB,
  portfolio: "https://devesh-maurya-portfolio.vercel.app/",
  resumeView: EXTERNAL_LINKS.RESUME_VIEW,
  resumePdf: EXTERNAL_LINKS.RESUME_PDF,
};

export function getRecruiterTopProjects() {
  return getFeaturedProjects()
    .slice(0, 4)
    .map((p) => ({
      name: p.name,
      slug: p.slug,
      href: `/work/${p.slug}`,
      categories: p.categories,
    }));
}
