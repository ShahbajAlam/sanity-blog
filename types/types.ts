import { Dispatch, SetStateAction } from "react";

export type BlogProps = {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    slug: string;
    img: string;
    title: string;
    content: any;
};

export type PostProps = {
    pageNumber: number;
    setPageNumber: any;
    loading: boolean;
    blogs: BlogProps[];
    setText: any;
    increasePage: any;
    decreasePage: any;
    count: number;
    text: string;
} | null;

export type ThemeProps = {
    theme: string;
    toggleTheme: () => void;
} | null;

export type BlogPreviewProps = {
    src: string;
    alt: string;
    content: any;
    slug: string;
    title: string;
};
