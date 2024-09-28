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
      className="rounded-md mt-4 bg-white dark:bg-slate-800 text-black dark:text-white p-24"
    >
      <div className="flex gap-4 items-center">
        <h2 className={`${iceberg.className} text-nowrap text-5xl`}>
          Education :
        </h2>
        <div className="bg-white h-[1px] w-full"></div>
      </div>

      <div className="flex justify-between gap-7 mb-5 mt-20">
        {education_data.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </div>
  );
}
