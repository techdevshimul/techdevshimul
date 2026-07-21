const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    href: "#",
    icon: "link",
  },
  {
    id: 2,
    name: "GitHub",
    href: "#",
    icon: "terminal",
  },
  {
    id: 3,
    name: "WhatsApp",
    href: "#",
    icon: "chat",
  },
  {
    id: 4,
    name: "Facebook",
    href: "#",
    icon: "public",
  },
];

export default function ContactInfoAndSocial() {
  return (
    <div className="lg:col-span-5 space-y-gutter">
      {/* <!-- Direct Connect Card --> */}
      <div className="glass-panel p-8 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="material-symbols-outlined text-6xl">hub</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-6">
          Let&apos;s Connect
        </h3>
        <div className="space-y-6">
          <a
            className="flex items-center gap-4 group"
            href="mailto:contact@shimulhossain.com"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined">alternate_email</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Email Me
              </p>
              <p className="font-body-md text-body-md text-on-background group-hover:text-primary transition-colors">
                contact@shimulhossain.com
              </p>
            </div>
          </a>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Location
              </p>
              <p className="font-body-md text-body-md text-on-background">
                Dhaka, Bangladesh (Remote Ready)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Social Ecosystem --> */}
      <div className="glass-panel p-8 rounded-xl">
        <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-6">
          Social Ecosystem
        </p>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              className="flex items-center gap-3 p-4 rounded-lg bg-surface-container-low border border-glass-border hover:border-primary/50 transition-all group"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-primary">
                {link.icon}
              </span>
              <span className="font-label-md text-label-md group-hover:text-primary transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
      {/* Availability Badge */}
      <div className="glass-panel p-6 rounded-xl border-l-4 border-primary bg-primary/5">
        <div className="flex items-start gap-4">
          <div className="relative mt-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <div>
            <p className="font-headline-sm text-[18px] text-on-background mb-1">
              Available for new projects
            </p>
            <p className="font-body-md text-body-md text-outline">
              Current turnaround for inquiries is ~24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
