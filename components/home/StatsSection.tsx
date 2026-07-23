export default function StatsSection() {
  return (
    <section className="py-24 border-b border-white/5 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-12">
        <article className="group">
          <div className="flex items-baseline gap-2">
            <h3 className="font-headline-lg text-headline-md text-primary font-mono tracking-tighter">
              03+
            </h3>
            <div className="h-px grow bg-linear-to-r from-primary/50 to-transparent"></div>
          </div>
          <p className="font-label-sm text-[10px] text-outline mt-2 uppercase">
            Years Experience
          </p>
        </article>
        <article className="group">
          <div className="flex items-baseline gap-2">
            <h3 className="font-headline-lg text-headline-md text-primary font-mono tracking-tighter">
              50+
            </h3>
            <div className="h-px grow bg-linear-to-r from-primary/50 to-transparent"></div>
          </div>
          <p className="font-label-sm text-[10px] text-outline mt-2 uppercase">
            Projects Completed
          </p>
        </article>
        <article className="group">
          <div className="flex items-baseline gap-2">
            <h3 className="font-headline-lg text-headline-md text-primary font-mono tracking-tighter">
              20+
            </h3>
            <div className="h-px grow bg-linear-to-r from-primary/50 to-transparent"></div>
          </div>
          <p className="font-label-sm text-[10px] text-outline mt-2 uppercase">
            Global Clients
          </p>
        </article>
        <article className="group">
          <div className="flex items-baseline gap-2">
            <h3 className="font-headline-lg text-headline-md text-primary font-mono tracking-tighter">
              99%
            </h3>
            <div className="h-px grow bg-linear-to-r from-primary/50 to-transparent"></div>
          </div>
          <p className="font-label-sm text-[10px] text-outline mt-2 uppercase">
            Success Rate
          </p>
        </article>
      </div>
    </section>
  );
}
