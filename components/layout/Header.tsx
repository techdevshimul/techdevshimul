"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LinksOptions = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Education", href: "/education" },
  { name: "Blogs", href: "/blogs" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Workflows", href: "/workflows" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 w-full z-50 bg-charcoal/80 backdrop-blur-md border-b border-glass-border shadow-sm shadow-glow-electric/5">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="font-headline-sm text-headline-sm font-bold text-on-background tracking-tighter flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]"></span>
          SH
        </div>
        <ul className="hidden md:flex gap-8 items-center">
          {LinksOptions.map((link) => (
            <li className="" key={link.name}>
              <Link
                className={`text-primary font-bold font-label-md text-label-md ${pathname === link.href ? "border-b-2 border-primary pb-1" : ""}`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-label-md text-label-md font-bold transition-all duration-300 hover:scale-105 glow-hover">
          Hire Me
        </button>
      </nav>
    </header>
  );
};

export default Header;
