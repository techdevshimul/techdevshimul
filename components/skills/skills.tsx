import { Iceberg } from "next/font/google";
import SkillsCard from "./skills-card";
import skill1 from "@/public/assets/images/logos/HTML.png";
import skill2 from "@/public/assets/images/logos/CSS.png";
import skill3 from "@/public/assets/images/logos/JS.png";
import skill4 from "@/public/assets/images/logos/React.png";
import skill5 from "@/public/assets/images/logos/NodeJs.png";
import skill6 from "@/public/assets/images/logos/MongoDB.png";
import skill7 from "@/public/assets/images/logos/ExpressJS.png";
import skill8 from "@/public/assets/images/logos/Figma.png";
import skill9 from "@/public/assets/images/logos/TailwindCSS.png";
import skill10 from "@/public/assets/images/logos/Bootstrap.png";
import skill11 from "@/public/assets/images/logos/NextJS.png";
import skill12 from "@/public/assets/images/logos/PostgreSQL.png";
import skill13 from "@/public/assets/images/logos/GitHub.png";
import skill14 from "@/public/assets/images/logos/TypeScript.png";

const iceberg = Iceberg({ subsets: ["latin"], weight: "400" });

const skillIcons = [
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9,
  skill10,
  skill11,
  skill12,
  skill13,
  skill14,
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="rounded-md mt-4 bg-white dark:bg-slate-800 text-black dark:text-white p-4 sm:p-9 lg:p-24"
    >
      <div className="flex gap-4 items-center justify-center sm:justify-normal">
        <h2
          className={`${iceberg.className} text-nowrap text-3xl sm:text-4xl lg:text-5xl underline sm:no-underline`}
        >
          Skills :
        </h2>
        <div className="bg-white h-[1px] w-full hidden sm:block"></div>
      </div>
      <div className="flex justify-center flex-wrap gap-x-11 gap-y-7 sm:gap-7 lg:gap-14 mb-5 mt-10 sm:mt-20">
        {skillIcons.map((skill, index) => (
          <SkillsCard key={index} skillIcon={skill} />
        ))}
      </div>
    </div>
  );
}
