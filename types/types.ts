export type BlogProps = {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    slug: string;
    img: string;
    title: string;
    content: any;
};

export type ThemeProps = {
    theme: string;
    toggleTheme: () => void;
} | null;

export type BlogPreviewProps = {
    src: string;
    alt: string;
    content: any;
    slug: string;
};
