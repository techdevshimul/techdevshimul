const educationTimelineItems = [
  {
    id: 1,
    title: "Pabna Polytechnic Institute",
    degree: "Diploma in Engineering",
    specialization: "Computer Technology",
    duration: "2018 - 2022",
    description:
      "Focused on the fundamentals of computer science, hardware architecture, and industrial-level software development practices. Participated in various technical workshops and projects that bridge the gap between theory and application.",
    skills: ["Algorithms", "Data Structures", "OS", "Microprocessors"],
    icon: "engineering",
  },
  {
    id: 2,
    title: "Radhanagar Mojumdar Academy",
    degree: "Secondary School Certificate",
    specialization: "Science Division",
    duration: "2013 - 2018",
    description:
      "Developed a strong scientific foundation and mathematical analytical skills. Recognized for academic excellence and participation in mathematics olympiads, which sparked the initial interest in logic and computational problem solving.",
    skills: ["Physics", "Chemistry", "Mathematics", "Computer Literacy"],
    icon: "engineering",
  },
];

export default function EducationTimeline() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative">
      {/* <!-- Central Line --> */}
      <div className="absolute left-1/2 -translate-x-1/2 h-full timeline-line hidden md:block"></div>
      <div className="flex flex-col gap-24 relative">
        {/* <!-- Timeline Item 1: Pabna Polytechnic Institute --> */}
        {educationTimelineItems.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center md:justify-between w-full relative ${item.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            <div
              className={`hidden md:block w-[45%] pr-12 ${item.id % 2 === 1 ? "text-right" : "text-left"}`}
            >
              <div className="inline-block px-4 py-1 bg-surface-container-high rounded-full border border-glass-border mb-4">
                <span className="text-primary font-bold">{item.duration}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background">
                {item.degree} - {item.title}
              </h3>
              <p className="text-on-surface-variant mt-2">
                {item.specialization}
              </p>
            </div>
            {/* <!-- Glowing Node --> */}
            <div className="z-10 bg-primary w-6 h-6 rounded-full border-4 border-background glow-node mb-8 md:mb-0"></div>
            <div
              className={`w-full md:w-[45%] ${item.id % 2 === 0 ? "pl-0 md:pl-12" : "pr-0 md:pr-12"}`}
            >
              <div className="glass-panel p-8 rounded-xl hover:translate-x-2 transition-transform duration-500 transition-all duration-700 opacity-100 translate-y-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      {item.icon}
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm">
                    {item.title}
                  </h2>
                </div>
                <div className="md:hidden mb-4">
                  <span className="text-primary font-bold">
                    {item.duration}
                  </span>
                </div>
                <p className="text-on-surface-variant mb-6 font-body-md">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-surface-container text-secondary rounded-full font-label-sm text-label-sm border border-glass-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
