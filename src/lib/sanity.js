import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
   projectId: import.meta.env.VITE_PROJECT_ID,
   dataset: import.meta.env.VITE_DATASET,
   useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = source => {
   return builder.image(source);
};
