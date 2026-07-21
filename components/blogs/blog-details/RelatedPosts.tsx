import Image from "next/image";

const relatedPosts = [
  {
    id: 1,
    title: "Optimizing GraphQL Queries with Redis Caching",
    category: "Performance",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBln0N1YY_y97IRryeKKXptobCHF7TcOaFl6qyPobJEHNHn79TVeV784kZgUFlrHYmt3-mBMc-dS8ETTQdKA9kLtVnyabDWt38uYIVk8IbmMdYrZ9mieF1PcCv9oNziVPNcSbn2sMPCosBE8UTeWFaEGn0Cfz_YtLtwKUgVWB0Ea5ChFR_eyB9Gou7kjxwnWz_OdLmFO-6pS6DQMS0G1NRqsM3TUNDFpFYOueiAtUPd7qVzjEUEBUtpG81tS9vu2Vb0T1zz-_eiMwKf",
  },
  {
    id: 2,
    title: "Securing JWT Workflows in Next.js 14",
    category: "Security",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvFhdmHbt5ZTCN4_WBAy2JriYKO2klzRXp_c70rzbeNCpTZ5FR0efqx7SYEd4OSkYkSlypuMHv44Oe1dAEmd3gKhx1xeE2x9cEKJPuA7RjUjUArx0oMktcqQ6AONXB_d5Sa29T7v8bqEB56Q3Sjli648hgt3xwGk1fcI7yi11W8jvLB03IBb45-F3FE1oQf1DtDtCEj56El_FgSHlLWwhVQ8gt5_PR-Zm8y0PowJIKaAEQumCCp4yUsuWZoMM4CvjMh9mjiMbHp6AN",
  },
  {
    id: 3,
    title: "Infrastructure as Code: Terraform vs CDK",
    category: "DevOps",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVaIabjVs0nNZIlLl0Eqfz7WQGTlHHKDoURaJAs1p36fFMkdSrH7UTVYvvw4Any9bEG4jN5Agr483esDWe0m5KHlp_QS2mZcpKiOZfKyYlV2I09Afal3tC26ckHhCakSTrYtGR2iD0b77N4KgsMFRMVrGSgSrfF7Ql-jB9IuS4jhk5TjYCZmMARDs9Xju1maYylmaG-yKcOj92_lXVhYTl4dvqACXLE09cL1UDbKGidpS4yx9vlKMQtAwddy0QH5OTpALVelyja3GE",
  },
];

export default function RelatedPosts() {
  return (
    <section className="mt-stack-lg border-t border-glass-border pt-stack-md">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-10">
        More From the Architect
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Related Card 1 --> */}
        {relatedPosts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="aspect-video rounded-xl overflow-hidden mb-6 border border-glass-border relative">
              <Image
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="A dark-themed UI representation of a GraphQL query editor with glowing purple and blue syntax highlighting. The image has a glassmorphic overlay and technical data visualizations in the background."
                src={post.imageUrl}
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent"></div>
            </div>
            <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">
              {post.category}
            </p>
            <h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
              {post.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
