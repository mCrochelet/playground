import Link from "next/link";


export default function CustomLink({ href, children, className, invertTheme }: { href: string, children?: React.ReactNode, className?: string, invertTheme?: boolean }) {

    const color = invertTheme ? "dark:bg-darkBackground bg-lightBackground" : "bg-darkBackground dark:bg-lightBackground";
    return (
        // todo: add ellipsis to line animation (wave-like)
        <Link href={href} className={`group relative hover:opacity-60 ${className}`}>
            {children}
            <span className={`absolute w-4 h-[2px] bottom-0 left-[1px] mt-1 group-hover:w-full transition-all ${color}`}></span>
        </Link>
    )
}