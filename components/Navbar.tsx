"use client";

import Link from "next/link";
import { usePosts } from "./PostContext";
import ToggleThemeButton from "./ToggleThemeButton";

const Navbar = () => {
    const data = usePosts();
    return (
        <nav className="flex justify-between items-center px-6 py-4 md:w-[70%] md:mx-auto md:py-6 lg:max-w-[900px] lg:py-4">
            <Link
                href="/"
                onClick={() => {
                    data?.setText("");
                    data?.setPageNumber(1);
                }}
            >
                <h2 className="text-4xl font-bold">
                    Dev
                    <span className="text-blue-600 dark:text-blue-600">
                        Blog
                    </span>
                </h2>
            </Link>
            <ToggleThemeButton />
        </nav>
    );
};

export default Navbar;
