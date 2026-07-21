export default function LeftSideBar() {
  return (
    <aside className="hidden lg:flex flex-col sticky top-24 col-span-3 h-fit p-6 gap-stack-sm rounded-xl bg-surface-container-low/60 backdrop-blur-md border border-glass-border">
      <div className="mb-4">
        <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest mb-4">
          Content
        </p>
        <nav className="flex flex-col gap-4">
          <a
            className="font-label-md text-label-md text-secondary font-bold active:translate-x-1 transition-transform flex items-center gap-2"
            href="#introduction"
          >
            <span className="material-symbols-outlined text-[18px]">toc</span>
            Table of Contents
          </a>
          <a
            className="font-label-md text-label-md text-outline hover:text-on-surface hover:bg-surface-variant/30 p-2 rounded transition-all flex items-center gap-2"
            href="#newsletter-trigger"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            Newsletter
          </a>
          <div className="w-full h-px bg-glass-border my-2"></div>
          <div className="space-y-4">
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
              Navigation
            </p>
            <a
              className="font-label-md text-label-md text-outline hover:text-on-surface flex items-center gap-2"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px]">
                analytics
              </span>
              Reading Progress
            </a>
            <a
              className="font-label-md text-label-md text-outline hover:text-on-surface flex items-center gap-2"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px]">
                share
              </span>
              Share Article
            </a>
            <a
              className="font-label-md text-label-md text-outline hover:text-on-surface flex items-center gap-2"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
              Back to Blog
            </a>
          </div>
        </nav>
      </div>
      <div className="mt-6 p-4 rounded-lg bg-primary-container/10 border border-primary/20">
        <p className="font-label-md text-label-md text-on-surface mb-2">
          Join the Technical Log
        </p>
        <p className="text-[12px] text-on-surface-variant mb-4">
          Deep dives into architectural patterns delivered weekly.
        </p>
        <input
          className="w-full bg-surface-container-lowest border border-glass-border rounded-md px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all mb-2"
          placeholder="email@domain.com"
          type="email"
        />
        <button className="w-full py-2 bg-primary text-on-primary font-label-sm text-label-sm rounded hover:opacity-90 transition-all">
          Subscribe
        </button>
      </div>
    </aside>
  );
}
