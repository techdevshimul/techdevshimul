import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: any) {
  const tech = project.tech.map((tech: any) => (
    <p
      className="bg-yellow-500 text-black rounded-lg px-3 py-1 text-sm sm:text-base"
      key={tech.id}
    >
      {tech.name}{" "}
    </p>
  ));
  const links = project.links.map((link: any) => (
    <a
      href={link.link}
      key={link.id}
      className={`flex items-center gap-2 px-3 py-2 rounded-md justify-center ${
        link.name == "GitHub" ? "bg-gray-700 " : "bg-blue-700"
      }`}
      target="_blank"
    >
      <Image src={link.linkImage} alt="link" className="w-6" />
      <p className="border-white text-lg sm:text-xl"> {link.name} </p>
    </a>
  ));

  return (
    <div
      className={`w-96 relative overflow-hidden rounded-2xl grow transition-all duration-1000 group`}
    >
      <Image
        src={project.images[0].image}
        alt="project image"
        className="object-cover h-[550px] sm:size-full transition-all duration-500 group-hover:blur-xs"
      />

      <div
        className={`absolute w-full bg-black/90 p-5 ease-in-out duration-500 -bottom-3/4 opacity-0 transition-all group-hover:bottom-0 group-hover:opacity-100 rounded-t-lg`}
      >
        <h2 className="text-xl sm:text-3xl underline text-center pb-4">
          {project.title}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">{project.desc}</p>
        <div className="flex flex-wrap gap-3 py-3">{tech}</div>
        <hr className="mb-5 m-3" />
        <div className="flex gap-4 flex-col sm:flex-row justify-center">
          {links}
        </div>
      </div>
    </div>
  );
}
