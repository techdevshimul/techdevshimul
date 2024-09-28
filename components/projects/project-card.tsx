import Link from "next/link";
import classes from "./project-card.module.css";
import Image from "next/image";

export default function ProjectCard({ project }: any) {
  // console.log(project);

  const tech = project.tech.map((tech: any) => (
    <p key={tech.id}>{tech.name} </p>
  ));
  const links = project.links.map((link: any) => (
    <a href={link.link} key={link.id}>
      <p>{link.name} </p>
    </a>
  ));

  return (
    <div className={`max-w-lg relative overflow-hidden rounded-2xl grow group`}>
      <Link target="_blank" href={project.images[0].image.src}>
        <Image
          src={project.images[0].image}
          alt="project image"
          className="w-full"
        />
      </Link>
      <div
        className={`absolute bg-black p-5 ease-in-out duration-500 -bottom-3/4 opacity-0 transition-all group-hover:bottom-0 group-hover:opacity-100`}
      >
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        <div className={classes.tech}>{tech}</div>
        <div className={classes.links}>{links}</div>
      </div>
    </div>
  );
}
