import Contact from "@/components/contact/contact";
import Education from "@/components/education/education";
import Footer from "@/components/footer/footer";
import WelcomeSection from "@/components/home/welcome-section";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main className="mx-auto max-w-(--breakpoint-xl) ">
      <WelcomeSection />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
