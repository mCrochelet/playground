import { getHomePage } from "../api/get-page";
import Navigation from "../components/navigation";

export default async function PersonLayout({ children, params }: { children: React.ReactNode, params: { person: string } }) {

    // const anchorLinks = [
    //     { name: "Home", link: '#home' },
    //     { name: "Skills", link: "#skills" },
    //     { name: "Timeline", link: "#timeline" },
    //     { name: "Mentoring", link: "#mentoring" },
    //     { name: "Photography", link: "#photography" },
    // ];

    const { person } = params;
    const page = await getHomePage({ person });

    // console.log(page);

    return (
        <section className="min-h-screen flex flex-col">
            <Navigation left={person} />
            {children}
        </section>
    )
}
