import { EXPERIENCES, OPEN_SOURCE_TOOLS, PROJECTS, SKILL_FREQUENCY } from "@/lib/data";
import { RECRUITER_PROFILE } from "@/lib/recruiter";

export function buildPortfolioKnowledge(): string {
  const experienceBlock = EXPERIENCES.map((exp) => {
    const dates = exp.currentlyWorkHere
      ? `${exp.startDate.getFullYear()} to Present`
      : `${exp.startDate.getFullYear()} to ${exp.endDate?.getFullYear() ?? ""}`;
    return `- ${exp.position} at ${exp.company} (${dates}): ${exp.summary.join(" ")}`;
  }).join("\n");

  const projectsBlock = PROJECTS.map((p) => {
    const caseStudy = p.problem
      ? `\n  Problem: ${p.problem}\n  Solution: ${p.solution}\n  Impact: ${p.impact?.join("; ")}`
      : "";
    const fe = p.frontend
      ? `\n  Frontend: ${p.frontend.summary} Stack: ${p.frontend.stack.join(", ")}. ${p.frontend.details.join(" ")}`
      : "";
    const be = p.backend
      ? `\n  Backend: ${p.backend.summary} Stack: ${p.backend.stack.join(", ")}. ${p.backend.details.join(" ")}`
      : "";
    const role = p.role ? `\n  Role: ${p.role}` : "";
    const overview = p.overview ? `\n  Overview: ${p.overview}` : "";
    return `- ${p.name} [${p.categories.join(", ")}]: ${p.description} Tech: ${p.technologies.join(", ")}${role}${overview}${caseStudy}${fe}${be}`;
  }).join("\n");

  const skillsBlock = SKILL_FREQUENCY.map(
    (g) => `${g.frequency}: ${g.skills.map((s) => s.label).join(", ")}`
  ).join("\n");

  const toolsBlock = OPEN_SOURCE_TOOLS.map(
    (t) =>
      `${t.name}${t.brand ? ` (${t.brand})` : ""}: ${t.description}${
        t.installCommand ? ` Install: ${t.installCommand}` : ""
      }`
  ).join("\n");

  return `
You answer questions about Devesh Maurya's professional portfolio.
Use only the facts below. If something is missing, say you do not have that information.
Do not invent employers, metrics, or projects. Keep answers concise and factual.

PROFILE
Name: ${RECRUITER_PROFILE.name}
Role: ${RECRUITER_PROFILE.role}
Location: ${RECRUITER_PROFILE.location}
Availability: ${RECRUITER_PROFILE.availability}
Notice period: ${RECRUITER_PROFILE.noticePeriod}
Experience: ${RECRUITER_PROFILE.experience}
Stack: ${RECRUITER_PROFILE.currentStack.join(", ")}
Email: ${RECRUITER_PROFILE.email}
LinkedIn: ${RECRUITER_PROFILE.linkedIn}
GitHub: ${RECRUITER_PROFILE.github}

EXPERIENCE
${experienceBlock}

PROJECTS
${projectsBlock}

SKILLS BY FREQUENCY
${skillsBlock}

OPEN SOURCE AND TOOLS
${toolsBlock}
`.trim();
}
