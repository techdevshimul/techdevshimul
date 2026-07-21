import EducationHistory from "@/components/about/EducationHistory";
import Story from "@/components/about/Story";
import TechStack from "@/components/about/TechStack";

export default function About() {
  return (
    <main className="pt-32 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <Story />
      <TechStack />
      <EducationHistory />
    </main>
  );
}
