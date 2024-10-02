import Link from "next/link";
import { Pacifico } from "next/font/google";
import SideBarMenu from "./sidebar-menu";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function MainHeader() {
  return (
    <>
      <nav className="box-border rounded-md mt-4 max-w-screen-xl mx-auto bg-white dark:bg-slate-800 text-black dark:text-white">
        <div className="flex justify-between mx-4 sm:mx-10 py-4 items-center flex-wrap gap-4">
          <Link href="/">
            <div className="flex items-center gap-2">
              <h1 className={`text-2xl font-bold ${pacifico.className}`}>
                TechDevShimul
              </h1>
            </div>
          </Link>
          <ul className="hidden lg:flex lg:flex-wrap lg:flex-row lg:justify-center lg:gap-5">
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
            className="hidden lg:block px-2 py-1 outline outline-5 rounded-md box-border"
            href="/resume"
          >
            Resume
          </Link>
          <SideBarMenu />
        </div>
      </nav>
    </>
  );
}
