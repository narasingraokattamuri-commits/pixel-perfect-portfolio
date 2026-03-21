import aboutImg from "@/assets/about-illustration.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Who I Am</h2>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <p className="text-muted-foreground leading-relaxed text-base mb-4">
            Hey there, I'm a creative soul navigating the web design and
            development realm. I love building products that make a difference.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base">
            By day, I spearhead projects as a developer. By night, I dive into
            freelance gigs, crafting innovative products. Amidst this, I enjoy
            writing articles, exploring machine learning and AI. I'm a perpetual
            learner, endlessly curious, always seeking out new frontiers.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={aboutImg}
            alt="About illustration"
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
