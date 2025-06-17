import Image from "next/image";

export default function EducationCard({ education }: any) {
  return (
    <div className="flex-1">
      <Image src={education.image} alt="education" className="w-32" />
      <h2 className="text-2xl mt-5">{education.title}</h2>
      <p className="text-gray-300 mt-5">{education.desc}</p>
      <p className="text-gray-400 mt-5">{education.year}</p>
    </div>
  );
}
