import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Harismehd", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/haris-mehmood-b07790335/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} <span className="text-foreground font-medium">HM Studios</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
