// import Link from "next/link";
import { Iceberg } from "next/font/google";
import profile from "@/public/assets/images/photo.jpg";
import Image from "next/image";
import ContactLinks from "./contact-links";

const iceberg = Iceberg({ subsets: ["latin"], weight: "400" });

const contact_links = [
  {
    id: 0,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/techdevshimul/",
  },
  {
    id: 1,
    title: "GitHub",
    link: "https://github.com/techdevshimul",
  },
  {
    id: 2,
    title: "Facebook",
    link: "https://www.facebook.com/techdevshimul/",
  },
  {
    id: 3,
    title: "Whatsapp",
    link: "https://wa.me/8801798406411",
  },
];

export default function Contact() {
  return (
    <div
      id="contact"
      className="rounded-md mt-4 bg-white dark:bg-slate-800 text-black dark:text-white p-24"
    >
      <div className="flex gap-4 items-center">
        <h2 className={`${iceberg.className} text-nowrap text-5xl`}>
          Contact :
        </h2>
        <div className="bg-white h-[1px] w-full"></div>
      </div>

      <div className="flex justify-center items-center mt-20 gap-24 flex-wrap">
        <div className="flex flex-col justify-center items-center w-96 border p-10 rounded-xl">
          <Image
            src={profile}
            alt="profile"
            className="w-36 rounded-full border-4"
          />
          <p className="mt-6 text-xl">@techdevshimul</p>
          <div className="w-full">
            {contact_links.map((contact) => (
              <ContactLinks contact={contact} key={contact.id} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-96 border p-10 rounded-xl gap-8">
          <h2 className="text-4xl text-center">Contact Via Email</h2>
          <div className="w-full">
            <label className="text-xl" htmlFor="full-name">
              Full Name
            </label>
            <input
              className="w-full text-xl rounded-lg py-1 px-3 mt-3 text-black"
              type="text"
              name="full-name"
              id="full-name"
            />
          </div>
          <div className="w-full">
            <label className="text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="w-full text-xl rounded-lg py-1 px-3 mt-3 text-black"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="w-full">
            <label className="text-xl" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full text-xl rounded-lg py-1 px-3 mt-3 text-black resize-none"
              name="message"
              id="message"
              rows={3}
            ></textarea>
          </div>
          <button className="text-2xl bg-blue-600 w-full py-3 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
