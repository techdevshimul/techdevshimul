export default function ContactLocationMap() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg">
      <div className="w-full h-[400px] rounded-2xl glass-panel relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
          <div
            className="w-full h-full bg-cover bg-center"
            role="img"
            aria-label="A futuristic dark-mode map visualization showing Dhaka, Bangladesh. The map features cyan glow lines for major infrastructure, minimal labels in a sleek sans-serif font, and deep navy landmasses. Subtle electric blue nodes highlight key connection points, creating a professional and technical aesthetic aligned with a software engineer's portfolio."
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQ1tXNpwk7w5MB3rc1dDs7-an2KO0p4k1MlJGvQlIMedHIEnHyDcoqyU-cpAPs0STJcOLKjypxb5NOajP1NXfLGx_rpNQV6A-wLaltgkc0WoZiRgVlidrZtmsCh3u89_CdLAEL5-oMhjQowVbeGH7ap9nvXrw_TiJJ081CcbkUaRhim0J4f-xovLfFMtEwhUxZdq9S4qkJAoK7FTlURVPRa6jJex63CoFN_aflbs3kDw9LAfo7YA_aoEu9vbJVvDB0EoEa1ZOqsHJ6")',
            }}
          />
        </div>
        <div className="relative z-10 glass-panel px-8 py-4 rounded-full border-primary/30 flex items-center gap-3 animate-bounce">
          <span className="material-symbols-outlined text-primary">
            location_on
          </span>
          <span className="font-label-md text-label-md font-bold text-on-background">
            Based in Dhaka, Working Globally
          </span>
        </div>
      </div>
    </section>
  );
}
