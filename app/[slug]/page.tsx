import Image from "next/image";
import client from "@/utils/client";
import urlFor from "@/utils/imageBuilder";
import { PortableText } from "next-sanity";
import { BlogProps } from "@/types/types";
import Author from "@/components/Author";
import fetchBlogBySlug from "@/utils/fetchBlogBySlug";
import { PortableTextComponents } from "@portabletext/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ImageComponents: PortableTextComponents = {
    types: {
        image: ({ value }) => (
            <img src={urlFor(value.asset._ref).url()} className="skeleton" />
        ),
        code: (props) => (
            <SyntaxHighlighter
                language={props.value.language}
                style={darcula}
                wrapLongLines
            >
                {props.value.code}
            </SyntaxHighlighter>
        ),
    },
};

export async function generateStaticParams() {
    const query = `*[_type == "blog"]{_createdAt, _id, _updatedAt, title,
    "slug" : slug.current, content,
    "img" : image.asset._ref
    }`;
    const data = (await client.fetch(
        query,
        {},
        { next: { revalidate: 0 } }
    )) as BlogProps[];

    return data.map((i) => ({
        slug: i.slug,
    }));
}

export default async function Blog({ params }: { params: { slug: string } }) {
    const data: BlogProps = await fetchBlogBySlug(params.slug);
    const postedOn = new Date(data._createdAt).toDateString();

    return (
        <>
            <div className="px-6 py-4 md:w-[70%] md:mx-auto lg:max-w-[900px]">
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
                <div className="w-full aspect-video relative rounded-md overflow-hidden my-6 lg:w-[60%] lg:mx-auto">
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

            <div className="px-6 divider divider-accent md:w-[70%] md:mx-auto" />

            <div className="px-6 py-4 md:w-[70%] md:mx-auto">
                <Author />
            </div>
        </>
    );
}
