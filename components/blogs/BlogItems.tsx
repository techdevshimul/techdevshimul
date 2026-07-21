import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of MERN Stack: Serverless & Edge Computing",
    category: "Engineering",
    date: "Oct 12, 2024",
    description:
      "As the web evolves towards decentralized and edge-first architectures, the traditional MERN stack is undergoing a significant metamorphosis. We dive deep into how frameworks like Next.js and databases like MongoDB Atlas are bridging the gap to high-performance global applications.",
    tags: ["NextJS", "NodeJS", "CloudNative"],
    link: "/blogs/future-of-mern-stack",
  },
  {
    id: 2,
    title: "Optimizing React Performance at Scale",
    category: "Performance",
    date: "Sep 28, 2024",
    description:
      "Techniques for managing complex state and reducing re-renders in enterprise-grade React applications.",
    tags: ["React", "Performance", "Optimization"],
    link: "/blogs/optimizing-react-performance",
  },
  {
    id: 3,
    title: "Clean Code Practices for Modern Devs",
    category: "Architecture",
    date: "Sep 15, 2024",
    description:
      "Why readability is more important than cleverness. A guide to writing maintainable, scalable codebases.",
    tags: ["CleanCode", "BestPractices", "SoftwareArchitecture"],
    link: "/blogs/clean-code-practices",
  },
  {
    id: 4,
    title: "Securing Your GraphQL API",
    category: "Security",
    date: "Aug 30, 2024",
    description:
      "Deep dive into rate limiting, depth limits, and authentication patterns to protect your GraphQL endpoints from malicious queries.",
    tags: ["GraphQL", "Security", "API"],
    link: "/blogs/securing-graphql-api",
  },
  {
    id: 5,
    title: "Docker vs Podman in 2024",
    category: "DevOps",
    date: "Aug 12, 2024",
    description:
      "Comparing containerization tools for local development. Is rootless Podman ready to take over your workflow?",
    tags: ["Docker", "Podman", "Containerization"],
    link: "/blogs/docker-vs-podman",
  },
];

export default function BlogItems() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      {/* Featured Blog Post (Large) */}
      <article className="lg:col-span-2 glass-card-blogs rounded-xl p-8 flex flex-col justify-between group">
        <div>
          <div className="flex justify-between items-center mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm tracking-wider uppercase">
              {blogPosts[0].category}
            </span>
            <time className="font-label-sm text-label-sm text-outline">
              {blogPosts[0].date}
            </time>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-background group-hover:text-primary transition-colors mb-4">
            {blogPosts[0].title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
            {blogPosts[0].description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-2">
            {blogPosts[0].tags.map((tag, index) => (
              <span
                key={index}
                className="font-label-sm text-label-sm text-outline"
              >
                #{tag}
              </span>
            ))}
          </div>
          <Link
            className="flex items-center gap-2 text-primary font-label-md text-label-md group-hover:gap-4 transition-all"
            href={blogPosts[0].link}
          >
            Read Full Post
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </article>

      {/* Regular Blog Post 1 */}
      {blogPosts.slice(1).map((post) => (
        <article
          key={post.id}
          className="glass-card-blogs rounded-xl p-6 flex flex-col group"
        >
          <div className="h-48 w-full rounded-lg mb-6 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
              data-alt="A macro photograph of high-end server hardware with glowing blue LED strips illuminating the metallic surfaces. The shot is taken in a dark, atmospheric environment, emphasizing precision engineering and high-speed data transfer. The color palette is dominated by deep charcoal and electric blue, reflecting a technical and visionary aesthetic."
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuATNMH3pWDv2-MiV7cZCTwF-mWErdT2AIMuZfkrDcVQ2rhE1fpU26Z8r11bRX3bJM3gbnSrvQpTWfoaG1U0YMVPR6V6-K6ODBPX8f1xAjqHqxJ_j4nBtWBA4t0t-NZL7_GNTMQ6U5JRFGP7-wBZeEgKwLWKCl_MugbtFAySGftJKhsv4LSPIXGqmcu3PGuKJ3m1C38w3pVufmREorZA_fWOucDUG4yfEKGi0PSkHE-LYVRJLz9VhFb4uwBaNN4x3rK_g7JA-yMT42vU")`,
              }}
            ></div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-secondary font-label-sm text-label-sm tracking-widest uppercase">
              {post.category}
            </span>
            <time className="font-label-sm text-label-sm text-outline">
              {post.date}
            </time>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-background mb-3 group-hover:text-secondary transition-colors">
            {post.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
            {post.description}
          </p>
          <Link
            className="mt-auto flex items-center gap-2 text-secondary font-label-md text-label-md"
            href={post.link}
          >
            Read More{" "}
            <span className="material-symbols-outlined">north_east</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
