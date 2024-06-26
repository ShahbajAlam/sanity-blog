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
        data?.setPageNumber(1);
        setText("");
    };

    return (
        <form
            className="flex gap-3 justify-between items-center px-6 py-4 md:w-[70%] md:mx-auto lg:max-w-[900px]"
            onSubmit={handleSearch}
        >
            <input
                type="text"
                value={text}
                placeholder="Search by title or content..."
                onChange={(e) => setText(e.target.value)}
                className="input input-bordered w-full rounded-md"
            />
            <button
                type="submit"
                className="btn btn-accent rounded-md text-[1rem] active:hover:scale-[0.99] active:focus:scale-[0.99]"
            >
                SEARCH
            </button>
        </form>
    );
};

export default SearchBlogs;
