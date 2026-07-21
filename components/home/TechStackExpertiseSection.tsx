export default function TechStackExpertiseSection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-dim">
      <div className="max-w-container-max mx-auto relative">
        <header className="text-center mb-24">
          <h2 className="font-label-md text-label-md text-secondary mb-4 uppercase">
            Architecture
          </h2>
          <h3 className="font-headline-lg text-headline-lg text-white">
            Tech Stack Expertise
          </h3>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="glass-card p-12 rounded-3xl space-y-8 border-t-4 border-t-primary group transition-all duration-500 hover:-translate-y-2 bg-surface-container">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">
                developer_mode_tv
              </span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-white">
              Frontend Engineering
            </h4>
            <p className="font-body-md text-body-md text-outline leading-relaxed">
              Crafting pixel-perfect, responsive interfaces using React, Vue,
              and Next.js. Focused on accessibility and Core Web Vitals.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5 mt-auto">
              <span className="font-label-sm text-[10px] text-primary uppercase">
                TypeScript
              </span>
              <span className="font-label-sm text-[10px] text-primary uppercase">
                Tailwind
              </span>
              <span className="font-label-sm text-[10px] text-primary uppercase">
                Redux
              </span>
            </div>
          </article>
          <article className="glass-card p-12 rounded-3xl space-y-8 border-t-4 border-t-secondary group transition-all duration-500 hover:-translate-y-2 bg-surface-container">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-4xl">
                terminal
              </span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-white">
              Backend Architecture
            </h4>
            <p className="font-body-md text-body-md text-outline leading-relaxed">
              Building robust server-side logic with Node.js, Express, and
              Python. Designing optimized database schemas.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5 mt-auto">
              <span className="font-label-sm text-[10px] text-secondary uppercase">
                PostgreSQL
              </span>
              <span className="font-label-sm text-[10px] text-secondary uppercase">
                MongoDB
              </span>
              <span className="font-label-sm text-[10px] text-secondary uppercase">
                Redis
              </span>
            </div>
          </article>
          <article className="glass-card p-12 rounded-3xl space-y-8 border-t-4 border-t-tertiary group transition-all duration-500 hover:-translate-y-2 bg-surface-container">
            <div className="w-14 h-14 bg-tertiary/10 rounded-2xl flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-4xl">
                cloud_sync
              </span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-white">
              DevOps &amp; Scale
            </h4>
            <p className="font-body-md text-body-md text-outline leading-relaxed">
              Automating deployment pipelines and managing cloud infrastructure
              for 99.9% uptime and global scalability.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5 mt-auto">
              <span className="font-label-sm text-[10px] text-tertiary uppercase">
                AWS
              </span>
              <span className="font-label-sm text-[10px] text-tertiary uppercase">
                Docker
              </span>
              <span className="font-label-sm text-[10px] text-tertiary uppercase">
                CI/CD
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
