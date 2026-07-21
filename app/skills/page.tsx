import SkillsCta from "@/components/skills/SkillsCta";
import SkillsHeader from "@/components/skills/SkillsHeader";
import SkillsMobileNativeShowcase from "@/components/skills/SkillsMobileNativeShowcase";
import SkillsServiceOfferings from "@/components/skills/SkillsServiceOfferings";
import SkillsTechnicalProof from "@/components/skills/SkillsTechnicalProof";

export default function SkillsPage() {
  return (
    <main className="relative pt-32 pb-stack-lg">
      {/* <!-- Ambient Background Shaders --> */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="glow-blob-skills absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10"></div>
        <div className="glow-blob-skills absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/10"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <SkillsHeader />
        <SkillsServiceOfferings />
        <SkillsTechnicalProof />
        <SkillsMobileNativeShowcase />
        <SkillsCta />
      </div>
    </main>
  );
}
