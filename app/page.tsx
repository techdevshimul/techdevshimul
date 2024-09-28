import WelcomeSection from "@/components/home/welcome-section";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import SocialLinks from "@/components/social-links/social-links";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl ">
      <WelcomeSection />
      <Skills />
      <Projects />
      <SocialLinks />
    </main>
  );
}
