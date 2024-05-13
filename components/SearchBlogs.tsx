"use client";

import { usePosts } from "./PostContext";
import { FormEvent, useState } from "react";

const SearchBlogs = () => {
    const data = usePosts();
    const [text, setText] = useState("");

    if (data?.loading) return;

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        if (!text) return;
        data?.setText(text);
        setText("");
        data?.setPageNumber(1);
    };

    return (
        <form
            className="flex gap-3 justify-between items-center px-6 py-4"
            onSubmit={handleSearch}
        >
            <input
                type="text"
                value={text}
                placeholder="Search Blogs..."
                onChange={(e) => setText(e.target.value)}
                className="input input-bordered w-full rounded-md"
            />
            <button type="submit" className="btn btn-accent rounded-md">
                Search
            </button>
        </form>
    );
};

export default SearchBlogs;
