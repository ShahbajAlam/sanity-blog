"use client";

import { BlogProps, PostProps } from "@/types/types";
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

export const BLOGS_PER_PAGE = 2;
const PostContext = createContext<PostProps>(null);

const PostProvider = ({ children }: { children: ReactNode }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [blogs, setBlogs] = useState<BlogProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    const increasePage = () => {
        const lastPage = Math.ceil(count / BLOGS_PER_PAGE);
        setPageNumber((i) => {
            if (i === lastPage) return i;
            return i + 1;
        });
    };

    const decreasePage = () => {
        setPageNumber((i) => {
            if (i === 1) return i;
            return i - 1;
        });
    };

    useEffect(() => {
        setLoading(true);
        const fetchBlogs = async () => {
            const res = await fetch(
                `/api/blogs?page=${pageNumber}&title=${text}`
            );
            const { data, count } = await res.json();
            setBlogs(data);
            setCount(count);
            setLoading(false);
        };
        fetchBlogs();
    }, [pageNumber, text]);

    return (
        <PostContext.Provider
            value={{
                pageNumber,
                setPageNumber,
                increasePage,
                decreasePage,
                loading,
                blogs,
                text,
                setText,
                count,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

const usePosts = () => useContext(PostContext);

export { PostProvider, usePosts };
