import Image from "next/image";
import type { ReactNode } from "react";

interface SectionProps {
    title: string;
    eyebrow?: string;
    children: ReactNode;
    image?: string;
    imageAlt?: string;
    imageSide?: "left" | "right";
    variant?: "light" | "dark" | "accent";
    className?: string;
}

const variants = {
    light: {
        section: "bg-background text-foreground",
        eyebrow: "text-secondary",
    },
    dark: {
        section: "bg-foreground text-background",
        eyebrow: "text-accent",
    },
    accent: {
        section: "bg-accent text-accent-foreground",
        eyebrow: "text-secondary",
    },
};

export default function Section({
    title,
    eyebrow,
    children,
    image,
    imageAlt = "",
    imageSide = "right",
    variant = "light",
    className = "",
}: SectionProps) {
    const colors = variants[variant];

    return (
        <section className={`w-full px-6 py-20 md:px-12 lg:py-28 ${colors.section} ${className}`}>
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className={imageSide === "left" ? "lg:order-2" : "lg:order-1"}>
                    {eyebrow && (
                        <p className={`mb-3 text-sm font-semibold tracking-widest uppercase ${colors.eyebrow}`}>
                            {eyebrow}
                        </p>
                    )}

                    <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>

                    <div className="space-y-4 text-base leading-7 opacity-90 md:text-lg">{children}</div>
                </div>

                {image && (
                    <div className={imageSide === "left" ? "lg:order-1" : "lg:order-2"}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
