import { socialLinksArr } from "@/utils/social-contacts";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-surface-dim border-t border-glass-border py-24">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-12 opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-headline-sm text-headline-sm text-on-background font-bold tracking-tighter">
            SHIMUL HOSSAIN
          </div>
          <p className="font-body-md text-body-md text-outline">
            © {currentYear} Shimul Hossain. Built with precision and code.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4">
          {socialLinksArr.map((link) => (
            <a
              key={link.id}
              className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low border border-glass-border hover:border-primary/50 transition-all group"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-label-md text-label-md group-hover:text-primary transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
