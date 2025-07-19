/**
 * @file Declares the Footer component and related components.
 */
import React from "react";
import { NavItem } from "./header";

/**
 * @returns The footer of the website.
 */
export const Footer: React.FC = () => {
    return (
        <div className="bg-primary fixed bottom-0 z-10 flex h-16 w-full items-center justify-between p-4 shadow-md">
            <div className="flex items-center">
                <p className="text-accent text-sm font-bold">Grayson Robotics</p>
            </div>
            <div className="flex items-center">
                <NavItem text="GitHub" url="https://github.com/frc8100/website" />
            </div>
        </div>
    );
};
