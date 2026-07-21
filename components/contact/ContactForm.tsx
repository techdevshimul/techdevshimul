export default function ContactForm() {
  return (
    <div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-xl electric-glow">
      <form className="space-y-6" id="contactForm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label
              className="font-label-md text-label-md text-outline"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="bg-surface-container-low border border-glass-border rounded-lg px-4 py-3 text-on-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:opacity-30"
              id="fullName"
              placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-label-md text-label-md text-outline"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="bg-surface-container-low border border-glass-border rounded-lg px-4 py-3 text-on-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:opacity-30"
              id="email"
              placeholder="john@example.com"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="font-label-md text-label-md text-outline"
            htmlFor="subject"
          >
            Subject
          </label>
          <select
            className="bg-surface-container-low border border-glass-border rounded-lg px-4 py-3 text-on-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
            id="subject"
          >
            <option value="collaboration">Project Collaboration</option>
            <option value="hiring">Job Opportunity</option>
            <option value="consulting">Consulting</option>
            <option value="other">General Inquiry</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="font-label-md text-label-md text-outline"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="bg-surface-container-low border border-glass-border rounded-lg px-4 py-3 text-on-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:opacity-30 resize-none"
            id="message"
            placeholder="Describe your vision or inquiry..."
            rows={6}
          ></textarea>
        </div>
        <button
          className="group relative w-full bg-primary text-on-primary font-label-md text-label-md font-bold py-4 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-glow-electric"
          type="submit"
        >
          <div className="relative z-10 flex justify-center items-center gap-2">
            <span className="">Send Message</span>
            <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
              send
            </span>
          </div>
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
        </button>
      </form>
    </div>
  );
}
