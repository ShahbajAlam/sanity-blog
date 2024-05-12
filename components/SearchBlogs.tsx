const SearchBlogs = () => {
    return (
        <div className="flex gap-3 justify-between items-center px-6 py-4">
            <input
                type="text"
                placeholder="Search Blogs..."
                className="input input-bordered w-full rounded-md"
            />
            <button className="btn btn-accent rounded-md">Search</button>
        </div>
    );
};

export default SearchBlogs;
