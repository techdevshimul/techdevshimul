export default function TestimonialsCta() {
  return (
    <section className="mt-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center py-stack-sm">
      <div className="glass-card p-12 rounded-3xl relative overflow-hidden transition-all duration-700 ease-out opacity-100 translate-y-8">
        <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none"></div>
        <h2 className="font-headline-md text-headline-md mb-6 relative z-10 text-on-background">
          Ready to scale your technical vision?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto relative z-10">
          I&apos;m currently accepting new projects for Q4 2024. Let&apos;s
          discuss how I can help you achieve your technical milestones.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
          <button className="bg-primary text-on-primary font-bold px-10 py-4 rounded-full font-label-md text-label-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            Start a Project
          </button>
          <button className="bg-surface-container text-on-surface font-bold px-10 py-4 rounded-full font-label-md text-label-md border border-glass-border hover:bg-surface-container-high transition-all duration-300">
            View GitHub
          </button>
        </div>
      </div>
    </section>
  );
}
