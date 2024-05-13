import { BlogProps } from "@/types/types";
import client from "@/utils/client";
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
      }`;
    }

    if (page && !title) {
        query = `*[_type == "blog"][${(page - 1) * 2}...${page * 2}]{
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
      }`;
    }

    if (page && title) {
        query = `*[_type == "blog" && title match "${title}"][${(page - 1) * 2}...${page * 2}]{
        _createdAt, _id, _updatedAt, title,
        "slug" : slug.current, content,
        "img" : image.asset._ref
      }`;
    }

    const data: BlogProps[] = await client.fetch(query);
    const count = await client.fetch(`count(*[_type == "blog"])`);
    return NextResponse.json({ data, count });
}
