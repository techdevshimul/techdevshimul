import Image from "next/image";

const projectItems = [
  {
    id: 1,
    title: "E-commerce Project",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLtJnNbDFSsVGsDYKigvIs7OlLmwqWld2imQX4kFs9Y5XHBerFwis3SigAtCK39xZKX66AW4_ASo0IrqmSpdcAdZIQrR7YtU2Hv7X0241xUksQosQuLZ7IgvjCwUMNRh1bZpaXN40ssGa_Uo9TXn4K4gd_5JiJ0rNSW5ZRBTQB_dXexpxuniIVx5wCrG44SEPG9hOdRWfO7sA6BYrz3Hodq3TW3RmwHPsqlQzMA-hTG6EMwUOexLfI1IbjR-",
    description:
      "A high-performance digital storefront featuring real-time inventory management, stripe integration, and an advanced administrative dashboard for business operations.",
    icon: "bolt",
    technologies: ["MongoDB", "Express", "React", "Node"],
    role: "Lead Architect",
    keyResult: "40% Increase in Conversion",
    githubLink: "#",
    liveDemoLink: "#",
  },
  {
    id: 2,
    title: "Burger Builder",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLtJnNbDFSsVGsDYKigvIs7OlLmwqWld2imQX4kFs9Y5XHBerFwis3SigAtCK39xZKX66AW4_ASo0IrqmSpdcAdZIQrR7YtU2Hv7X0241xUksQosQuLZ7IgvjCwUMNRh1bZpaXN40ssGa_Uo9TXn4K4gd_5JiJ0rNSW5ZRBTQB_dXexpxuniIVx5wCrG44SEPG9hOdRWfO7sA6BYrz3Hodq3TW3RmwHPsqlQzMA-hTG6EMwUOexLfI1IbjR-",
    description:
      "Interactive custom builder application allowing users to dynamically create orders. Features complex state management and real-time backend synchronization.",
    icon: "person",
    technologies: ["React", "Firebase", "Redux"],
    role: "Full Stack Developer",
    keyResult: "25% Reduction in Server Latency",
    githubLink: "#",
    liveDemoLink: "#",
  },
  {
    id: 3,
    title: "Hotel Booking",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLtJnNbDFSsVGsDYKigvIs7OlLmwqWld2imQX4kFs9Y5XHBerFwis3SigAtCK39xZKX66AW4_ASo0IrqmSpdcAdZIQrR7YtU2Hv7X0241xUksQosQuLZ7IgvjCwUMNRh1bZpaXN40ssGa_Uo9TXn4K4gd_5JiJ0rNSW5ZRBTQB_dXexpxuniIVx5wCrG44SEPG9hOdRWfO7sA6BYrz3Hodq3TW3RmwHPsqlQzMA-hTG6EMwUOexLfI1IbjR-",
    description:
      "A comprehensive reservation system with room filtering, booking history, and secure user authentication using modern web security standards.",
    icon: "security",
    technologies: ["MERN Stack", "JWT Auth", "Context API"],
    role: "Security Lead",
    keyResult: "Zero Security Vulnerabilities",
    githubLink: "#",
    liveDemoLink: "#",
  },
  {
    id: 4,
    title: "Photo Gallery",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLtJnNbDFSsVGsDYKigvIs7OlLmwqWld2imQX4kFs9Y5XHBerFwis3SigAtCK39xZKX66AW4_ASo0IrqmSpdcAdZIQrR7YtU2Hv7X0241xUksQosQuLZ7IgvjCwUMNRh1bZpaXN40ssGa_Uo9TXn4K4gd_5JiJ0rNSW5ZRBTQB_dXexpxuniIVx5wCrG44SEPG9hOdRWfO7sA6BYrz3Hodq3TW3RmwHPsqlQzMA-hTG6EMwUOexLfI1IbjR-",
    description:
      "Sleek, responsive media showcase with masonry layout, lightbox viewing, and cloud-hosted storage for high-resolution photography.",
    icon: "person",
    technologies: ["React", "Tailwind CSS", "Cloudinary"],
    role: "UI/UX Engineer",
    keyResult: "30% Faster Load Time",
    githubLink: "#",
    liveDemoLink: "#",
  },
];

export default function ProjectsItems() {
  return (
    <section className="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto pb-stack-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* <!-- Project 1: E-commerce Project --> */}
        {projectItems.map((project) => (
          <article
            key={project.id}
            className="group relative overflow-hidden rounded-xl glass-card transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-glow-electric/20"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.image}
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="font-label-sm text-label-sm text-outline uppercase tracking-widest px-3 py-1 border border-glass-border rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary rounded font-label-sm text-label-sm mb-2">
                <span className="material-symbols-outlined text-[14px]">
                  {project.icon}
                </span>
                <span className="">{project.role}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                {project.description}
              </p>
              <div className="flex items-center gap-2 mb-6 text-secondary font-label-md">
                <span className="material-symbols-outlined text-[18px]">
                  bolt
                </span>
                <span className="">Key Result: {project.keyResult}</span>
              </div>
              <div className="flex items-center gap-6">
                <a
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-primary transition-colors"
                  href={project.githubLink}
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    data-icon="code"
                  >
                    code
                  </span>
                  GitHub Repo
                </a>
                <a
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-primary transition-colors"
                  href={project.liveDemoLink}
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    data-icon="open_in_new"
                  >
                    open_in_new
                  </span>
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More CTA */}
      <div className="mt-stack-lg flex justify-center">
        <button className="group relative px-10 py-4 bg-transparent border border-secondary text-secondary font-label-md text-label-md rounded-lg overflow-hidden hover:text-on-primary transition-colors">
          <span className="relative z-10">Explore More Projects</span>
          <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </section>
  );
}
