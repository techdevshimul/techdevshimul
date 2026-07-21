import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsHighlights from "@/components/projects/ProjectsHighlights";
import ProjectsItems from "@/components/projects/ProjectsItems";
import ProjectsTechnicalProcess from "@/components/projects/ProjectsTechnicalProcess";

export default function Projects() {
  return (
    <main className="pt-24 min-h-screen">
      {/* <!-- Atmospheric Glow Backgrounds --> */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-glow-electric rounded-full blur-[120px] opacity-20 floating-accent"></div>
        <div
          className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] opacity-10 floating-accent"
          style={{ animationDelay: "-2s" }}
        ></div>
      </div>
      <ProjectsHeader />
      <ProjectsItems />
      <ProjectsHighlights />
      <ProjectsTechnicalProcess />
    </main>
  );
}
