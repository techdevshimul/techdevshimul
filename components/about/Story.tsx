import Image from "next/image";

export default function Story() {
  return (
    <section className="mb-stack-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
      <div className="lg:col-span-7">
        <span className="font-label-md text-label-md text-primary tracking-widest mb-4 block">
          THE JOURNEY
        </span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-stack-sm">
          Architecting Digital Experiences with
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            Precision &amp; Vision.
          </span>
        </h1>
        <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          <p className="">
            I am Shimul Hossain, a Software Engineer dedicated to the
            intersection of scalable architecture and intuitive user interfaces.
            My approach is rooted in the belief that great code is not just
            functional, but an elegant solution to complex human problems.
          </p>
          <p className="">
            With a foundation built on rigorous technical standards and a
            passion for emerging technologies, I have spent years refining my
            craft across full-stack development, cloud infrastructure, and
            performance optimization.
          </p>
        </div>
      </div>
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-full max-w-100 aspect-4/5 overflow-hidden rounded-2xl glass-panel shadow-2xl">
            <Image
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="A professional, high-end portrait of a software engineer named Shimul Hossain. He is wearing a dark, minimal sweater and looking towards the camera with a confident, visionary expression. The setting is a modern, dark-toned tech studio with subtle electric blue glowing accents in the background. The lighting is cinematic, highlighting technical precision and a sophisticated professional aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJA3oSbEOfdVuekqQKF6sbIMfSJ2Dz6xKJXgu1b7s2_YKKAbOMNJ_UpZL_ggPZ8uiCPiQI1W3-sYu7iHZFJPPEUy2b_ygn1zjZzulCTNO1en4eNcK7eXleqI1SG3LEmg9NCkLsLFpI8d9Lw2pXhsFZC4AGSfI3MOkAQjFVxUwKuKtjTixsqOyek9lDhvsCu-nwenxzNWRBuNay0_MVDpf8EAVfaOzprkz9HoZ6EBvBYDB8xogOoEV5_Eemd6TPMNkmGM1xsHa4uDXO"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
