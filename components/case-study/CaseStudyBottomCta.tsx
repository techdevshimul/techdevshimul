export default function CaseStudyBottomCta() {
  return (
    <section className="flex flex-col items-center text-center gap-6 transition-all duration-1000 opacity-0 translate-y-10 py-stack-sm">
      <div className="max-w-2xl">
        <h3 className="font-headline-sm text-headline-sm mb-4">
          Ready to scale your infrastructure?
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">
          Shimul specializes in building high-performance MERN applications that
          handle enterprise-scale traffic with ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-label-md text-label-md font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
            <span className="material-symbols-outlined">mail</span>
            Hire Shimul for a Similar Project
          </button>
          <button className="border border-glass-border hover:bg-surface-container-high text-on-surface px-10 py-4 rounded-full font-label-md text-label-md font-bold transition-all">
            View Full Technical Spec
          </button>
        </div>
      </div>
    </section>
  );
}
