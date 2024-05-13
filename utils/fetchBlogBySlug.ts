"use server";

import client from "./client";

export default async function fetchBlogBySlug(slug: string) {
    const query = `*[_type == "blog" && slug.current == "${slug}"][0]{_createdAt, _id, _updatedAt, title,
    "slug" : slug.current, content,
    "img" : image.asset._ref
    }`;
    const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
    return data;
}
