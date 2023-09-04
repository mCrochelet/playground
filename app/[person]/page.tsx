import imageUrlBuilder from '@sanity/image-url';
import { SanityClient } from '@/sanity/lib/client';
import { getHomePage } from '../api/get-page';
import Image from "next/image";

export default async function HomePage({ params }: { params: { person: string } }) {

    const { person } = params;
    const page: any[] = await getHomePage({ person });

    console.log(page);

    const builder = imageUrlBuilder(SanityClient);
    const imageURL = builder.image(page[0].image).url();
    return (
        <main className="flex place-self-center flex-col">
            <div className="relative flex justify-center place-items-center -left-10">
                <Image className="z-30 h-[66vh] w-fit" src={imageURL} alt={'hero image'} width={100} height={100} />
                <div className="z-10 h-[66vh] w-[66vh] bg-customLightBrown absolute top-16 -left-10 rounded-full"></div>
            </div>
        </main>
    )
}