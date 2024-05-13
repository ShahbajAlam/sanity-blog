"use server";

import client from "./client";
import { BlogProps } from "@/types/types";
import { revalidatePath } from "next/cache";

const fetchBlogs = async (title: string, page: number) => {
    let query = "";
    if (!title) {
        query = `*[_type == "blog"][${(page - 1) * 2}...${page * 2}]{
        _createdAt, _id, _updatedAt, title,
        "slug" : slug.current, content,
        "img" : image.asset._ref
      }`;
    } else {
        query = `*[_type == "blog" && title match "${title}"][${(page - 1) * 2}...${page * 2}]{
        _createdAt, _id, _updatedAt, title,
        "slug" : slug.current, content,
        "img" : image.asset._ref
      }`;
    }

    const data: BlogProps[] = await client.fetch(query);
    revalidatePath("/", "page");
    return data;
};

export default fetchBlogs;
