import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "5sxz69nv",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// RUN THIS to add exceptions for localhost 3000 CORS policy
// sanity cors add https://localhost:3003

export default client;
