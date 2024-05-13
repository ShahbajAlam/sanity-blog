import Image from "next/image";
import urlFor from "@/utils/imageBuilder";
import { PortableText } from "next-sanity";
import { BlogProps } from "@/types/types";
import fetchBlogBySlug from "@/utils/fetchBlogBySlug";

export default async function Blog({ params }: { params: { slug: string } }) {
    const data: BlogProps = await fetchBlogBySlug(params.slug);

    return (
        <div className="px-6 py-4">
            <h1 className="text-3xl font-bold text-center mt-3">
                {data.title}
            </h1>
            <div className="w-full aspect-video relative rounded-md overflow-hidden my-6">
                <Image
                    src={urlFor(data.img).url()}
                    alt={data.slug}
                    fill
                    priority
                />
            </div>
            <div className="prose">
                <PortableText value={data.content} />
            </div>
        </div>
    );
}
