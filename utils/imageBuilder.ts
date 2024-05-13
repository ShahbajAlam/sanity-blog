import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
    dataset: "production",
    projectId: "m1y4zy75",
});

const urlFor = (source: string) => builder.image(source);

export default urlFor;
