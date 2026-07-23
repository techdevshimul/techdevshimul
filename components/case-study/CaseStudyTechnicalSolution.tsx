export default function CaseStudyTechnicalSolution() {
  return (
    <section className="mb-stack-lg transition-all duration-1000 opacity-100 translate-y-0 opacity-0 translate-y-10 py-stack-sm">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px grow bg-glass-border"></div>
        <h2 className="font-headline-md text-headline-md">
          Technical Solution
        </h2>
        <div className="h-px grow bg-glass-border"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md items-start">
        <div className="space-y-stack-sm">
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Architecture Design
          </h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            I refactored the backend into a distributed event-driven
            architecture. By introducing a Redis caching layer and implementing
            a Pub/Sub pattern for socket updates, we reduced direct database
            hits by 65%.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex gap-4">
              <span className="material-symbols-outlined text-secondary">
                check_circle
              </span>
              <div>
                <h4 className="font-label-md text-label-md font-bold">
                  Atomic Transactions
                </h4>
                <p className="font-body-md text-body-md text-outline">
                  Implemented Mongoose sessions to ensure data integrity during
                  complex multi-collection updates.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="material-symbols-outlined text-secondary">
                check_circle
              </span>
              <div>
                <h4 className="font-label-md text-label-md font-bold">
                  Optimistic UI Updates
                </h4>
                <p className="font-body-md text-body-md text-outline">
                  Leveraged React Context and local state to provide instant
                  feedback while background sync processes finished.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-panel rounded-xl aspect-video flex flex-col items-center justify-center p-8 overflow-hidden bg-surface-container-lowest border-glass-border">
            <div className="absolute top-0 right-0 p-4">
              <span className="font-label-sm text-label-sm text-outline">
                DIAGRAM_01.EPS
              </span>
            </div>
            {/* <!-- Architecture Placeholder Representation --> */}
            <div className="flex flex-col items-center gap-8 w-full max-w-sm">
              <div className="flex items-center justify-between w-full">
                <div className="bg-surface-container-high p-3 rounded-lg border border-glass-border">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    devices
                  </span>
                </div>
                <div className="h-[2px] grow border-t-2 border-dashed border-outline-variant mx-4 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-surface-container-lowest px-2">
                    <span className="material-symbols-outlined text-secondary text-lg">
                      bolt
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-high p-3 rounded-lg border border-glass-border">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    hub
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="bg-surface-container-high p-6 rounded-lg border border-primary/40 w-2/3 text-center">
                  <p className="font-label-sm text-label-sm uppercase tracking-tighter mb-2 text-on-surface">
                    Microservices
                  </p>
                  <div className="flex justify-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-75"></div>
                    <div className="w-3 h-3 bg-tertiary rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="bg-surface-container-high p-3 rounded-lg border border-glass-border">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    database
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-8 font-label-md text-label-md text-outline">
              Cloud-Native Distributed MERN Ecosystem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
