import { techStacksArr } from "@/utils/tech-stacks";

export default function TechStack() {
  return (
    <section className="mb-stack-lg">
      <div className="flex items-center justify-between mb-stack-sm">
        <h2 className="font-headline-md text-headline-md text-on-background">
          Technical Arsenal
        </h2>
        <div className="h-px grow mx-8 bg-glass-border"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* <!-- Skill Card --> */}
        {techStacksArr.map((tech) => (
          <div
            key={tech.id}
            className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary transition-all duration-300 group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container group-hover:bg-primary-container transition-colors">
              <tech.Icon className="text-primary group-hover:text-on-primary-container text-2xl" />
            </div>
            <span className="font-label-md text-label-md text-on-surface">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
