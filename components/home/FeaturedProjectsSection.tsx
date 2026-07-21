import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Visionary E-Commerce Engine",
    description:
      "A high-performance online marketplace featuring real-time inventory management and a custom headless CMS architecture.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AP1WRLtJnNbDFSsVGsDYKigvIs7OlLmwqWld2imQX4kFs9Y5XHBerFwis3SigAtCK39xZKX66AW4_ASo0IrqmSpdcAdZIQrR7YtU2Hv7X0241xUksQosQuLZ7IgvjCwUMNRh1bZpaXN40ssGa_Uo9TXn4K4gd_5JiJ0rNSW5ZRBTQB_dXexpxuniIVx5wCrG44SEPG9hOdRWfO7sA6BYrz3Hodq3TW3RmwHPsqlQzMA-hTG6EMwUOexLfI1IbjR-",
    technologies: ["React", "Node.js"],
    caseStudyLink: "#",
    liveDeploymentLink: "#",
  },
  {
    id: 2,
    title: "Precision Food Delivery",
    description:
      "Optimized logistics app with integrated payment systems and real-time tracking.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AP1WRLv3t2wmcOuT_KYtSndH5E35RtD_cgw_FAmhE-T4vdOI_5HEnKrVQ63Cylj2V5zfLbzcAoeVWrndmp5YIumBAgaZVp_0_VdYHciyWoCCAKgTKceiGh1HSQF4B8PKEzgBaGBm_xwQOB1LAHDcWPYb8QbVzKqX7qitqNnvb0rQQtUe1lKaX_WLZJ94G5DWtt6thamtaOjpn9w8uEr82lDKezTvqPCmFbu9VuRMKx7rHt9jbDhn-WlmvykciDQ",
    technologies: ["Tailwind"],
    caseStudyLink: "#",
    liveDeploymentLink: "#",
  },
  {
    id: 3,
    title: "Hospitality Cloud Portal",
    description:
      "Scalable hotel management dashboard with complex scheduling algorithms.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AP1WRLuJL35za6JJplQkm6Kog8lP4SkXJ6wjKwy8GtjcQ-JsKRHtbLo4Yb8R0jElTxxY0FKouuYNRi0stlVxd8o5mJ-yfJDbZsRLz4-3GeaXUM3pplSY8XGkj-Y0RSmdEhP7KH8J-KV5EFIMbiWLgTWmPyfitg0P1ZIMezdlnJ7Bagat3y6gvEksvsLeBlMTOdJvYQIZ0oBAsHXOIlzOqpsof8-c6GeJlNj56WFO-HvgqJ-SX9AKRNXfhYr0dAk",
    technologies: ["Next.js"],
    caseStudyLink: "#",
    liveDeploymentLink: "#",
  },
];

function FeaturedProjectItem({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="high-gloss rounded-3xl overflow-hidden flex flex-col h-full hover:border-primary/50 transition-colors duration-500 bg-surface-container-low">
      <div className="relative aspect-video overflow-hidden border-b border-white/5">
        <Image
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          src={project.imageUrl}
          fill
          sizes="(min-width: 1024px) 400px, 100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-surface-dim/60 to-transparent"></div>
        <div className="absolute top-6 right-6 flex gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-label-sm font-mono border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="p-10 space-y-4">
        <h4 className="font-headline-sm text-headline-sm group-hover:text-primary transition-colors text-white">
          {project.title}
        </h4>
        <div className="reveal-details space-y-4">
          <p className="font-body-md text-body-md text-outline">
            {project.description}
          </p>
        </div>
        <div className="flex items-center gap-8 pt-4">
          <a
            className="text-primary font-label-sm text-label-sm flex items-center gap-2 group/link uppercase"
            href={project.caseStudyLink}
          >
            Case Study
            <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">
              arrow_forward
            </span>
          </a>
          <a
            className="text-outline hover:text-white font-label-sm text-label-sm flex items-center gap-2 transition-colors uppercase"
            href={project.liveDeploymentLink}
          >
            <span className="material-symbols-outlined text-base">public</span>
            Live_Deployment
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjectsSection() {
  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop bg-surface"
      id="projects"
    >
      <div className="max-w-container-max mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="font-label-md text-label-md text-primary uppercase">
              Works_Index
            </h2>
            <h3 className="font-headline-lg text-headline-lg text-white">
              Featured Projects
            </h3>
          </div>
          <p className="font-body-md text-body-md text-outline max-w-sm border-l border-white/10 pl-6">
            A curated selection of technical solutions, ranging from e-commerce
            engines to real-time analytics dashboards.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <article className="md:col-span-7 lg:col-span-8 group animate-fade-in-up">
            <FeaturedProjectItem project={projects[0]} />
          </article>
          <article
            className="md:col-span-5 lg:col-span-4 group animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <FeaturedProjectItem project={projects[1]} />
          </article>
          <article
            className="md:col-span-5 group animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <FeaturedProjectItem project={projects[2]} />
          </article>
          {/* <!-- Bento CTA --> */}
          <div
            className="md:col-span-7 glass-card rounded-3xl p-12 flex flex-col justify-center items-center text-center space-y-8 animate-fade-in-up border-white/5 bg-surface-container-low"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-3xl">
                lightbulb
              </span>
            </div>
            <h4 className="font-headline-md text-headline-md text-white">
              Have a unique idea?
            </h4>
            <p className="font-body-lg text-body-lg text-outline max-w-lg">
              I specialize in taking complex problems and turning them into
              seamless, high-performance digital realities.
            </p>
            <a
              className="bg-white text-surface px-10 py-5 rounded-2xl font-label-md text-label-sm font-bold uppercase transition-all duration-300 hover:scale-105 shadow-xl shadow-white/5"
              href="#contact"
            >
              Initialize_Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
