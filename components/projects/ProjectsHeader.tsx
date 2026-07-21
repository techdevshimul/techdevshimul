const filters = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "design", label: "UI/UX Design" },
];

export default function ProjectsHeader() {
  return (
    <section className="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto py-stack-lg text-center md:text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-glass-border mb-4">
        <span className="w-2 h-2 rounded-full bg-primary circuit-node"></span>
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
          Portfolio Portfolio
        </span>
      </div>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">
        Technical <span className="text-primary">Masterpieces</span>
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-md">
        Exploring the boundary between performance and aesthetic. A curated
        selection of full-stack applications built with architectural precision.
      </p>
      {/* <!-- Filter Bar --> */}
      <div className="flex flex-wrap items-center gap-4 py-6 border-y border-glass-border">
        <span className="font-label-md text-label-md text-outline uppercase tracking-wider">
          Filter By:
        </span>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-5 py-2 bg-primary text-on-primary font-label-sm text-label-sm rounded-full transition-all ${
                filter.id === "all"
                  ? "bg-primary text-on-primary"
                  : "glass-card hover:border-primary/50 text-on-surface-variant"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
