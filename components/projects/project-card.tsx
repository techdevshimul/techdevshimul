import Link from "next/link";
// import classes from "./project-card.module.css";
import Image from "next/image";

export default function ProjectCard({ project }: any) {
  // console.log(project);

  const tech = project.tech.map((tech: any) => (
    <p className="bg-yellow-500 text-black rounded-lg px-3 py-1" key={tech.id}>
      {tech.name}{" "}
    </p>
  ));
  const links = project.links.map((link: any) => (
    <a
      href={link.link}
      key={link.id}
      className={`flex items-center gap-2 px-3 py-1 rounded-md ${
        link.name == "GitHub" ? "bg-gray-700 " : "bg-blue-700"
      }`}
    >
      <Image src={link.linkImage} alt="link" className="w-5" />
      <p className="border-white text-lg"> {link.name} </p>
    </a>
  ));

  return (
    <div
      className={`max-w-lg relative overflow-hidden rounded-2xl grow transition-all duration-1000 group`}
    >
      <Link
        target="_blank"
        href={project.images[0].image.src}
        className="transition-all duration-500 group-hover:blur-sm w-full"
      >
        <Image
          src={project.images[0].image}
          alt="project image"
          className="w-full"
        />
      </Link>

      <div
        className={`absolute bg-black/90 p-5 ease-in-out duration-500 -bottom-3/4 opacity-0 transition-all group-hover:bottom-0 group-hover:opacity-100 rounded-t-lg`}
      >
        <h2 className="text-3xl underline text-center pb-4">{project.title}</h2>
        <p className="text-gray-400">{project.desc}</p>
        <div className="flex flex-wrap gap-3 py-3">{tech}</div>
        <hr className="mb-5 m-3" />
        <div className="flex gap-4 justify-center ">{links}</div>
      </div>
    </div>
  );
}
