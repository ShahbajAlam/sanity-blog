import Image from "next/image";
import urlFor from "@/utils/imageBuilder";
import { PortableText } from "next-sanity";
import { BlogProps } from "@/types/types";
import Author from "@/components/Author";
import fetchBlogBySlug from "@/utils/fetchBlogBySlug";
import { PortableTextComponents } from "@portabletext/react";

const ImageComponents: PortableTextComponents = {
    types: {
        image: ({ value }) => (
            <img src={urlFor(value.asset._ref).url()} className="skeleton" />
        ),
    },
};

export default async function Blog({ params }: { params: { slug: string } }) {
    const data: BlogProps = await fetchBlogBySlug(params.slug);
    const postedOn = new Date(data._createdAt).toDateString();

    return (
        <>
            <div className="px-6 py-4">
                <h1 className="text-3xl font-bold text-center my-4">
                    {data.title}
                </h1>

                <div className="divider divider-accent" />

                <p>
                    Post by -{" "}
                    <a
                        href="https://shahbajalam-portfolio.vercel.app/"
                        target="_blank"
                        className="text-blue-500"
                    >
                        Shahbaj Alam
                    </a>
                </p>
                <p>Posted on - {postedOn}</p>
                <div className="w-full aspect-video relative rounded-md overflow-hidden my-6">
                    <Image
                        src={urlFor(data.img).url()}
                        alt={data.slug}
                        fill
                        priority
                        className="skeleton"
                    />
                </div>
                <div className="prose">
                    <PortableText
                        value={data.content}
                        components={ImageComponents}
                    />
                </div>
            </div>

            <div className="px-6 divider divider-accent" />

            <div className="px-6 py-4">
                <Author />
            </div>
        </>
    );
}
