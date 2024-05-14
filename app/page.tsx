import ShowPosts from "@/components/ShowPosts";
import SearchBlogs from "@/components/SearchBlogs";

export default async function Home() {
    return (
        <>
            <SearchBlogs />
            <ShowPosts />
        </>
    );
}
