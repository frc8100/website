/**
 * @file Declares the Footer component and related components.
 */
import React from "react";

/**
 * @returns The footer of the website.
 */
export const Footer: React.FC = () => {
    return (
        <div className="fixed bottom-0 z-10 flex h-16 w-full items-center justify-between bg-secondary p-4 shadow-md">
            <div className="flex items-center">
                <p className="text-sm font-bold text-accent">Grayson Robotics</p>
            </div>
            <div className="flex items-center">
                <p className="text-sm text-primary">MIT License</p>
            </div>
        </div>
    );
};
