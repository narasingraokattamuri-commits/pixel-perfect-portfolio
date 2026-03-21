import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Automation Tool",
    description:
      "A project that automates repetitive tasks using scripting and browser automation. Built with Node.js and Puppeteer.",
    tags: ["Node JS"],
    color: "from-primary/30 to-primary/10",
  },
  {
    title: "Weather App",
    description:
      "An app for real-time weather forecasts using weather APIs. Shows weather based on current geolocation.",
    tags: ["React"],
    color: "from-blue-500/30 to-blue-500/10",
  },
  {
    title: "Data Analysis App",
    description:
      "A project to forecast trends based on historical data using machine learning and time series analysis.",
    tags: ["Python", "Scikit-learn", "Pandas"],
    color: "from-green-500/30 to-green-500/10",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className="bg-card rounded-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
              <ExternalLink className="text-foreground/30 group-hover:text-primary transition-colors" size={48} />
            </div>
            <div className="p-6">
              <h3 className="text-foreground font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="#"
          className="text-primary font-medium hover:underline transition-all"
        >
          View All →
        </a>
      </div>
    </section>
  );
};

export default Projects;
