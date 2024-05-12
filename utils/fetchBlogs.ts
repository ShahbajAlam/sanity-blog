"use server";

import client from "./client";
import { BlogProps } from "@/types/types";
import { revalidatePath } from "next/cache";

const fetchBlogs = async (page: number) => {
    const query = `*[_type == "blog"][${(page - 1) * 10}...${page * 10}]{
    _createdAt, _id, _updatedAt, title,
    "slug" : slug.current, content,
    "img" : image.asset._ref
  }`;

    const data: BlogProps[] = await client.fetch(query);
    revalidatePath("/", "page");
    return data;
};

export default fetchBlogs;
