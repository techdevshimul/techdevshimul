import ContactForm from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfoAndSocial from "@/components/contact/ContactInfoAndSocial";
import ContactLocationMap from "@/components/contact/ContactLocationMap";

export default function Contact() {
  return (
    <>
      <main className="relative z-10 pt-32 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <ContactForm />
          <ContactInfoAndSocial />
        </div>
      </main>

      <ContactLocationMap />
    </>
  );
}
