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
                <NavItem text="The Blue Alliance" url="https://www.thebluealliance.com/team/8100" openInNewTab={true} />
                <NavItem text="GitHub (code)" url="https://github.com/frc8100" openInNewTab={true} />
                <NavItem text="Codeberg (manuals)" url="https://codeberg.org/Grayson_Robotics" openInNewTab={true} />
            </div>
        </div>
    );
};
