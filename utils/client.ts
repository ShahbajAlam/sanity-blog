import { createClient } from "next-sanity";

const client = createClient({
    dataset: "production",
    projectId: "m1y4zy75",
    apiVersion: "2022-03-07",
    useCdn: false,
});

export default client;
