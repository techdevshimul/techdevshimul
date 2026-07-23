import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center px-margin-mobile md:px-margin-desktop overflow-hidden bg-surface-dim py-24">
      <div className="absolute top-1/4 -right-1/4 w-150 h-150 bg-primary/5 rounded-full blur-[150px]"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-125 h-125 bg-secondary/5 rounded-full blur-[120px]"></div>
      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <article className="lg:col-span-7 animate-fade-in-up space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-card border-outline-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              System Online: Available
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white">
            Engineering <span className="text-primary italic">Digital</span>
            <br />
            <span className="text-on-surface-variant">Frontiers.</span>
          </h1>
          <p className="font-headline-sm text-headline-sm text-on-surface-variant max-w-2xl font-light">
            Shimul Hossain — Full Stack Web Architect
          </p>
          <p className="font-body-lg text-body-lg text-outline max-w-xl leading-relaxed">
            Building high-performance, scalable web applications with clinical
            precision and visionary design. Specialized in React, Node.js, and
            modern cloud architectures.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <a
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all duration-300 hover:scale-105 glow-hover flex items-center gap-3"
              href="#contact"
            >
              Start a Project
              <span className="material-symbols-outlined text-base">east</span>
            </a>
            <Link
              className="bg-transparent border border-outline-variant hover:border-outline text-white px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all flex items-center gap-2"
              href="/case-study"
            >
              View Case Studies
            </Link>
          </div>
        </article>
        <div
          className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative w-80 h-[420px] md:w-100 md:h-125">
            <div className="absolute inset-0 border-px border-white/5 rounded-3xl -rotate-3 scale-105"></div>
            <div className="absolute inset-0 border-px border-primary/10 rounded-3xl rotate-3 scale-105"></div>
            <figure className="relative w-full h-full rounded-3xl overflow-hidden high-gloss group">
              <Image
                alt="Shimul Hossain"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                src="/assets/images/photo.jpg"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <figcaption className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl border-white/5">
                <div className="flex justify-between items-center">
                  <span className="font-label-sm text-[10px] text-outline uppercase">
                    Software Engineer
                  </span>
                  <span className="font-label-sm text-[10px] text-primary uppercase">
                    v4.0.2
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      {/* <!-- Tech Stack Ticker --> */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-white/5 bg-white/2 py-4">
        <div className="flex whitespace-nowrap ticker-animation">
          <div className="flex items-center">
            <span className="font-label-sm text-label-sm mx-10 text-outline-variant uppercase">
              React.js
            </span>
            <span className="font-label-sm text-label-sm mx-10 text-primary uppercase">
              Node.js
            </span>
            <span className="font-label-sm text-label-sm mx-10 text-outline-variant uppercase">
              TypeScript
            </span>
            <span className="font-label-sm text-label-sm mx-10 text-secondary uppercase">
              Next.js
            </span>
            <span className="font-label-sm text-label-sm mx-10 text-outline-variant uppercase">
              AWS
            </span>
            <span className="font-label-sm text-label-sm mx-10 text-tertiary uppercase">
              PostgreSQL
            </span>
            <span className="font-label-sm text-label-sm mx-10 text-outline-variant uppercase">
              Tailwind CSS
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-label-sm text-label-sm mx-10 text-outline-variant uppercase">
              React.js
            </span>
            <span className="font-label-sm text-label-sm mx-10 text-primary uppercase">
              Node.js
            </span>
            <span className="font-label-sm text-label-sm mx-10 text-outline-variant uppercase">
              TypeScript
            </span>
            <span className="font-label-sm text-label-sm mx-10 text-secondary uppercase">
              Next.js
            </span>
            <span className="font-label-sm text-label-sm mx-10 text-outline-variant uppercase">
              AWS
            </span>
            <span className="font-label-sm text-label-sm mx-10 text-tertiary uppercase">
              PostgreSQL
            </span>
            <span className="font-label-sm text-label-sm mx-10 text-outline-variant uppercase">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
