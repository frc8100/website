/**
 * @file Declares the Footer component and related components.
 */
import React from "react";

/**
 * @returns The footer of the website.
 */
export const Footer: React.FC = () => {
    return (
        <div className="bg-secondary fixed bottom-0 z-10 flex h-16 w-full items-center justify-between p-4 shadow-md">
            <div className="flex items-center">
                <p className="text-accent text-sm font-bold">Grayson Robotics</p>
            </div>
            <div className="flex items-center">
                <p className="text-primary text-sm">MIT License</p>
            </div>
        </div>
    );
};
