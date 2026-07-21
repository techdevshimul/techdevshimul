export default function TechStack() {
  return (
    <section className="mb-stack-lg">
      <div className="flex items-center justify-between mb-stack-sm">
        <h2 className="font-headline-md text-headline-md text-on-background">
          Technical Arsenal
        </h2>
        <div className="h-[1px] grow mx-8 bg-glass-border"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* <!-- Skill Card --> */}
        <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary transition-all duration-300 group">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container">
              code
            </span>
          </div>
          <span className="font-label-md text-label-md text-on-surface">
            TypeScript
          </span>
        </div>
        <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary transition-all duration-300 group">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container">
              terminal
            </span>
          </div>
          <span className="font-label-md text-label-md text-on-surface">
            React/Next.js
          </span>
        </div>
        <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary transition-all duration-300 group">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container">
              cloud
            </span>
          </div>
          <span className="font-label-md text-label-md text-on-surface">
            AWS Cloud
          </span>
        </div>
        <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary transition-all duration-300 group">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container">
              database
            </span>
          </div>
          <span className="font-label-md text-label-md text-on-surface">
            PostgreSQL
          </span>
        </div>
        <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary transition-all duration-300 group">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container">
              schema
            </span>
          </div>
          <span className="font-label-md text-label-md text-on-surface">
            GraphQL
          </span>
        </div>
        <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary transition-all duration-300 group">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container">
              settings_ethernet
            </span>
          </div>
          <span className="font-label-md text-label-md text-on-surface">
            Node.js
          </span>
        </div>
      </div>
    </section>
  );
}
