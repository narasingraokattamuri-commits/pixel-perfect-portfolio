import { GraduationCap } from "lucide-react";

const educationData = [
  {
    period: "2019-2023",
    degree: "Bachelor of Technology",
    institution: "Your University Name",
  },
  {
    period: "2018-2019",
    degree: "12th Grade",
    institution: "Your School Name",
  },
  {
    period: "2016-2017",
    degree: "10th Grade",
    institution: "Your School Name",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-16 lg:px-24 bg-card">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Education</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {educationData.map((edu, i) => (
          <div
            key={i}
            className="bg-secondary rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <p className="text-primary text-xs font-medium tracking-wide mb-2">
              {edu.period}
            </p>
            <h3 className="text-foreground font-semibold text-lg mb-1">
              {edu.degree}
            </h3>
            <p className="text-muted-foreground text-sm">{edu.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
