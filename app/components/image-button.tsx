import Image from "next/image";
import Link from "next/link";

export default function ImageButton({ name, image, link }: { name: string, image: string, link: string }) {

    if (!name || !image || !link) {
        console.error(`Missing props for ImageButton: ${name}, ${image}, ${link}`);
        return null;
    }

    return (
        <Link className="relative flex-item m-8 basis-96 group" href={link}>
            <h1 className='absolute z-40 bottom-4 right-4 text-center text-bold text-4xl'>{name}</h1>
            <div className='absolute z-10 bg-customBrown dark:bg-customLightBrown opacity-0 w-full h-full group-hover:opacity-50 group-hover:translate-x-10 group-hover:translate-y-10 transition-all'></div>
            <Image className='relative z-20 border-4 aspect-square border-customBrown dark:border-customLightBrown w-full group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all' src={image} alt={name} width={100} height={100} />
        </Link>
    )
}