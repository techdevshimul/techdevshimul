import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <nav className="max-w-screen-xl mx-auto">
        <div className="flex justify-between mx-10 items-center flex-wrap">
          <Link href="/">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">TechDevShimul</h1>
            </div>
          </Link>
          <ul className="flex flex-wrap flex-row justify-center gap-5 my-5">
            <li>
              <Link href="/" className="font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link
                className="p-2 outline outline-5 h-8 rounded-md"
                href="/resume"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr className=" border-gray-700" />
    </>
  );
}
