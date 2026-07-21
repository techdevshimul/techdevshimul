export default function EducationHistory() {
  return (
    <section>
      <h2 className="font-headline-md text-headline-md text-on-background mb-stack-md">
        Academic Background
      </h2>
      <div className="relative space-y-12 pl-8">
        {/* <!-- Timeline Line --> */}
        <div className="absolute left-[7px] top-4 bottom-4 w-0.5 circuit-line"></div>
        {/* <!-- Education Item 1 --> */}
        <div className="relative">
          <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
          <div className="glass-panel p-stack-sm rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="font-headline-sm text-headline-sm text-on-background">
                Bachelor of Science in Computer Science
              </h3>
              <span className="font-label-md text-label-md text-secondary">
                2018 — 2022
              </span>
            </div>
            <p className="font-label-md text-label-md text-outline-variant mb-4 uppercase tracking-widest">
              Global Institute of Technology
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Focused on Distributed Systems and Artificial Intelligence.
              Graduated with honors, contributing to multiple open-source
              research projects regarding edge computing performance.
            </p>
          </div>
        </div>
        {/* <!-- Education Item 2 --> */}
        <div className="relative">
          <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
          <div className="glass-panel p-stack-sm rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="font-headline-sm text-headline-sm text-on-background">
                Advanced Software Engineering Certification
              </h3>
              <span className="font-label-md text-label-md text-secondary">
                2023
              </span>
            </div>
            <p className="font-label-md text-label-md text-outline-variant mb-4 uppercase tracking-widest">
              Cloud Computing Alliance
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Intensive specialization in Microservices Architecture, Kubernetes
              orchestration, and serverless infrastructure design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
