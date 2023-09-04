import CustomLink from "./custom-link";

export default function Footer() {


    const currentYear = new Date().getFullYear();
    return (
        // authorship information
        // copyright information
        // contact information
        // sitemap
        // back to top links
        // related documents
        <footer key="footer" className="z-50 flex w-full flex-col relative overflow-hidden -top-3">
            <svg className="w-full scale-300 relative z-50" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
            <div className="relative z-60 flex flex-row justify-between bg-darkBackground dark:bg-lightBackground p-4 text-lightBackground dark:text-darkBackground">
                <div className="flex flex-col opacity-100">
                    <p>Handcrafted by Martin Crochelet</p>
                    <p>Copyright 2023{currentYear === 2023 ? undefined : ` - ${currentYear}`}</p>
                    <p>Reach out <CustomLink href="mailto:martin@crochelet.net" invertTheme>here</CustomLink> for more information</p>
                </div>
                <div className="flex flex-col opacity-100">
                    <CustomLink href="/sitemap" invertTheme>Sitemap</CustomLink>
                    <CustomLink href="#header" invertTheme>Back to top</CustomLink>
                </div>
            </div>
        </footer>
    )
}