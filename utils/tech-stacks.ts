import { BsTypescript } from "react-icons/bs";
import { FaAws, FaCloudflare, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpo, SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const techStacks = {
  nodeJs: {
    name: "Node.js",
    url: "https://nodejs.org",
    Icon: FaNodeJs,
  },
  express: {
    name: "Express",
    url: "https://expressjs.com",
    Icon: SiExpress,
  },
  react: {
    name: "React",
    url: "https://linkedin.com/in/techdevshimul",
    Icon: FaReact,
  },
  mongoDb: {
    name: "MongoDB",
    url: "https://mongodb.com",
    Icon: SiMongodb,
  },
  reactNative: {
    name: "React Native",
    url: "https://reactnative.dev",
    Icon: TbBrandReactNative,
  },
  typeScript: {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    Icon: BsTypescript,
  },
  aws: {
    name: "AWS",
    url: "https://aws.amazon.com",
    Icon: FaAws,
  },
  nextJs: {
    name: "Next.js",
    url: "https://nextjs.org",
    Icon: RiNextjsFill,
  },
  expo: {
    name: "Expo",
    url: "https://expo.dev",
    Icon: SiExpo,
  },
  postgreSql: {
    name: "PostgreSQL",
    url: "https://www.postgresql.org",
    Icon: SiPostgresql,
  },
  vercel: {
    name: "Vercel",
    url: "https://vercel.com",
    Icon: IoLogoVercel,
  },
  cloudflare: {
    name: "Cloudflare",
    url: "https://www.cloudflare.com",
    Icon: FaCloudflare,
  },
};

export const techStacksArr = Object.keys(techStacks).map((key, index) => ({
  id: index + 1,
  name: techStacks[key as keyof typeof techStacks].name,
  url: techStacks[key as keyof typeof techStacks].url,
  Icon: techStacks[key as keyof typeof techStacks].Icon,
}));
