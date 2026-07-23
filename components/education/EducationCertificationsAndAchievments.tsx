import { certifications } from "@/utils/certifications";

export default function EducationCertificationsAndAchievements() {
  return (
    <section className="mt-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="flex items-center gap-4 mb-stack-md">
        <h2 className="font-headline-md text-headline-md text-on-background">
          Certifications &amp; Achievements
        </h2>
        <div className="grow h-px bg-glass-border"></div>
      </div>
      {/* <!-- Bento Grid Layout for Certifications --> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* <!-- Cert Card 1 --> */}
        {certifications.slice(0, 3).map((cert) => (
          <div
            key={cert.id}
            className="glass-panel p-6 rounded-xl hover:shadow-lg hover:shadow-glow-electric/10 transition-all duration-300 group opacity-100 translate-y-0"
          >
            <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:scale-110 transition-transform">
              {cert.icon}
            </span>
            <h4 className="font-headline-sm text-[20px] mb-2">{cert.title}</h4>
            <p className="text-outline text-sm mb-4">
              {cert.provider} • {cert.year}
            </p>
            <p className="text-on-surface-variant font-body-md">
              {cert.description}
            </p>
          </div>
        ))}

        {/* <!-- Large Achievement Card --> */}
        <div className="md:col-span-2 glass-panel p-8 rounded-xl border-l-4 border-l-primary relative overflow-hidden flex flex-col md:flex-row items-center gap-8 group transition-all duration-700 opacity-100 translate-y-0">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-[150px]">
              {certifications[3].icon}
            </span>
          </div>
          <div className="w-full md:w-1/3">
            <div className="w-full h-40 bg-surface-container rounded-lg flex items-center justify-center border border-glass-border">
              <span className="material-symbols-outlined text-primary text-6xl">
                {certifications[3].icon}
              </span>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h4 className="font-headline-md text-headline-sm text-primary mb-2">
              {certifications[3].title}
            </h4>
            <p className="text-outline mb-4">First Place • 2017</p>
            <p className="text-on-surface-variant font-body-lg">
              {certifications[3].description}
            </p>
          </div>
        </div>
        {/* <!-- Small Grid Achievement --> */}
        <div className="glass-panel p-6 rounded-xl flex items-center justify-center bg-primary-container text-on-primary-container text-center transition-all duration-700 opacity-100 translate-y-0">
          <div>
            <div className="font-headline-md text-headline-md mb-1">5+</div>
            <div className="font-label-md uppercase tracking-wider">
              Professional Certs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
