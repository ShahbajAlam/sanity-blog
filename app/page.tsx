import ShowPosts from "@/components/ShowPosts";
import SearchBlogs from "@/components/SearchBlogs";

export default async function Home() {
    return (
        <>
            <SearchBlogs />
            <div className="px-6 py-4 grid grid-cols-1">
                <ShowPosts />
            </div>
        </>
    );
}
