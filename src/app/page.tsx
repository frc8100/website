/**
 * @file Declares the Next.js root component for the application.
 */
import React from "react";
// import Image from "next/image";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/home/Hero";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
// export const instant = false;

/**
 * @returns The root component of the application.
 */
const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <Footer />
        </>
    );
};

export default Home;
