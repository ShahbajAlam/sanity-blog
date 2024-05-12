import Link from "next/link";
import ToggleThemeButton from "./ToggleThemeButton";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4">
            <Link href="/">
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
