"use client";

import { ThemeProps } from "@/types/types";
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const ThemeContext = createContext<ThemeProps>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof localStorage !== "undefined")
            return localStorage.getItem("blog-theme")
                ? (localStorage.getItem("blog-theme") as string)
                : "forest";
        return "forest";
    });

    const toggleTheme = () => {
        setTheme((theme) => (theme === "forest" ? "bumblebee" : "forest"));
    };

    useEffect(() => {
        localStorage.setItem("blog-theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
