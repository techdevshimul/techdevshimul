export default function CaseStudyHero() {
  return (
    <header className="mb-stack-lg">
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-primary-container/20 text-primary px-3 py-1 rounded-lg font-label-sm text-label-sm uppercase tracking-widest">
          Case Study
        </span>
        <span className="text-outline font-label-sm text-label-sm tracking-widest">
          •
        </span>
        <span className="text-outline font-label-sm text-label-sm uppercase tracking-widest">
          MERN STACK
        </span>
      </div>
      <h1 className="font-headline-lg text-headline-lg mb-6 leading-tight max-w-4xl">
        NexGen Infrastructure: Scaling Real-time Resource Management for
        Enterprise Systems
      </h1>
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex -space-x-2">
          <div
            className="w-8 h-8 rounded-full border-2 border-background glass-panel flex items-center justify-center bg-surface-container"
            title="MongoDB"
          >
            <span className="material-symbols-outlined text-sm text-primary">
              database
            </span>
          </div>
          <div
            className="w-8 h-8 rounded-full border-2 border-background glass-panel flex items-center justify-center bg-surface-container"
            title="Express.js"
          >
            <span className="material-symbols-outlined text-sm text-secondary">
              api
            </span>
          </div>
          <div
            className="w-8 h-8 rounded-full border-2 border-background glass-panel flex items-center justify-center bg-surface-container"
            title="React"
          >
            <span className="material-symbols-outlined text-sm text-primary">
              data_object
            </span>
          </div>
          <div
            className="w-8 h-8 rounded-full border-2 border-background glass-panel flex items-center justify-center bg-surface-container"
            title="Node.js"
          >
            <span className="material-symbols-outlined text-sm text-secondary">
              terminal
            </span>
          </div>
        </div>
        <p className="font-body-md text-body-md text-outline">
          Published October 24, 2024 • 12 min read
        </p>
      </div>
    </header>
  );
}
