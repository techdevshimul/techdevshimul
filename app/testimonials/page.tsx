import TestimoinalsClientSuccessStories from "@/components/testimonials/TestimonialsClientSuccessStories";
import TestimonialsCta from "@/components/testimonials/TestimonialsCta";
import TestimoinialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsImpactMetrics from "@/components/testimonials/TestimonialsImpactMetrics";
import TestimonialsTrustBar from "@/components/testimonials/TestimonialsTrustBar";

export default function TestimonialsPage() {
  return (
    <main className="relative pt-32 pb-stack-lg">
      {/* <!-- Atmospheric Glows --> */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/10 glow-blob animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] left-0 w-100 h-100 bg-secondary/10 glow-blob"></div>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-sm">
        <TestimoinialsHero />
        <TestimonialsImpactMetrics />
        <TestimonialsTrustBar />
        <TestimoinalsClientSuccessStories />
      </section>
      <TestimonialsCta />
    </main>
  );
}
