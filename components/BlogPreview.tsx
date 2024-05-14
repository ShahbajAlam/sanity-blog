import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { BlogPreviewProps } from "@/types/types";

const BlogPreview = (props: BlogPreviewProps) => {
    return (
        <div className="flex flex-col justify-between gap-4 py-4 rounded-md">
            <div className="w-full aspect-video relative rounded-md overflow-hidden">
                <Image
                    src={props.src}
                    alt={props.alt}
                    fill
                    priority
                    className="skeleton"
                />
            </div>
            <h2 className="text-xl font-semibold line-clamp-2">{props.title}</h2>
            <div className="line-clamp-3 text-gray-300">
                <PortableText value={props.content} />
            </div>
            <Link
                href={props.slug}
                className="btn btn-accent rounded-md text-[1rem]"
            >
                READ THIS BLOG
            </Link>
        </div>
    );
};

export default BlogPreview;
