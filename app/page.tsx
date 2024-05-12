import fetchBlogs from "@/utils/fetchBlogs";
import SearchBlogs from "@/components/SearchBlogs";
import BlogPreview from "@/components/BlogPreview";
import urlFor from "@/utils/imageBuilder";
import { BlogProps } from "@/types/types";

export default async function Home() {
    const data: BlogProps[] = await fetchBlogs();
    return (
        <>
            <SearchBlogs />
            <div className="px-6 py-4">
                {data.map((blog) => (
                    <BlogPreview
                        key={blog._id}
                        content={blog.content}
                        alt={blog.slug}
                        src={urlFor(blog.img).url()}
                        slug={blog.slug}
                    />
                ))}
            </div>
        </>
    );
}
