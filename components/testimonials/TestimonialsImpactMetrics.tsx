export default function TestimonialsImpactMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-stack-lg">
      {/* <!-- Large Metric Card --> */}
      <article className="md:col-span-2 glass-card p-stack-md rounded-xl flex flex-col justify-between h-full transition-all duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-8">
        <div>
          <span className="material-symbols-outlined text-secondary mb-4 text-4xl">
            bolt
          </span>
          <h3 className="font-headline-sm text-headline-sm mb-2 text-on-background">
            System Optimization
          </h3>
          <p className="text-on-surface-variant font-body-md">
            Re-engineering legacy backend architectures to handle 10x traffic
            spikes with sub-100ms latency.
          </p>
        </div>
        <div className="mt-8 flex items-baseline gap-2">
          <span className="font-headline-lg text-headline-lg text-primary tracking-tighter">
            15%
          </span>
          <span className="font-label-md text-label-md uppercase tracking-widest text-outline">
            Increase in Load Speed
          </span>
        </div>
      </article>
      {/* <!-- Small Metric Card --> */}
      <article className="glass-card p-stack-md rounded-xl text-center flex flex-col items-center justify-center min-h-[220px] transition-all duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-8">
        <span className="font-headline-md text-headline-md text-secondary">
          99.9%
        </span>
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-outline mt-2">
          Uptime Achieved
        </p>
        <div className="mt-4 w-12 h-1 bg-secondary/20 rounded-full overflow-hidden">
          <div className="h-full bg-secondary w-full animate-pulse"></div>
        </div>
      </article>
      {/* <!-- Small Metric Card --> */}
      <article className="glass-card p-stack-md rounded-xl text-center flex flex-col items-center justify-center min-h-[220px] transition-all duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-8">
        <span className="font-headline-md text-headline-md text-primary">
          40%
        </span>
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-outline mt-2">
          Cost Reduction
        </p>
        <div className="mt-4 flex gap-1 items-end h-6">
          <span className="w-1 h-3 bg-primary rounded-full"></span>
          <span className="w-1 h-5 bg-primary rounded-full"></span>
          <span className="w-1 h-4 bg-primary rounded-full"></span>
        </div>
      </article>
      {/* <!-- Wide Metric Card --> */}
      <article className="md:col-span-2 glass-card p-stack-md rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-8">
        <div className="sm:max-w-[60%] text-center sm:text-left">
          <h3 className="font-headline-sm text-headline-sm mb-2 text-on-background">
            Scalable Solutions
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Deployed distributed microservices for high-growth startups
            globally.
          </p>
        </div>
        <div className="text-center sm:text-right">
          <div className="text-headline-md font-bold text-on-background">
            500k+
          </div>
          <div className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
            Active Daily Users
          </div>
        </div>
      </article>
      <article className="md:col-span-2 glass-card p-stack-md rounded-xl flex items-center gap-6 transition-all duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-8">
        <div className="flex-shrink-0 p-4 bg-surface-container-highest rounded-lg">
          <span className="material-symbols-outlined text-tertiary text-3xl">
            code_blocks
          </span>
        </div>
        <div>
          <h4 className="font-headline-sm text-headline-sm text-on-background">
            Code Quality
          </h4>
          <p className="text-on-surface-variant text-body-md">
            0 Critical security vulnerabilities across 12+ production audits.
          </p>
        </div>
      </article>
    </div>
  );
}
