/**
 * @file Declares the Next.js root component for the application.
 */
import React from "react";
// import Image from "next/image";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";

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
