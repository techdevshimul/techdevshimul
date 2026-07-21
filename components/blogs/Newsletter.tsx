export default function Newsletter() {
  return (
    <section className="mt-stack-lg glass-card-blogs rounded-2xl p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Get Fresh Insights
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Join 2,000+ engineers receiving my monthly digest on software
            architecture, career growth, and the latest tech trends. No spam,
            just technical precision.
          </p>
        </div>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            className="grow bg-deep-navy border border-glass-border rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-on-background"
            placeholder="Enter your email"
            type="email"
          />
          <button
            className="bg-primary-container text-on-primary-container font-bold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-glow-electric/20 transition-all active:scale-95 whitespace-nowrap"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
