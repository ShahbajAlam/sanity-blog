import client from "@/utils/client";
import { BlogProps } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    let query = "";
    const params = req.nextUrl.searchParams;
    const title = params.get("title");
    const page = Number(params.get("page"));

    if (!page && !title) {
        query = `*[_type == "blog"]{
        _createdAt, _id, _updatedAt, title,
        "slug" : slug.current, content,
        "img" : image.asset._ref
      } | order(_createdAt desc)`;
    }

    if (page && !title) {
        query = `*[_type == "blog"] | order(_createdAt desc) [${(page - 1) * 5}...${page * 5}]{
        _createdAt, _id, _updatedAt, title,
        "slug" : slug.current, content,
        "img" : image.asset._ref
      }`;
    }

    if (!page && title) {
        query = `*[_type == "blog" && title match "${title}"]{
        _createdAt, _id, _updatedAt, title,
        "slug" : slug.current, content,
        "img" : image.asset._ref
      } | order(_createdAt desc)`;
    }

    if (page && title) {
        query = `*[_type == "blog" && title match "${title}"] | order(_createdAt desc) [${(page - 1) * 5}...${page * 5}]{
        _createdAt, _id, _updatedAt, title,
        "slug" : slug.current, content,
        "img" : image.asset._ref
      }`;
    }

    const data: BlogProps[] = await client.fetch(
        query,
        {},
        {
            next: {
                revalidate: 0,
            },
        }
    );
    const count = await client.fetch(`count(*[_type == "blog"])`);
    return NextResponse.json({ data, count });
}
