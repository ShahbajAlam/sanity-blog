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

    return (
        <>
            {data?.blogs.map((blog) => (
                <BlogPreview
                    key={blog._id}
                    alt={blog.slug}
                    content={blog.content}
                    slug={blog.slug}
                    src={urlFor(blog.img).url()}
                />
            ))}
            {!text && count > BLOGS_PER_PAGE && <Pagination />}
        </>
    );
};

export default ShowPosts;
