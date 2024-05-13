import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { BlogPreviewProps } from "@/types/types";

const BlogPreview = (props: BlogPreviewProps) => {
    return (
        <div className="flex flex-col gap-4 py-4 rounded-md">
            <div className="w-full aspect-video relative rounded-md overflow-hidden">
                <Image src={props.src} alt={props.alt} fill priority />
            </div>
            <div className="line-clamp-3">
                <PortableText value={props.content} />
            </div>
            <Link href={props.slug} className="btn btn-accent rounded-md">
                Read this blog
            </Link>
        </div>
    );
};

export default BlogPreview;
