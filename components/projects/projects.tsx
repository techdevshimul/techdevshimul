// import Link from "next/link";
import ProjectCard from "./project-card";
import { Iceberg } from "next/font/google";
import projectImage1 from "@/public/assets/images/project-images/Ecom.webp";
import projectImage2 from "@/public/assets/images/project-images/Burger.webp";
import projectImage3 from "@/public/assets/images/project-images/Hotel.webp";
import projectImage4 from "@/public/assets/images/project-images/Photo.webp";
import gitHub from "@/public/assets/images/logos/GitHub.png";
import url from "@/public/assets/images/logos/url.png";

const iceberg = Iceberg({ subsets: ["latin"], weight: "400" });

const project_data = [
  {
    id: 0,
    title: "E-commerce Project",
    desc: "A full-stack e-commerce project built with the MERN stack, featuring product listings, user authentication, and a shopping cart.",
    tech: [
      { id: 0, name: "MongoDB" },
      { id: 1, name: "Express.js" },
      { id: 2, name: "React.js" },
      { id: 4, name: "Node.js" },
      { id: 5, name: "Vercel" },
    ],
    images: [{ id: 0, image: projectImage1 }],
    links: [
      {
        id: 0,
        name: "GitHub",
        link: "https://github.com/shimultechtips/ecom-frontend",
        linkImage: gitHub,
      },
      {
        id: 1,
        name: "Live Site",
        link: "https://ecom-frontend-steel.vercel.app/",
        linkImage: url,
      },
    ],
  },
  {
    id: 1,
    title: "Burger Builder Project",
    desc: "A MERN stack burger builder project featuring customizable ingredient options, dynamic pricing, and real-time order management.",
    tech: [
      { id: 0, name: "MongoDB" },
      { id: 1, name: "Express.js" },
      { id: 2, name: "React.js" },
      { id: 4, name: "Node.js" },
      { id: 5, name: "Vercel" },
    ],
    images: [{ id: 0, image: projectImage2 }],
    links: [
      {
        id: 0,
        name: "GitHub",
        link: "https://github.com/shimultechtips/burger-builder",
        linkImage: gitHub,
      },
      {
        id: 1,
        name: "Live Site",
        link: "https://burger-builder-five-livid.vercel.app/",
        linkImage: url,
      },
    ],
  },
  {
    id: 2,
    title: "Hotel Booking Project",
    desc: "A MERN stack hotel booking project offering room listings, booking functionality, and user authentication for seamless reservations.",
    tech: [
      { id: 0, name: "MongoDB" },
      { id: 1, name: "Express.js" },
      { id: 2, name: "React.js" },
      { id: 4, name: "Node.js" },
      { id: 5, name: "Firebase" },
    ],
    images: [{ id: 1, image: projectImage3 }],
    links: [
      {
        id: 0,
        name: "GitHub",
        link: "https://github.com/shimultechtips/hotel-booking-assignment",
        linkImage: gitHub,
      },
      {
        id: 1,
        name: "Live Site",
        link: "https://shimuls-hotel-booking.web.app/",
        linkImage: url,
      },
    ],
  },
  {
    id: 3,
    title: "Photo Gallery Project",
    desc: "A MERN stack photo gallery project that has a visually appealing layout. It features user authentication and options for commenting photos.",
    tech: [
      { id: 0, name: "MongoDB" },
      { id: 1, name: "Express.js" },
      { id: 2, name: "React.js" },
      { id: 4, name: "Node.js" },
      { id: 5, name: "Firebase" },
    ],
    images: [{ id: 0, image: projectImage4 }],
    links: [
      {
        id: 0,
        name: "GitHub",
        link: "https://github.com/shimultechtips/photo-gallery-assignment",
        linkImage: gitHub,
      },
      {
        id: 1,
        name: "Live Site",
        link: "https://shimuls-photo-gallary.web.app/",
        linkImage: url,
      },
    ],
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="rounded-md mt-4 bg-white dark:bg-slate-800 text-black dark:text-white p-4 sm:p-9 lg:p-24"
    >
      <div className="flex gap-4 items-center justify-center sm:justify-normal">
        <h2
          className={`${iceberg.className} text-nowrap text-3xl sm:text-4xl lg:text-5xl underline sm:no-underline`}
        >
          Projects :
        </h2>
        <div className="bg-white h-[1px] w-full hidden sm:block"></div>
      </div>

      <div className="flex justify-center flex-wrap gap-7 mb-5 mt-10 sm:mt-20">
        {project_data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
