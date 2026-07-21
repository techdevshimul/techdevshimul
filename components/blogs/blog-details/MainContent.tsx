import Image from "next/image";
import DockerImplementationSection from "../DockerImplementationSection";

export default function MainContent() {
  return (
    <article className="col-span-1 lg:col-span-9 space-y-stack-md leading-relaxed">
      <section className="scroll-mt" id="introduction">
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          The shift from monolithic architectures to microservices has redefined
          how we build, deploy, and scale applications. However, this transition
          introduces complex challenges in networking, state management, and
          orchestration. In this guide, we explore the definitive patterns for
          building resilient microservices using Node.js and Docker.
        </p>
        <h2 className="font-headline-md text-headline-md text-on-surface mt-12 mb-6">
          The Microservice Mindset
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
          Before diving into the code, it&apos;s vital to understand the
          &quot;Shared Nothing&quot; architecture principle. Each service must
          own its data and scale independently. If Service A cannot function
          without a synchronous call to Service B, you have a distributed
          monolith, not a microservice architecture.
        </p>
        {/* <!-- Architectural Diagram --> */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-glass-border bg-surface-container-low group mb-8">
          <Image
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            alt="A clean, minimalist technical architectural diagram showing microservices connected via an API Gateway and Message Bus. The style is technical and futuristic with thin blue glowing lines, dark gray card elements for services, and subtle glassmorphic icons representing Docker containers and Node.js instances on a dark charcoal background."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJi-PeRhn9e1cHF_5ZBvpR_O-vO897L69pSRP_rlvybfIDUYUYSuoRM7WzjmKCZ1bhwJW1Kh3SyLqvXYpwlrh8-oov1ZgxeWsRTGYT45GFFy-RPxNn6n7yy6bGli-yaKE3Ufr5Uydbd_KOfoZQKiNdcPC2W8y7Bb0LnPs6ePcV0ZsQN_YwucyYP4KHhWG8FRMbwG4xyvdLejpbzvyJ1tnzvciZnasS6Segy5en5OaeovObE2HnFXaVVJjgsm0fa6H3Vkr68M3knOb4"
            fill
            sizes="(min-width: 1024px) 400px, 100vw"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-background/60 backdrop-blur-md px-4 py-2 rounded-full border border-glass-border">
            <p className="font-label-sm text-label-sm text-on-surface">
              Fig 1: High-Level Orchestration Flow
            </p>
          </div>
        </div>
      </section>
      <DockerImplementationSection />
      <section className="scroll-mt" id="pro-tips">
        {/* <!-- Pro Tip Callout --> */}
        <div className="p-8 rounded-xl bg-secondary/5 border-l-4 border-secondary glass-panel flex gap-6">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
              <span
                className="material-symbols-outlined text-[28px]"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                lightbulb
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-secondary mb-2">
              Pro Tip: Graceful Shutdowns
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Always listen for
              <code className="text-secondary">SIGTERM</code> signals.
              Kubernetes and Docker send this to your process when scaling down.
              Close database connections and finish inflight requests before
              exiting to avoid data corruption.
            </p>
          </div>
        </div>
      </section>
      <section className="scroll-mt" id="conclusion">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
          Summary
        </h2>
        <ul className="space-y-4 text-on-surface-variant">
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-1">
              check_circle
            </span>
            <span className="">
              Use <strong>Multi-stage Docker builds</strong> to reduce image
              size by up to 70%.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-1">
              check_circle
            </span>
            <span className="">
              Implement <strong>Health Checks</strong> in your Compose or K8s
              manifests.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-1">
              check_circle
            </span>
            <span className="">
              Always externalize configuration using environment variables or
              secret managers.
            </span>
          </li>
        </ul>
      </section>
      {/* <!-- Newsletter High-Conversion Section --> */}
      <section
        className="relative mt-stack-lg p-10 rounded-2xl overflow-hidden bg-surface-container-high border border-glass-border shadow-2xl"
        id="newsletter-trigger"
      >
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-primary/20 blur-[100px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Level Up Your Architecture
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Get monthly deep-dives on distributed systems, performance tuning,
              and the future of full-stack engineering.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              className="px-6 py-3 rounded-lg bg-surface-container-lowest border border-glass-border text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none min-w-70"
              placeholder="Enter your email"
              type="email"
            />
            <button className="px-8 py-3 bg-primary text-on-primary font-bold rounded-lg hover:shadow-[0_0_20px_rgba(180,197,255,0.3)] transition-all active:scale-95">
              Join 12k Engineers
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}
