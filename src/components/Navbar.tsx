import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contacts", href: "#contacts" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4">
        <a href="#" className="font-script text-3xl text-foreground z-50">
          Your Name
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="z-50 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Fullscreen nav overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
