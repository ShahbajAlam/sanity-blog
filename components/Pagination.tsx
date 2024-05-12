import Link from "next/link";

const Pagination = ({ page, count }: { page: number; count: number }) => {
    const lastPage = Math.ceil(count / 10);

    return (
        <div className="w-full flex justify-center">
            <div className="join">
                <Link
                    href={`/?page=${page > 1 ? page - 1 : 1}`}
                    className={`join-item btn ${page === 1 ? "cursor-not-allowed" : ""}`}
                >
                    «
                </Link>
                <button className="join-item btn">Page {page}</button>
                <Link
                    href={`/?page=${page < lastPage ? page + 1 : lastPage}`}
                    className={`join-item btn ${page === lastPage ? "cursor-not-allowed" : ""}`}
                >
                    »
                </Link>
            </div>
        </div>
    );
};

export default Pagination;
