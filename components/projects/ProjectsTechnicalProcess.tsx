export default function ProjectsTechnicalProcess() {
  return (
    <section className="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto py-stack-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
        <div>
          <h2 className="font-headline-md text-headline-md mb-6">
            Architectural <span className="text-secondary">Methodology</span>
          </h2>
          <div className="space-y-8 relative">
            {/* Timeline circuit line */}
            <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-outline-variant/30"></div>
            <div className="relative pl-12">
              <div className="absolute left-[13px] top-1 w-3 h-3 rounded-full bg-primary circuit-node"></div>
              <h4 className="font-label-md text-label-md text-primary uppercase mb-2">
                01. Engineering Design
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Defining system requirements, scalability constraints, and
                database schemas before a single line of code is written.
              </p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-[13px] top-1 w-3 h-3 rounded-full bg-secondary circuit-node"></div>
              <h4 className="font-label-md text-label-md text-secondary uppercase mb-2">
                02. Agile Development
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Iterative coding cycles with focus on clean architecture,
                component modularity, and reusable business logic.
              </p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-[13px] top-1 w-3 h-3 rounded-full bg-tertiary circuit-node"></div>
              <h4 className="font-label-md text-label-md text-tertiary uppercase mb-2">
                03. Deployment &amp; Optimization
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                CI/CD pipeline integration with performance tuning to ensure
                lightning-fast load times and 99.9% uptime.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square glass-card rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-glow-electric opacity-10 group-hover:opacity-20 transition-opacity"></div>
            {/* Decorative Abstract Circuit Pattern */}
            <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
              <path
                className="text-primary stroke-2"
                d="M50 200 L150 200 L175 175 L225 175 L250 200 L350 200"
                fill="none"
                stroke="currentColor"
              ></path>
              <circle
                className="text-primary"
                cx="50"
                cy="200"
                fill="currentColor"
                r="4"
              ></circle>
              <circle
                className="text-primary"
                cx="350"
                cy="200"
                fill="currentColor"
                r="4"
              ></circle>
              <path
                className="text-secondary stroke-2"
                d="M200 50 L200 150 L225 175"
                fill="none"
                stroke="currentColor"
              ></path>
              <circle
                className="text-secondary"
                cx="200"
                cy="50"
                fill="currentColor"
                r="4"
              ></circle>
              <path
                className="text-tertiary stroke-2"
                d="M200 350 L200 250 L175 225"
                fill="none"
                stroke="currentColor"
              ></path>
              <circle
                className="text-tertiary"
                cx="200"
                cy="350"
                fill="currentColor"
                r="4"
              ></circle>
            </svg>
            <div className="absolute text-center px-12">
              <div className="font-headline-sm text-headline-sm mb-4">
                Precision is not an act, but a habit.
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Focusing on technical excellence through rigorous testing and
                clean documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
