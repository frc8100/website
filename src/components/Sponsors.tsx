import Image from "next/image";

interface Sponsor {
    name: string;
    logo: string;
    href?: string;
}

interface SponsorsProps {
    sponsors: Sponsor[];
}

// TODO: Move to seperate
const defaultSponsors: Sponsor[] = [
    {
        name: "AndyMark",
        logo: "/images/sponsors/andymark.png",
    },
    {
        name: "Gene Haas Foundation",
        logo: "/images/sponsors/gene-haas.png",
    },
    {
        name: "Nordson",
        logo: "/images/sponsors/nordson.png",
    },
    {
        name: "REV Robotics",
        logo: "/images/sponsors/rev.png",
    },
    // {
    //     name: "Riverside Pizza",
    //     logo: "/images/sponsors/riverside-pizza.jpg",
    // },
    {
        name: "Gwinnett County Public Schools",
        logo: "/images/sponsors/gcps.png",
    },
];

export const Sponsors: React.FC<SponsorsProps> = (props: SponsorsProps) => {
    const sponsors = defaultSponsors;
    
    return (
        <section className="w-full bg-zinc-100 px-6 py-20 md:px-12 lg:py-28" id="sponsors">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold tracking-widest text-blue-600 uppercase">Our Supporters</p>

                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">Built With Support</h2>

                    <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
                        Our sponsors help make it possible for students to build, compete, learn, and grow.
                    </p>
                </div>

                <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-3 lg:grid-cols-5">
                    {sponsors.map((sponsor) => {
                        const content = (
                            <div className="flex h-28 items-center justify-center rounded-xl bg-white p-6 transition hover:scale-[1.02] hover:shadow-md">
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    width={180}
                                    height={80}
                                    className="max-h-16 w-auto max-w-full object-contain"
                                />
                            </div>
                        );

                        return sponsor.href ? (
                            <a
                                key={sponsor.name}
                                href={sponsor.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${sponsor.name}`}
                            >
                                {content}
                            </a>
                        ) : (
                            <div key={sponsor.name}>{content}</div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
