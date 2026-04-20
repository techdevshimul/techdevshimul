import Image, { StaticImageData } from "next/image";

export default function SkillsCard({
  skillIcon,
}: {
  skillIcon: StaticImageData;
}) {
  return (
    <Image
      src={skillIcon}
      alt="skill icon"
      className="hover:drop-shadow-custom-blue ease-in-out hover:scale-125 duration-200 size-20 sm:size-24"
    />
  );
}
