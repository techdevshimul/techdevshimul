// import Link from "next/link";
import ProjectCard from "./project-card";
import { Iceberg } from "next/font/google";

const iceberg = Iceberg({ subsets: ["latin"], weight: "400" });

const project_data = [
  {
    id: 0,
    title: "E-commerce Project",
    desc: "Built With MERN Stack. Built With MERN Stack. Built With MERN Stack. Built With MERN Stack.",
    tech: [
      { id: 0, name: "MongoDB" },
      { id: 1, name: "Express.js" },
      { id: 2, name: "React.js" },
      { id: 4, name: "Node.js" },
    ],
    images: [
      { id: 0, image: "/assets/images/project-images/0.jpg" },
      { id: 1, image: "/assets/images/project-images/1.webp" },
    ],
    links: [
      { id: 0, name: "GitHub", link: "https://github.link" },
      { id: 1, name: "Live Site", link: "https://live-website.link" },
    ],
  },
  {
    id: 1,
    title: "Burger Builder Project",
    desc: "Built With MERN Stack. Built With MERN Stack. Built With MERN Stack. Built With MERN Stack.",
    tech: [
      { id: 0, name: "MongoDB" },
      { id: 1, name: "Express.js" },
      { id: 2, name: "React.js" },
      { id: 4, name: "Node.js" },
    ],
    images: [
      { id: 0, image: "/assets/images/project-images/2.webp" },
      { id: 1, image: "/assets/images/project-images/3.jpg" },
    ],
    links: [
      { id: 0, name: "GitHub", link: "https://github.link" },
      { id: 1, name: "Live Site", link: "https://live-website.link" },
    ],
  },
];

export default function Projects() {
  return (
    <div className="rounded-md mt-4 bg-white dark:bg-slate-800 text-black dark:text-white p-24">
      <div className="flex gap-4 items-center">
        <h2 className={`${iceberg.className} text-nowrap text-4xl`}>
          Projects :
        </h2>
        <div className="bg-white h-[1px] w-full"></div>
      </div>

      <div className="flex justify-center flex-wrap gap-5 my-5">
        {project_data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
