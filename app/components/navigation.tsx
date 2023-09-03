import Link from "next/link";

export default function Navigation({ left, right }: { left: string, right?: { name: string, link: string }[] }) {

    if (!left) {
        console.error(`Missing left prop for navigation`);
        return null;
    }

    return (
        <nav key={`nav-${left}`} className="flex justify-between w-full p-4">
            <Link className="hover:opacity-60 cursor-pointer text-xl font-bold" href={'/'}>{left}</Link>
            {right && <div className="text-lg font-medium flex gap-2">

                {right.map(({ name, link }) => (
                    <Link key={name} href={link} className="hover:opacity-60 cursor-pointer ">{name}</Link>
                )
                )}
            </div>}
        </nav>
    )
}