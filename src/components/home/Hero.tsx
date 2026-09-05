/**
 * @file Declares the Hero component and related components.
 */
import Image from "next/image";
import React from "react";

interface HeroProps {
    title?: string;
    subtitle?: string;
    image?: string;
}

export const Hero: React.FC<HeroProps> = (props) => {
    const { title, subtitle, image } = props;
    const heroImage = image || "/images/robot/wooden-warrior.jpg";

    return (
        <section className="bg-foreground relative isolate flex min-h-screen w-full items-center overflow-hidden px-6 py-32 text-background md:px-12 lg:px-20">
            <Image
                src={heroImage}
                alt="Grayson Robotics robot Wooden Warrior"
                fill
                priority
                className="-z-20 object-cover object-center"
                sizes="100vw"
            />
            <div className="bg-foreground/75 absolute inset-0 -z-10" />
            <div className="from-foreground via-foreground/50 absolute inset-0 -z-10 bg-gradient-to-r to-transparent" />

            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-3xl">
                    <p className="text-secondary mb-5 text-sm font-bold tracking-[0.28em] uppercase">
                        FRC Team 8100 · Grayson Robotics
                    </p>
                    <h1 className="text-accent max-w-2xl text-5xl leading-[0.95] font-black tracking-tight sm:text-7xl lg:text-8xl">
                        {title || "Build boldly. Compete fiercely."}
                    </h1>
                    <p className="text-background/85 mt-7 max-w-xl text-lg leading-8 md:text-xl">
                        {subtitle || "We are Grayson Robotics, a student-led team designing the future one robot at a time."}
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <a
                            href="/history"
                            className="bg-accent text-accent-foreground hover:bg-secondary inline-flex items-center rounded-md px-6 py-3 font-bold transition-colors"
                        >
                            Explore our story <span className="ml-3" aria-hidden="true">→</span>
                        </a>
                        <a
                            href="mailto:graysonfrc@gmail.com"
                            className="border-background/50 text-background hover:border-accent hover:text-accent inline-flex items-center rounded-md border px-6 py-3 font-bold transition-colors"
                        >
                            Get involved
                        </a>
                    </div>
                </div>

                <div className="border-background/30 mt-20 flex max-w-xl items-center gap-4 border-t pt-5 text-sm">
                    <span className="text-accent text-2xl font-black">2026</span>
                    <span className="text-background/70">Season project</span>
                    <span className="bg-secondary ml-auto h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                    <span className="text-background/70">Wooden Warrior</span>
                </div>
            </div>
        </section>
    );
};
