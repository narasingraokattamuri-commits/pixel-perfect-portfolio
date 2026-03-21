const skills = [
  "Java", "Python", "MySQL", "HTML", "CSS", "JavaScript",
  "React", "Firebase", "Django", "Docker", "GCP", "Git",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Skills</h2>
      {/* Marquee container */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee gap-8 w-max">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-24 h-24 bg-card rounded-xl hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-2">
                <span className="text-primary font-bold text-xs">
                  {skill.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-foreground text-xs font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
