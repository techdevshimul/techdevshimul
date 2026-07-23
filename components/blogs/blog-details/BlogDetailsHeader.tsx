import Image from "next/image";

export default function BlogDetailsHeader() {
  return (
    <header className="mb-stack-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-glass-border mb-6">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
          Technical Architecture
        </span>
      </div>
      <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 max-w-4xl text-on-surface">
        Architecting Scalable Microservices with Node.js and Docker
      </h1>
      <div className="flex flex-wrap items-center gap-6 text-on-surface-variant font-label-md text-label-md">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-surface-container border border-glass-border overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              alt="A professional studio headshot of a software architect with short dark hair and glasses, wearing a minimalist black turtleneck, set against a dark moody architectural background with soft blue lighting."
              src="/assets/images/photo.jpg"
              priority
              width={40}
              height={40}
            />
          </div>
          <span className="">Shimul Hossain</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">
              calendar_today
            </span>
            Oct 24, 2024
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">
              schedule
            </span>
            12 min read
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">
              visibility
            </span>
            5.2k Views
          </span>
        </div>
      </div>
    </header>
  );
}
