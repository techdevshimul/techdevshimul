export default function ContactSection() {
  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop relative bg-surface"
      id="contact"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-10">
          <header className="space-y-4">
            <h2 className="font-label-md text-label-md text-primary uppercase">
              Contact_Interface
            </h2>
            <h3 className="font-headline-lg text-headline-lg text-white">
              Let&apos;s build something visionary.
            </h3>
          </header>
          <p className="font-body-lg text-body-lg text-outline leading-relaxed">
            Currently looking for new opportunities and collaborations. Whether
            you have a question or just want to say hi, I&apos;ll try my best to
            get back to you!
          </p>
          <address className="space-y-6 pt-6 not-italic">
            <div className="flex items-center gap-6 p-4 glass-card rounded-2xl border-white/5 bg-surface-container-low">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <div>
                <p className="font-label-sm text-[10px] text-outline uppercase">
                  Email_Channel
                </p>
                <p className="font-body-md text-body-md text-white">
                  info@techdevshimul.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-4 glass-card rounded-2xl border-white/5 bg-surface-container-low">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">
                  location_on
                </span>
              </div>
              <div>
                <p className="font-label-sm text-[10px] text-outline uppercase">
                  Geo_Location
                </p>
                <p className="font-body-md text-body-md text-white">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </address>
        </div>
        <div className="relative">
          <div className="absolute -inset-2 bg-linear-to-r from-primary/10 to-secondary/10 rounded-[2.5rem] blur-2xl"></div>
          <form className="relative high-gloss p-10 md:p-12 rounded-3xl space-y-8 bg-surface-container-low">
            <div className="space-y-3">
              <label className="font-label-sm text-[10px] text-outline uppercase">
                User_Name
              </label>
              <input
                className="w-full bg-white/5 border border-outline-variant rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder-white/20"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-3">
              <label className="font-label-sm text-[10px] text-outline uppercase">
                Email_Address
              </label>
              <input
                className="w-full bg-white/5 border border-outline-variant rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder-white/20"
                placeholder="john@example.com"
                type="email"
              />
            </div>
            <div className="space-y-3">
              <label className="font-label-sm text-[10px] text-outline uppercase">
                Project_Type
              </label>
              <select className="w-full bg-surface-container border border-outline-variant rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white appearance-none">
                <option className="bg-surface-container" value="web_app">
                  Web Application
                </option>
                <option className="bg-surface-container" value="ecommerce">
                  E-Commerce
                </option>
                <option className="bg-surface-container" value="saas">
                  SaaS Platform
                </option>
                <option className="bg-surface-container" value="consulting">
                  Technical Consulting
                </option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="font-label-sm text-[10px] text-outline uppercase">
                Project_Manifesto
              </label>
              <textarea
                className="w-full bg-white/5 border border-outline-variant rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder-white/20"
                placeholder="Tell me about your project..."
                rows={4}
              ></textarea>
            </div>
            <button
              className="w-full bg-primary text-on-primary py-5 rounded-2xl font-label-sm text-label-sm font-bold uppercase transition-all hover:scale-[1.02] active:scale-95 glow-hover"
              type="submit"
            >
              Transmit_Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
