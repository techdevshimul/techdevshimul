import Link from "next/link";
import photo from "@/public/assets/images/photo.jpg";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <div
      id="about"
      className="rounded-md mt-4 bg-white dark:bg-slate-800 text-black dark:text-white flex gap-9 justify-between items-center p-4 sm:p-9 lg:p-24 flex-col lg:flex-row"
    >
      <div className="flex flex-col justify-center gap-3 max-w-xl order-1 lg:order-none">
        <p className="text-base sm:text-xl text-gray-300">Hi, my name is</p>
        <h2 className="text-3xl sm:text-5xl font-bold">Shimul Hossain</h2>

        <p className="text-lg sm:text-2xl text-gray-300">
          - Full Stack Web Developer
        </p>
        <p className="text-base sm:text-xl text-gray-400">
          Being interested to explore technologies I found web development as my
          passion. I am aspiring to bring that passion to a full-time role.
        </p>

        <Link
          className="my-3 p-1 outline outline-5 rounded-md text-center w-52"
          href="/resume"
        >
          Download my resume
        </Link>
      </div>
      <div className="image-profile">
        <Image src={photo} alt="Shimul Hossain Photo" />
      </div>
    </div>
  );
}
