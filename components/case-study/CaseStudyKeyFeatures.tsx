import Image from "next/image";

export default function CaseStudyKeyFeatures() {
  return (
    <section className="mb-stack-lg transition-all duration-1000 opacity-100 translate-y-10 py-stack-lg">
      <h2 className="font-headline-md text-headline-md mb-8">
        Key Engineering Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-gutter">
        {/* <!-- Feature 1 --> */}
        <div className="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col justify-between hover:border-primary/50 transition-colors bg-surface-container border-glass-border">
          <div>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">
                speed
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-4">
              Adaptive Data Fetching
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Utilized Intersection Observer API combined with RTK Query to only
              fetch and sync data for components currently visible in the
              viewport, significantly reducing browser memory overhead.
            </p>
          </div>
          <div className="mt-8 flex gap-2">
            <span className="bg-surface-container-lowest px-3 py-1 rounded text-[10px] font-bold text-outline tracking-widest uppercase border border-glass-border">
              Performance
            </span>
            <span className="bg-surface-container-lowest px-3 py-1 rounded text-[10px] font-bold text-outline tracking-widest uppercase border border-glass-border">
              UX
            </span>
          </div>
        </div>
        {/* <!-- Feature 2 --> */}
        <div className="glass-panel p-8 rounded-xl hover:border-secondary/50 transition-colors bg-surface-container border-glass-border">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary">
              security
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-4">RBAC Layer</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Granular Role-Based Access Control implemented via custom Express
            middleware and JWT payload verification.
          </p>
        </div>
        {/* <!-- Feature 3 --> */}
        <div className="glass-panel p-8 rounded-xl hover:border-tertiary/50 transition-colors bg-surface-container border-glass-border">
          <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-tertiary">
              monitoring
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-4">
            Live Analytics
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Interactive charts using D3.js and Recharts mapping live Socket.io
            data streams.
          </p>
        </div>
        {/* <!-- Feature 4 --> */}
        <div className="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col md:flex-row items-center gap-8 hover:border-primary/50 transition-colors bg-surface-container border-glass-border">
          <div className="w-full md:w-48 h-32 overflow-hidden rounded-lg">
            <Image
              alt="Technical Dashboard UI"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJfGZN4CDXwpWQeJ7FHwFmvV1vz1m4FnpQdenb5TcpvnnvghGrxbbXVphH7GroJZJLY-ez9BwZT615wGcAdD98pkrQ3qywYn_pmCOnmyNpBkahhh_6FaBWAO_NiD1SGrDJEC75hcfDhS1MBdwViEKTO01hKMK9OyA1pDfTfK54_SHJ65yNiYu7h8_PIwoLhjuvp8wppNB7EeYJ3c2RCv1Qdo0dQ3Rj4f0BxaxG_U5slKgzOffNuULAkORUoxRnk2YgZdycVoNCaoCY"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              priority
            />
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm mb-2">
              Interface Precision
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A high-fidelity dashboard built with Tailwind CSS, focusing on
              information density and visual hierarchy for technical operators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
