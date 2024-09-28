import Link from "next/link";
import classes from "./project-card.module.css";

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
    <div className={classes.projectCard}>
      <Link target="_blank" href={project.images[0].image}>
        <img src={project.images[0].image} />
      </Link>
      <div className={classes.cardBody}>
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        <div className={classes.tech}>{tech}</div>
        <div className={classes.links}>{links}</div>
      </div>
    </div>
  );
}
