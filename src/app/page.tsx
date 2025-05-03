import React from "react";
import Image from "next/image";

import { Header } from "../components/header";
import { Hero } from "../components/hero";

/**
 * @returns The root component of the application.
 */
const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
        </>
    );
};

export default Home;
