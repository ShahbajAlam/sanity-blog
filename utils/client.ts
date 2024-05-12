import { createClient } from "next-sanity";

const client = createClient({
    dataset: "production",
    projectId: process.env.PROJECT_ID,
    apiVersion: "2021-10-04",
    useCdn: false,
});

export default client;
