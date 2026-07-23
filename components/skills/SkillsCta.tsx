export default function SkillsCta() {
  return (
    <section className="glass-card-skills  p-12 rounded-4xl text-center relative overflow-hidden py-stack-sm">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
      <h2 className="font-headline-md text-headline-md mb-6 relative z-10">
        Ready to scale your technical vision?
      </h2>
      <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-10 relative z-10">
        Whether it&apos;s a zero-to-one MVP or scaling a production-grade
        infrastructure, I provide the engineering expertise to build it right.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        <button className="px-8 py-4 bg-primary-container text-on-primary-container font-bold rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300">
          View Project History
        </button>
        <button className="px-8 py-4 border border-glass-border bg-white/5 backdrop-blur-sm text-on-background font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
          Discuss Collaboration
        </button>
      </div>
    </section>
  );
}
