import { SanityClient } from "@/sanity/lib/client";
import { LandingPage } from "@/sanity/schemas/types";

export default async function getLandingPages() {

    const posts: [LandingPage] = await SanityClient.fetch('*[_type == "landingPage"]')
    return posts
};