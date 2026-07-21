export default function WorkflowsTechnicalWorkflow() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg">
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-x-12 relative">
        {/* <!-- Circuit Line Background (Desktop) --> */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px circuit-line -translate-x-1/2 z-0"></div>
        {/* <!-- Step 1: Discovery --> */}
        <div className="md:text-right mb-12 md:mb-24 relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-label-sm font-label-sm mb-4">
            PHASE 01
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-3">
            Discovery &amp; Blueprinting
          </h3>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Defining the architectural requirements, user personas, and
            technical constraints. I utilize system design diagrams to map out
            the entire data flow before a single line of code is written.
          </p>
        </div>
        <div className="flex flex-col items-center mb-12 md:mb-24 relative z-20">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(180,197,255,0.5)]">
            <span
              className="material-symbols-outlined text-on-primary text-sm"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              search
            </span>
          </div>
          <div className="md:hidden w-px h-full bg-outline-variant mt-4"></div>
        </div>
        <div className="hidden md:block"></div>
        {/* <!-- Step 2: Architecture --> */}
        <div className="hidden md:block"></div>
        <div className="flex flex-col items-center mb-12 md:mb-24 relative z-20">
          <div className="w-10 h-10 rounded-full bg-surface-bright border border-primary/50 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-sm">
              schema
            </span>
          </div>
          <div className="md:hidden w-px h-full bg-outline-variant mt-4"></div>
        </div>
        <div className="text-left mb-12 md:mb-24 relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-label-sm font-label-sm mb-4">
            PHASE 02
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-3">
            Technical Architecture
          </h3>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Setting up the MERN stack environment, configuring Docker
            containers, and defining GraphQL/REST schemas. This stage ensures
            the foundation is robust and ready for rapid scaling.
          </p>
        </div>
        {/* <!-- Step 3: Development --> */}
        <div className="md:text-right mb-12 md:mb-24 relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-label-sm font-label-sm mb-4">
            PHASE 03
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-3">
            Iterative Development
          </h3>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Agile-driven coding with continuous integration. I focus on modular
            component design in React or React Native, ensuring 90%+ test
            coverage for critical logic paths.
          </p>
        </div>
        <div className="flex flex-col items-center mb-12 md:mb-24 relative z-20">
          <div className="w-10 h-10 rounded-full bg-surface-bright border border-primary/50 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-sm">
              code
            </span>
          </div>
          <div className="md:hidden w-px h-full bg-outline-variant mt-4"></div>
        </div>
        <div className="hidden md:block"></div>
        {/* <!-- Step 4: Deployment --> */}
        <div className="hidden md:block"></div>
        <div className="flex flex-col items-center mb-0 relative z-20">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shadow-[0_0_20px_rgba(3,181,211,0.4)]">
            <span
              className="material-symbols-outlined text-on-secondary-container"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              rocket_launch
            </span>
          </div>
        </div>
        <div className="text-left relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-label-sm font-label-sm mb-4">
            PHASE 04
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-3">
            Production Deployment
          </h3>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Cloud orchestration on AWS or Vercel. Post-deployment includes
            real-time monitoring, load balancing configuration, and final
            SEO/Performance optimization.
          </p>
        </div>
      </div>
    </section>
  );
}
