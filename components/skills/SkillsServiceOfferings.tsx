export default function SkillsServiceOfferings() {
  return (
    <section className="mb-stack-lg py-stack-sm">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* <!-- Web Architecture --> */}
        <div className="md:col-span-8 glass-card-skills  p-stack-md rounded-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-500 group">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-4"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                language
              </span>
              <h3 className="font-headline-md text-headline-md mb-3">
                Full-stack Web Architecture
              </h3>
              <p className="text-on-surface-variant font-body-md mb-6">
                Engineering scalable server-side solutions with Node.js and
                MongoDB, coupled with dynamic, high-performance React frontends.
                Focused on SSR, state management, and SEO optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container rounded font-label-sm border border-glass-border">
                  React.js
                </span>
                <span className="px-3 py-1 bg-surface-container rounded font-label-sm border border-glass-border">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-surface-container rounded font-label-sm border border-glass-border">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-surface-container rounded font-label-sm border border-glass-border">
                  Redux Toolkit
                </span>
              </div>
            </div>
            <div className="w-full md:w-64 h-48 md:h-auto rounded-lg overflow-hidden border border-glass-border">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAziKMLqfhr3bZBOK-KnvyH6A457lpxvBTMSupfTgC-NRBSEujpP6QeJJV873BKd04qr250ldJRXPiUmKZ7OQGYns53Qh3zLllKq6CptxoKLCHs88sa0uDaud39MGRA9iQ2EQL0HNOmWoDSRCtIEScsyp_FnUjZMQyoiH0iTC-GgcBZkkiZj0rZD8kSiDp1UiDnKMBcRWwKZeLEF-l_sxsfCrEjsrqGxa_wwrn-Ep0-hFbGtKaAiO_UMof6eHNdrEPyJ3AT5k5UTpOq')`,
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* <!-- Cross-Platform --> */}
        <div className="md:col-span-4 glass-card-skills  p-stack-md rounded-xl hover:shadow-[0_0_30px_rgba(76,215,246,0.15)] transition-all duration-500">
          <span
            className="material-symbols-outlined text-4xl text-secondary mb-4"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            devices
          </span>
          <h3 className="font-headline-sm text-headline-sm mb-3">
            Cross-platform Mobile
          </h3>
          <p className="text-on-surface-variant font-body-md mb-6">
            Crafting seamless iOS and Android apps using React Native.
            High-fidelity UI with native performance hooks.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-surface-container rounded font-label-sm border border-glass-border">
              Native iOS
            </span>
            <span className="px-3 py-1 bg-surface-container rounded font-label-sm border border-glass-border">
              Android UI
            </span>
          </div>
        </div>
        {/* <!-- API Design --> */}
        <div className="md:col-span-6 glass-card-skills  p-stack-md rounded-xl hover:shadow-[0_0_30px_rgba(180,197,255,0.1)] transition-all duration-500">
          <div className="flex gap-4 items-center mb-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">
                api
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm">
              RESTful &amp; GraphQL API Design
            </h3>
          </div>
          <p className="text-on-surface-variant font-body-md">
            Developing robust, secure, and well-documented endpoints.
            Specializing in microservices communication and high-load traffic
            handling.
          </p>
        </div>
        {/* <!-- Cloud Integration --> */}
        <div className="md:col-span-6 glass-card-skills  p-stack-md rounded-xl hover:shadow-[0_0_30px_rgba(180,197,255,0.1)] transition-all duration-500">
          <div className="flex gap-4 items-center mb-4">
            <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">
                cloud_done
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm">
              Cloud Infrastructure
            </h3>
          </div>
          <p className="text-on-surface-variant font-body-md">
            Deployment and scaling on AWS/GCP. CI/CD pipeline automation and
            containerization using Docker for resilient application
            environments.
          </p>
        </div>
      </div>
    </section>
  );
}
