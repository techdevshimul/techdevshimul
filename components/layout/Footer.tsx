import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-dim border-t border-glass-border py-24">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-12 opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-headline-sm text-headline-sm text-on-background font-bold tracking-tighter">
            SHIMUL HOSSAIN
          </div>
          <p className="font-body-md text-body-md text-outline">
            © 2024 Shimul Hossain. Built with precision and code.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-10">
          <a
            className="font-label-sm text-label-sm text-primary hover:text-secondary transition-all duration-200"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-label-sm text-label-sm text-primary hover:text-secondary transition-all duration-200"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="font-label-sm text-label-sm text-primary hover:text-secondary transition-all duration-200"
            href="#"
          >
            Twitter
          </a>
          <a
            className="font-label-sm text-label-sm text-primary hover:text-secondary transition-all duration-200"
            href="#"
          >
            Stack Overflow
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
