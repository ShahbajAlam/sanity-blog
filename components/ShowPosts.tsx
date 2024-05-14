"use client";

import Loading from "./Loading";
import Pagination from "./Pagination";
import BlogPreview from "./BlogPreview";
import urlFor from "@/utils/imageBuilder";
import { BLOGS_PER_PAGE, usePosts } from "./PostContext";

const ShowPosts = () => {
    const data = usePosts();
    if (data?.loading) return <Loading />;

    const text = data?.text;
    const count = data?.count as number;

    if (data?.blogs.length === 0)
        return (
            <div className="px-6 py-4 md:w-[70%] md:mx-auto lg:grid-cols-2 lg:max-w-[900px]">
                <h1 className="font-bold text-center text-3xl my-10">
                    No blogs found &#128533;
                </h1>
            </div>
        );

    return (
        <>
            <div className="px-6 py-4 grid gap-4 grid-cols-1 md:w-[70%] md:mx-auto lg:grid-cols-2 lg:max-w-[900px]">
                {data?.blogs.map((blog) => (
                    <BlogPreview
                        key={blog._id}
                        alt={blog.slug}
                        content={blog.content}
                        slug={blog.slug}
                        title={blog.title}
                        src={urlFor(blog.img).url()}
                    />
                ))}
            </div>
            {!text && count > BLOGS_PER_PAGE && <Pagination />}
        </>
    );
};

export default ShowPosts;
