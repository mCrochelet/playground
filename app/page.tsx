import ImageButton from "@/app/components/image-button";
import getLandingPages from "./api/get-page";
import imageUrlBuilder from '@sanity/image-url';
import { SanityClient } from '@/sanity/lib/client';

export default async function Home() {

  const landingPages = await getLandingPages();
  const builder = imageUrlBuilder(SanityClient);

  // resolve image URLs for all pages
  const pages = landingPages.map((page) => {

    let imageURL: string;

    if (!page.image) {
      imageURL = '/loading.gif'
    }
    else {
      imageURL = builder.image(page.image).url();
    }

    const link = `/${page.title.toLowerCase()}`

    return {
      ...page,
      link,
      imageURL
    }
  });


  return (
    <main className="flex flex-wrap min-h-screen p-24 place-content-center place-items-center">
      {
        pages.map((page) => (
          <ImageButton key="page.link" name={page.title} link={page.link} image={page.imageURL} />
        ))
      }
    </main>
  )
}
