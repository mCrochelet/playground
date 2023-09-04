import { getHomePage } from "../api/get-page";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

export default async function PersonLayout({ children, params }: { children: React.ReactNode, params: { person: string } }) {

    // todo: build anchor links 
    // const anchorLinks = [
    //     { name: "Home", link: '#home' },
    //     { name: "Skills", link: "#skills" },
    //     { name: "Timeline", link: "#timeline" },
    //     { name: "Mentoring", link: "#mentoring" },
    //     { name: "Photography", link: "#photography" },
    // ];

    const { person } = params;
    
    return (
        <section className="flex flex-col max-w-full">
            <Navigation left={person} />
            {children}
            <Footer />
        </section>
    )
}
