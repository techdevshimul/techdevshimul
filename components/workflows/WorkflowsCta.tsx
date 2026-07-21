export default function WorkflowsCta() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-stack-lg">
      <div className="glass-card-workflow rounded-4xl p-8 md:p-16 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] -z-10"></div>
        <h2 className="font-headline-md text-headline-md mb-6">
          Ready to initiate your next project?
        </h2>
        <p className="text-on-surface-variant font-body-lg text-body-lg mb-10 max-w-xl mx-auto">
          Let&apos;s discuss how my technical workflow can bring precision and
          scalability to your business vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-label-md text-label-md hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Get Started
          </button>
          <button className="border border-glass-border hover:bg-white/5 px-10 py-4 rounded-xl font-label-md text-label-md transition-all">
            Download Process PDF
          </button>
        </div>
      </div>
    </section>
  );
}
