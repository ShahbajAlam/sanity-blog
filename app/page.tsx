import urlFor from "@/utils/imageBuilder";
import { BlogProps } from "@/types/types";
import fetchBlogs from "@/utils/fetchBlogs";
import Pagination from "@/components/Pagination";
import BlogPreview from "@/components/BlogPreview";
import SearchBlogs from "@/components/SearchBlogs";
import fetchBlogsCount from "@/utils/fetchBlogsCount";

export default async function Home({
    searchParams,
}: {
    searchParams?: {
        page?: number;
    };
}) {
    const page = Number(searchParams?.page) || 1;

    const data: BlogProps[] = await fetchBlogs(page);
    const count: number = await fetchBlogsCount();

    return (
        <>
            <SearchBlogs />
            <div className="px-6 py-4 grid grid-cols-1">
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
            {count > 10 && <Pagination page={page} count={count} />}
        </>
    );
}
