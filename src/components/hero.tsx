/**
 * @file Declares the Hero component and related components.
 */
import React from "react";

export const Hero: React.FC = () => {
    return (
        <div className="bg-secondary-light top-0 z-10 flex h-screen w-full flex-col items-center justify-center">
            <h1 className="text-accent text-4xl font-bold">Building Tomorrow&apos;s Engineers</h1>
            <p className="text-primary mt-4 w-1/2 text-center text-lg">
                For Inspiration and Recognition of Science and Technology helps promote Science Technology, Engineering
                and Mathematics throughout the Grayson cluster and surrounding community, while working together to
                build a competitive robot.
            </p>
            <button className="hover:bg-accent bg-accent mt-6 rounded-lg px-4 py-2 text-white transition-all duration-300">
                Get Started
            </button>
        </div>
    );
};
