import Image from "next/image";
const coded = "</>";

const Author = () => {
    return (
        <>
            <h2 className="text-xl font-semibold text-center">
                About the author
            </h2>
            <Image
                src="/dp.jpg"
                width={80}
                height={80}
                className="rounded-full mx-auto my-3"
                alt="author image"
            />
            <p className="text-justify">
                I am Shahbaj Alam, a passionate web developer with extensive
                skills in HTML5, Tailwind CSS, JavaScript, React, NextJS,
                MongoDB. I also love to write articles related to web
                development. Happy Coding{" "}
                <span className="animate-pulse">&#128525;</span>
            </p>
        </>
    );
};

export default Author;
