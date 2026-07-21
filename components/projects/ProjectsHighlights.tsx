export default function ProjectsHighlights() {
  return (
    <section className="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto pb-stack-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card-project p-6 rounded-xl border-l-4 border-primary">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-primary">
              trending_up
            </span>
            <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider">
              ROI Driven
            </h4>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Engineering solutions that directly translate to business growth and
            reduced operational overhead.
          </p>
        </div>
        <div className="glass-card-project p-6 rounded-xl border-l-4 border-secondary">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-secondary">
              speed
            </span>
            <h4 className="font-label-md text-label-md text-secondary uppercase tracking-wider">
              Performance
            </h4>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Optimizing every millisecond to ensure maximum user retention and
            conversion rates.
          </p>
        </div>
        <div className="glass-card-project p-6 rounded-xl border-l-4 border-tertiary">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-tertiary">hub</span>
            <h4 className="font-label-md text-label-md text-tertiary uppercase tracking-wider">
              Scalability
            </h4>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Architecting modular systems designed to grow seamlessly with your
            user base.
          </p>
        </div>
      </div>
    </section>
  );
}
