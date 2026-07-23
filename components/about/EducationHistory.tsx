import { educationTimelines } from "@/utils/educationTimelines";

export default function EducationHistory() {
  return (
    <section>
      <h2 className="font-headline-md text-headline-md text-on-background mb-stack-md">
        Academic Background
      </h2>
      <div className="relative space-y-8 pl-8">
        {/* <!-- Timeline Line --> */}
        <div className="absolute left-1.75 top-4 bottom-0 timeline-line"></div>

        {/* <!-- Education Item 1 --> */}
        {educationTimelines.map((edu) => (
          <div key={edu.id} className="relative">
            <div className="absolute -left-7.75 top-15.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
            <div className="absolute left-7.75 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
            <div className="glass-panel p-stack-sm rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-headline-sm text-headline-sm text-on-background">
                  {edu.degree}
                </h3>
                <span className="font-label-md text-label-md text-secondary">
                  {edu.duration}
                </span>
              </div>
              <p className="font-label-md text-label-md text-outline-variant mb-4 uppercase tracking-widest">
                {edu.title}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
