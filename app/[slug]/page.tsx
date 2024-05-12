import { BlogProps } from "@/types/types";
import fetchBlogBySlug from "@/utils/fetchBlogBySlug";

export default async function Blog({ params }: { params: { slug: string } }) {
    const data: BlogProps = await fetchBlogBySlug(params.slug);
    return <h1 className="text-3xl text-yellow-200">{data.slug}</h1>;
}
