import {
  SiGithub,
  SiInstagram,
  SiX,
  SiFacebook,
} from '@icons-pack/react-simple-icons';
import { FaLinkedin, FaItchIo } from 'react-icons/fa6'

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/PedroHQCoelho", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/pedrohqcoelho", label: "LinkedIn", title: "LinkedIn" },
  { icon: SiInstagram, href: "https://instagram.com/pedro.hq.coelho", label: "Instagram" },
  { icon: SiX, href: "https://x.com/pedrohqcoelho", label: "X" },
  { icon: FaItchIo, href: "https://pedrocoelho.itch.io", label: "itch.io", title: "itch.io" },
  { icon: SiFacebook, href: "https://facebook.com/pedrohqcoelho", label: "Facebook" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
              Pedro Coelho
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Pedro Coelho. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                title={social.title}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};