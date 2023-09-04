import Link from "next/link";
import CustomLink from "./custom-link";

export default function Navigation({ left, right }: { left: string, right?: { name: string, link: string }[] }) {

    if (!left) {
        console.error(`Missing left prop for navigation`);
        return null;
    }

    return (
        <nav key={`nav-${left}`} id="header" className="flex justify-between w-full p-4">
            <CustomLink className="text-xl font-bold" href={'/'}>{left}</CustomLink>

            {right && <div className="text-lg font-medium flex gap-2">
                {right.map(({ name, link }) => (
                    
                    <CustomLink key={name} href={link}>{name}</CustomLink>
                ))}
            </div>}
        </nav>
    )
}