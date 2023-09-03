import { SanityClient } from "@/sanity/lib/client";
import { LandingPage } from "@/sanity/schemas/types";

export async function getLandingPages() {

    const posts: [LandingPage] = await SanityClient.fetch('*[_type == "landingPage"]')
    return posts
};

export async function getHomePage({person}: {person: string}) {

    const posts = await SanityClient.fetch('*[_type == "page"]')
    return posts
};