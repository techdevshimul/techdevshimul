import Image from "next/image";

const testimonials = [
  {
    quote:
      "Shimul transformed our chaotic legacy system into a streamlined, high-performance API. His grasp of distributed systems is unparalleled.",
    name: "Sarah Chen",
    title: "CTO, Velocity Labs",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9lj2YTTHuwnhUlXudPisv8l-gfEu2DyouG0WA9ATrIlfHq5Smuaw3phOQfh-6JXQIlOqRGZkJ2w86fy8kViahg1dlDWIy17XugomHhfekGskME-zDBXzs-OrPEdtt-FwxSZPOasNIJ_b3Qcn8axaDDXO97Zdx1Lwz8f6XnVEHAZ1zju07eIyCEFMRoztn3yI9lpDq3WXWxAX4BzCroQmByhcmw37NRPKBlFbD6ZSWw_SitIb6_ApfC6PQCI19RQ9AuHw_zEE21fbT",
  },
  {
    quote:
      "The level of technical precision Shimul brings to the table is rare. He doesn't just write code; he builds scalable business assets.",
    name: "Marcus Thorne",
    title: "Founder, Synthetix AI",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxfvFq4xHwALDX99E_kHOYMnKgG7iuLmRtBYbv74WVrnN84EtSy--xf8NMj1fVPbgphVuMAmt-sZ79ibJVuyFw_f4fqvAxfWxXIhJiPV3zKYRIL_7Mf5sjEaQmI86za94zzZI57vKDM9-rTfyYG6cwlEijf-AQ7hJKrGFKZF2SiPsqRAVuUIS3hFbZRjaNu28JWgw78QLnV33a28B_mzRWjDMnSJ8n6kVQFKRv1NayamX6j5lHQGw4F_fH1g3NdY92LtBHgTWl7Azr",
  },
  {
    quote:
      "Exceeded all benchmarks. We saw a 40% reduction in cloud infrastructure costs within the first quarter of deployment.",
    name: "Elena Rodriguez",
    title: "VP Engineering, Quantum",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmyu0MGYfk9TEh9wgCeIh9hRKeZg9A6gKarAN0jNLYblfFNN6dGZdSeZy6bA79ijK7-7AFP0gVv9GRN1CaQo1xxJeSFuvnmsdJe3ZktCCeXU7XotwK0Zdd7ASO7fUf4pAJR0C1IYgbeNDa3nMProej9Q0z-WK2VHBNG2H5hbWe4ObvQLeOmy7RQV2NMA5Lpoaq8D-ZGOQ0waiCR6HchG8VvLxqkjdWVG0tfIKP2bxTXBkgjq-37B-ItSn8sOZAs21UL0RiZQLMOr7u",
  },
];

export default function TestimoinalsClientSuccessStories() {
  return (
    <section>
      <div className="mb-stack-md">
        <h2 className="font-headline-md text-headline-md text-on-background">
          Client Success Stories
        </h2>
        <div className="h-1.5 w-24 bg-primary mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="glass-card p-stack-md rounded-2xl flex flex-col relative overflow-hidden transition-all duration-700 ease-out opacity-100 translate-y-8"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="mb-8 relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl opacity-50 select-none">
                format_quote
              </span>
              <blockquote className="font-body-lg text-body-lg italic leading-relaxed text-on-surface mt-2">
                {testimonial.quote}
              </blockquote>
            </div>
            <div className="mt-auto flex items-center gap-4 border-t border-glass-border pt-6 relative z-10">
              <Image
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover bg-surface-container-high ring-2 ring-secondary/20"
                src={testimonial.image}
                width={48}
                height={48}
                priority
              />
              <div>
                <cite className="font-label-md text-label-md font-bold text-on-background not-italic">
                  {testimonial.name}
                </cite>
                <p className="font-label-sm text-label-sm text-outline">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
