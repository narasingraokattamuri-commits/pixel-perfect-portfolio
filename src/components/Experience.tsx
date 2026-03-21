import { Briefcase } from "lucide-react";

const experienceData = [
  {
    period: "May 2024 - Current",
    role: "Software Engineer",
    company: "Your Company",
  },
  {
    period: "Jun 2023 - May 2024",
    role: "Backend Developer",
    company: "Previous Company",
  },
  {
    period: "Dec 2021 - Feb 2022",
    role: "Web Developer Intern",
    company: "First Company",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-16 lg:px-24 bg-card">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Experience</h2>
      <div className="space-y-6">
        {experienceData.map((exp, i) => (
          <div
            key={i}
            className="bg-secondary rounded-xl p-6 flex items-start gap-4 hover:-translate-y-0.5 transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Briefcase className="text-primary" size={22} />
            </div>
            <div>
              <p className="text-primary text-xs font-medium tracking-wide mb-1">
                {exp.period}
              </p>
              <h3 className="text-foreground font-semibold text-lg">{exp.role}</h3>
              <p className="text-muted-foreground text-sm">{exp.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
