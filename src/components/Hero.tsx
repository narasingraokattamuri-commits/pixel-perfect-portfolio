import { Linkedin, Github, BookOpen } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex relative overflow-hidden">
      {/* Left orange panel */}
      <div className="hidden md:flex w-[38%] bg-primary relative flex-col justify-end pb-12 pl-8">
        <div className="flex gap-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-background hover:opacity-70 transition-opacity"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-background hover:opacity-70 transition-opacity"
          >
            <Github size={24} />
          </a>
          <a
            href="https://blog.example.com"
            target="_blank"
            rel="noreferrer"
            className="text-background hover:opacity-70 transition-opacity"
          >
            <BookOpen size={24} />
          </a>
        </div>
      </div>

      {/* Right dark panel */}
      <div className="flex-1 bg-background flex items-center relative">
        {/* Avatar circle overlapping both panels */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden md:block">
          <div className="w-64 h-64 rounded-full border-4 border-primary overflow-hidden bg-card shadow-2xl">
            <img
              src={avatarImg}
              alt="Profile avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile avatar */}
        <div className="md:hidden absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-40 h-40 rounded-full border-4 border-primary overflow-hidden bg-card shadow-2xl">
            <img
              src={avatarImg}
              alt="Profile avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="ml-8 md:ml-44 lg:ml-52 px-6 md:px-0 pt-56 md:pt-0">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
            Web Developer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your Name
          </h1>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed mb-8">
            A confident, passionate, determined, and self-taught individual,
            seeking various opportunities to explore and research in the area
            of computer science.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-95"
            >
              Download CV
            </a>
            <a
              href="#contacts"
              className="px-6 py-2.5 rounded-full border-2 border-primary text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors active:scale-95"
            >
              Contact
            </a>
          </div>

          {/* Mobile social icons */}
          <div className="flex gap-5 mt-12 md:hidden">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-primary">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-primary">
              <Github size={22} />
            </a>
            <a href="https://blog.example.com" target="_blank" rel="noreferrer" className="text-primary">
              <BookOpen size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile orange strip at top */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-primary md:hidden" />
    </section>
  );
};

export default Hero;
