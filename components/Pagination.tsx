"use client";

import { BLOGS_PER_PAGE, usePosts } from "./PostContext";

const Pagination = () => {
    const data = usePosts();
    if (data?.loading) return;

    const totalBlogs = data?.count as number;
    const lastPage = Math.ceil(totalBlogs / BLOGS_PER_PAGE);

    return (
        <div className="w-full flex justify-center">
            <div className="join rounded-md flex gap-4">
                <button
                    onClick={data?.decreasePage}
                    className="join-item btn"
                    disabled={data?.pageNumber === 1}
                >
                    «
                </button>
                <button className="join-item btn text-lg">
                    Page {data?.pageNumber}
                </button>
                <button
                    onClick={data?.increasePage}
                    className="join-item btn"
                    disabled={data?.pageNumber === lastPage}
                >
                    »
                </button>
            </div>
        </div>
    );
};

export default Pagination;
