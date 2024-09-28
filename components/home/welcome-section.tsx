import Link from "next/link";
import photo from "@/public/assets/images/photo.jpg";
// import Typewriter from "typewriter-effect";

export default function WelcomeSection() {
  return (
    <div className="rounded-md mt-4 bg-white dark:bg-slate-800 text-black dark:text-white flex gap-9 justify-between p-24">
      <div className="flex flex-col justify-center gap-3 max-w-xl">
        <p className="text-xl text-gray-300">Hi, my name is</p>
        <h2 className="text-5xl font-bold">Shimul Hossain</h2>

        {/* <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello World!")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        /> */}

        <p className="text-2xl text-gray-300">- Full Stack Web Developer</p>
        <p className="text-xl text-gray-400">
          I am Shimul Hossain. Being interested to explore technologies I found
          web development as my passion. I am aspiring to bring that passion to
          a full-time role.
        </p>

        <Link
          className="my-3 p-1 outline outline-5 rounded-md text-center w-52"
          href="/resume"
        >
          Download my resume
        </Link>
      </div>
      <div className="image-profile">
        <img src={photo.src} alt="Shimul Hossain Photo" />
      </div>
    </div>
  );
}
