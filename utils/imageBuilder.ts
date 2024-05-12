import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
    dataset: "production",
    projectId: process.env.PROJECT_ID as string,
});

const urlFor = (source: string) => builder.image(source);

export default urlFor;
