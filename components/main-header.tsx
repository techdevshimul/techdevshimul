"use client";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      body.style.overflow = isOpen ? "hidden" : "auto";
    }
    return () => {
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="box-border rounded-md mt-4 max-w-screen-xl mx-auto bg-white dark:bg-slate-800 text-black dark:text-white">
        <div className="flex justify-between mx-4 sm:mx-10 py-4 items-center gap-4">
          <Link href="/">
            <h1 className={`text-2xl font-bold ${pacifico.className}`}>
              TechDevShimul
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-5">
            <li>
              <Link href="#about" className="font-bold">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#skills">SKILLS</Link>
            </li>
            <li>
              <Link href="#projects">PROJECTS</Link>
            </li>
            <li>
              <Link href="#education">EDUCATION</Link>
            </li>
            <li>
              <Link href="#contact">CONTACT</Link>
            </li>
          </ul>

          <Link
            className="hidden lg:block px-2 py-1 outline outline-5 rounded-md"
            href="/resume"
          >
            Resume
          </Link>

          {/* Hamburger Icon */}
          <GiHamburgerMenu
            className="lg:hidden cursor-pointer text-2xl"
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        id="sidebar"
        className={`fixed top-0 right-0 h-screen w-2/3 max-w-sm bg-slate-700 text-white p-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className={`text-2xl font-bold ${pacifico.className}`}>
              TechDevShimul
            </h1>
          </Link>
          <IoMdCloseCircle
            className="cursor-pointer text-3xl"
            onClick={toggleMenu}
          />
        </div>

        <ul className="flex flex-col items-center gap-5 mt-10">
          <li>
            <Link href="#about" onClick={toggleMenu}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="#skills" onClick={toggleMenu}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={toggleMenu}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="#education" onClick={toggleMenu}>
              EDUCATION
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={toggleMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
