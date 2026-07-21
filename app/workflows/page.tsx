import WorkflowsCta from "@/components/workflows/WorkflowsCta";
import WorkflowsFaq from "@/components/workflows/WorkflowsFaq";
import WorkflowsHero from "@/components/workflows/WorkflowsHero";
import WorkflowsTechnicalWorkflow from "@/components/workflows/WorkflowsTechnicalWorkflow";

export default function WorkflowsPage() {
  return (
    <main className="pt-32 pb-stack-lg">
      <WorkflowsHero />
      <WorkflowsTechnicalWorkflow />
      <WorkflowsFaq />
      <WorkflowsCta />
    </main>
  );
}
