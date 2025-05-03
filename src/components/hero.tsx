/**
 * @file Declares the Hero component and related components.
 */
import React from "react";

export const Hero: React.FC = () => {
    return (
        <div className="top-0 z-10 w-full bg-secondary-light">
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold text-accent">Building Tomorrow&apos;s Engineers</h1>
                <p className="mt-4 text-lg text-primary w-1/2 text-center">
                    For Inspiration and Recognition of Science and Technology helps promote Science Technology,
                    Engineering and Mathematics throughout the Grayson cluster and surrounding community, while working
                    together to build a competitive robot.
                </p>
                <button className="mt-6 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
};
