import Link from "next/link";

export default function ContactLinks({ contact }: any) {
  return (
    <div>
      <Link href={contact.link} target="_blank">
        <p className="text-4xl text-center py-4 border mt-6 rounded-lg">
          {contact.title}
        </p>
      </Link>
    </div>
  );
}
