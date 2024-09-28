import Image from "next/image";

export default function SkillsCard({ skillIcon }: any) {
  return (
    <Image
      src={skillIcon}
      alt="skill icon"
      className="hover:drop-shadow-custom-blue ease-in-out duration-200"
    />
  );
}
