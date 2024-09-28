import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function MainHeader() {
  return (
    <>
      <nav className="box-border rounded-md mt-4 max-w-screen-xl mx-auto bg-white dark:bg-slate-800 text-black dark:text-white">
        <div className="flex justify-between mx-10 py-4 items-center flex-wrap gap-4">
          <Link href="/">
            <div className="flex items-center gap-2">
              <h1 className={`text-xl font-bold ${pacifico.className}`}>
                TechDevShimul
              </h1>
            </div>
          </Link>
          <ul className="flex flex-wrap flex-row justify-center gap-5">
            <li>
              <Link href="#" className="font-bold">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#">SKILLS</Link>
            </li>
            <li>
              <Link href="#">PROJECTS</Link>
            </li>
            <li>
              <Link href="#">EDUCATION</Link>
            </li>
            <li>
              <Link href="#">CONTACT</Link>
            </li>
          </ul>
          <Link
            className="px-2 py-1 outline outline-5 rounded-md box-border"
            href="/resume"
          >
            Resume
          </Link>
        </div>
      </nav>
    </>
  );
}
