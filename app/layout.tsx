import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import { PostProvider } from "@/components/PostContext";
import { ThemeProvider } from "@/components/ThemeContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shahbaj Alam | Blog",
    description: "A tech blog for developers",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <ThemeProvider>
                    <PostProvider>
                        <Navbar />
                        {children}
                    </PostProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
