export default function BlogsHeader() {
  return (
    <header className="mb-stack-lg text-center md:text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-surface-container-low mb-4">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
          Journal &amp; Insights
        </span>
      </div>
      <h1 className="font-headline-lg text-headline-lg md:text-headline-lg text-on-background mb-4">
        The Technical Log
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        Exploring the frontiers of full-stack engineering, performance
        optimization, and clean architecture.
      </p>
    </header>
  );
}
