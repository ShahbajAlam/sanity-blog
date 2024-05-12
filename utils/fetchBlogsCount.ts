"use server";

import client from "./client";

export default async function fetchBlogsCount() {
    const query = `count(*[_type == "blog"])`;
    const count = client.fetch(query);
    return count;
}
