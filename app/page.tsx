import Image from "next/image";
import photo from "@/public/assets/images/photo.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-2 mx-auto max-w-screen-xl ">
      <div className="flex gap-9 justify-between p-6">
        <div className="flex flex-col justify-center gap-3 max-w-screen-sm">
          <p className="text-xl">Hi, my name is</p>
          <h2 className="text-5xl font-bold">Shimul Hossain</h2>
          <p className="text-3xl">
            Welcome to techdevshimul portfolio website.
          </p>
          <p>
            I am Shimul Hossain. Being interested to explore technologies I
            found web development as my passion. I am aspiring to bring that
            passion to a full-time role.
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
    </main>
  );
}
