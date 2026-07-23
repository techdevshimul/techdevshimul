export default function CaseStudyResultSection() {
  return (
    <section className="mb-stack-lg transition-all duration-1000 opacity-100 translate-y-10 py-stack-sm">
      <div className="glass-panel p-10 rounded-xl relative overflow-hidden bg-surface-container-low border-glass-border">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
        <h2 className="font-headline-md text-headline-md mb-10 text-center">
          Quantifiable Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter text-center">
          <div className="space-y-4">
            <div className="relative h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-primary w-[99.8%]"></div>
            </div>
            <div className="font-headline-lg text-headline-lg text-primary mb-2">
              99.8%
            </div>
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
              Uptime Achieved
            </p>
          </div>
          <div className="md:border-l border-glass-border space-y-4 md:pl-6">
            <div className="relative h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-secondary w-[75%]"></div>
            </div>
            <div className="font-headline-lg text-headline-lg text-secondary mb-2">
              -75%
            </div>
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
              Latency Reduction
            </p>
          </div>
          <div className="md:border-l border-glass-border space-y-4 md:pl-6">
            <div className="flex justify-center mb-2">
              <span className="material-symbols-outlined text-tertiary text-3xl">
                groups
              </span>
            </div>
            <div className="font-headline-lg text-headline-lg text-tertiary mb-2">
              10k+
            </div>
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
              Concurrent Users
            </p>
          </div>
          <div className="md:border-l border-glass-border space-y-4 md:pl-6">
            <div className="flex justify-center mb-2">
              <span className="material-symbols-outlined text-primary text-3xl">
                rocket_launch
              </span>
            </div>
            <div className="font-headline-lg text-headline-lg text-primary mb-2">
              4x
            </div>
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
              Query Efficiency
            </p>
          </div>
        </div>
        <div className="mt-12 pt-10 border-t border-glass-border">
          <p className="font-body-lg text-body-lg text-on-surface-variant italic text-center max-w-3xl mx-auto">
            &quot;The transition to the new MERN infrastructure was seamless.
            We&apos;ve seen a dramatic drop in help-desk tickets related to data
            synchronization, and our operational visibility has never been
            clearer.&quot;
          </p>
          <div className="mt-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-primary-container mb-3 flex items-center justify-center">
              <span className="material-symbols-outlined text-white">
                person
              </span>
            </div>
            <p className="font-label-md text-label-md font-bold text-on-surface">
              CTO, Global Logistics Corp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
