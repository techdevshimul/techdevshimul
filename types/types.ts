import { StaticImageData } from "next/image";

export type contactTypes = {
  id: number;
  title: string;
  link: string;
};

export type educationTypes = {
  id: number;
  image: StaticImageData;
  title: string;
  desc: string;
  year: string;
};

export type projectTypes = {
  id: number;
  title: string;
  desc: string;
  tech: { id: number; name: string }[];
  images: { id: number; image: StaticImageData }[];
  links: {
    id: number;
    name: string;
    link: string;
    linkImage: StaticImageData;
  }[];
};
