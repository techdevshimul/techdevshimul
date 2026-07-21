import BlogItems from "@/components/blogs/BlogItems";
import BlogsHeader from "@/components/blogs/BlogsHeader";
import Newsletter from "@/components/blogs/Newsletter";

export default function Blogs() {
  return (
    <main className="pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <BlogsHeader />
      <BlogItems />
      <Newsletter />
    </main>
  );
}
