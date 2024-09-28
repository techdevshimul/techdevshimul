import Link from "next/link";

export default function ContactLinks({ contact }: any) {
  return (
    <div>
      <Link href={contact.link} target="_blank">
        <p className="text-2xl text-center py-4 border mt-4 rounded-lg hover:bg-white hover:text-black transition-all duration-500">
          {contact.title}
        </p>
      </Link>
    </div>
  );
}
