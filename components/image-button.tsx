import Image from "next/image";

export default function ImageButton({name, image, link}: {name: string, image: string, link: string}) {

    if (!name || !image || !link) {
        console.error(`Missing props for ImageButton: ${name}, ${image}, ${link}`);
        return null;
    }

    return (
        <a className="relative flex-item m-8 basis-96 group" href={link}>
            <h1 className='absolute z-40 bottom-4 right-4 text-center text-bold text-4xl text-zinc-200 dark:text-zinc-200'>{name}</h1>
            <div className='absolute z-30 bg-yellow-900 dark:bg-stone-700 opacity-20 w-full h-full group-hover:z-10 group-hover:opacity-50 group-hover:translate-x-10 group-hover:translate-y-10 transition-all'></div>
            <Image className='relative z-20 border-4 aspect-square border-orange-900 dark:border-stone-700 w-full group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all' src={image} alt={name} width={100} height={100} />
        </a>
    )
}