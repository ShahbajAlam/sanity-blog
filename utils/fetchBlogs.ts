"use server";

import client from "./client";
import { BlogProps } from "@/types/types";
import { revalidatePath } from "next/cache";

const query = `*[_type == "blog"]{
  _createdAt, _id, _updatedAt, title,
    "slug" : slug.current, content,
    "img" : image.asset._ref
}`;

const fetchBlogs = async () => {
    const data: BlogProps[] = await client.fetch(query);
    revalidatePath("/", "page");
    return data;
};

export default fetchBlogs;
