import { TECHNOLOGIES, SKILL_CATEGORIES } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import TechDetails from "@/components/data-display/tech-details";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const SkillsSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      <div className="mb-12 grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>

      {/* Additional Skills Section */}
      <div className="space-y-8">
        <div className="text-center">
          <Typography variant="h3" className="mb-2 text-xl font-semibold">
            Additional Expertise
          </Typography>
          <Typography variant="body2" className="text-muted-foreground">
            Specialized skills and knowledge areas
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.name} className="text-center">
              <div className="mb-4 flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                  <category.icon className="h-6 w-6" />
                </div>
                <Typography variant="h3" className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {category.name}
                </Typography>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-700 hover:shadow-sm dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-300"
                  >
                    {skill.icon && (
                      <skill.icon className="h-3 w-3" />
                    )}
                    {skill.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;
