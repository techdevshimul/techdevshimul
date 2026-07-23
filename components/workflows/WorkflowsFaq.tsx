import Accordion from "./Accordion";

export default function WorkflowsFaq() {
  return (
    <section className="bg-surface-container-low py-stack-sm">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-headline-md mb-4">
            Technical FAQ
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Common queries regarding the development lifecycle, tech stacks, and
            long-term maintenance.
          </p>
        </div>
        <Accordion />
      </div>
    </section>
  );
}
