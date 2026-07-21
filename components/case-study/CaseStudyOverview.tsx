export default function CaseStudyOverview() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-stack-lg transition-all duration-1000 opacity-100 translate-y-0 opacity-0 translate-y-10 py-stack-lg">
      <div className="lg:col-span-8">
        <div className="glass-panel p-8 rounded-xl h-full border-glass-border">
          <h2 className="font-headline-sm text-headline-sm mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              troubleshoot
            </span>
            The Challenge
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            A global logistics client faced critical latency issues in their
            resource tracking system. With over 50,000 active endpoints updating
            status every 3 seconds, their legacy monolithic architecture
            suffered from database locks, high CPU utilization (90%+), and
            frequent UI stalls during massive data refreshes.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-4 rounded-lg border-l-4 border-error">
              <h4 className="font-label-md text-label-md text-error mb-2 uppercase">
                Critical Bottleneck
              </h4>
              <p className="font-body-md text-body-md">
                Sub-optimal aggregation queries taking &gt;1.2s to execute on
                large datasets.
              </p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-lg border-l-4 border-tertiary">
              <h4 className="font-label-md text-label-md text-tertiary mb-2 uppercase">
                User Impact
              </h4>
              <p className="font-body-md text-body-md">
                Dashboards were 5-8 seconds out of sync with real-world state
                changes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 flex flex-col gap-gutter">
        <div className="glass-panel p-6 rounded-xl border-glass-border flex-1">
          <h3 className="font-label-md text-label-md text-primary mb-6 uppercase tracking-widest">
            Stack Specification
          </h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center pb-3 border-b border-glass-border">
              <span className="font-body-md text-body-md text-outline">
                Frontend
              </span>
              <span className="font-label-md text-label-md font-bold text-on-surface">
                React 18 / Vite
              </span>
            </li>
            <li className="flex justify-between items-center pb-3 border-b border-glass-border">
              <span className="font-body-md text-body-md text-outline">
                State Mgmt
              </span>
              <span className="font-label-md text-label-md font-bold text-on-surface">
                Redux Toolkit / RTK Query
              </span>
            </li>
            <li className="flex justify-between items-center pb-3 border-b border-glass-border">
              <span className="font-body-md text-body-md text-outline">
                Backend
              </span>
              <span className="font-label-md text-label-md font-bold text-on-surface">
                Node.js / Express
              </span>
            </li>
            <li className="flex justify-between items-center pb-3 border-b border-glass-border">
              <span className="font-body-md text-body-md text-outline">
                Database
              </span>
              <span className="font-label-md text-label-md font-bold text-on-surface">
                MongoDB Atlas
              </span>
            </li>
            <li className="flex justify-between items-center pb-3 border-b border-glass-border">
              <span className="font-body-md text-body-md text-outline">
                Auth
              </span>
              <span className="font-label-md text-label-md font-bold text-on-surface">
                JWT / OAuth 2.0
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-body-md text-body-md text-outline">
                Real-time
              </span>
              <span className="font-label-md text-label-md font-bold text-on-surface">
                Socket.io / Redis
              </span>
            </li>
          </ul>
        </div>
        <div className="glass-panel p-6 rounded-xl border-glass-border">
          <h3 className="font-label-md text-label-md text-secondary mb-6 uppercase tracking-widest">
            Technical Review
          </h3>
          <div className="space-y-6">
            <div>
              <p className="text-label-sm text-outline uppercase mb-2">
                Architectural Patterns
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-highest px-2 py-1 rounded text-[10px] text-secondary border border-secondary/20">
                  Clean Architecture
                </span>
                <span className="bg-surface-container-highest px-2 py-1 rounded text-[10px] text-secondary border border-secondary/20">
                  Event-Driven
                </span>
                <span className="bg-surface-container-highest px-2 py-1 rounded text-[10px] text-secondary border border-secondary/20">
                  Pub/Sub
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between text-label-sm">
                <span className="text-outline">Node.js Runtime</span>
                <span className="text-on-surface font-medium">v20.x LTS</span>
              </li>
              <li className="flex justify-between text-label-sm">
                <span className="text-outline">React Engine</span>
                <span className="text-on-surface font-medium">v18.2</span>
              </li>
              <li className="flex justify-between text-label-sm">
                <span className="text-outline">Database</span>
                <span className="text-on-surface font-medium">MongoDB 7.0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
