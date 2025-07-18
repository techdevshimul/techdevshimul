// import Link from "next/link";
import { Iceberg } from "next/font/google";
import school from "@/public/assets/images/logos/University School.png";
import university from "@/public/assets/images/logos/University.png";
import EducationCard from "./education-card";

const iceberg = Iceberg({ subsets: ["latin"], weight: "400" });

const education_data = [
  {
    id: 0,
    image: school,
    title: "Radhanagar Mojumdar Academy, Pabna",
    desc: "Lorem ipsum dolor sit amet consectetur. Ultricies facilisi consectetur ornare enim non enim in at. Et eleifend nec pharetra neque consequat urna nec orci nulla.",
    year: "2011 - 2016",
  },
  {
    id: 1,
    image: university,
    title: "Pabna Polytechnic Institute, Pabna",
    desc: "Lorem ipsum dolor sit amet consectetur. Ultricies facilisi consectetur ornare enim non enim in at. Et eleifend nec pharetra neque consequat urna nec orci nulla.",
    year: "2020 - 2024",
  },
];

export default function Education() {
  return (
    <div
      id="education"
      className="rounded-md mt-4 bg-white dark:bg-slate-800 text-black dark:text-white p-4 sm:p-9 lg:p-24"
    >
      <div className="flex gap-4 items-center justify-center sm:justify-normal">
        <h2
          className={`${iceberg.className} text-nowrap text-3xl sm:text-4xl lg:text-5xl underline sm:no-underline`}
        >
          Education :
        </h2>
        <div className="bg-white h-px w-full hidden sm:block"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-7 mb-5 mt-10 sm:mt-20">
        {education_data.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </div>
  );
}
