/**
 * @file Declares the Hero component and related components.
 */
import React from "react";

export const Hero: React.FC = () => {
    return (
        <div className="bg-foreground top-0 z-10 flex h-screen w-full flex-col items-center justify-center">
            <h1 className="text-accent text-6xl font-bold">Grayson Robotics</h1>
            {/* <p className="text-secondary mt-4 w-1/2 text-center text-lg">placeholder slogan</p> */}
        </div>
    );
};
