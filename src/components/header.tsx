/**
 * @file Declares the Header component and related components.
 */
import React from "react";

interface NavItemProps {
    /**
     * The text to display for the navigation item.
     */
    text: string;

    /**
     * The URL to navigate to when the item is clicked.
     */
    url: string;

    /**
     * Whether the navigation item is active.
     */
    active?: boolean;

    openInNewTab?: boolean;
}

/**
 * @returns An individual navigation item.
 * @param props -
 */
export const NavItem: React.FC<NavItemProps> = (props) => {
    const { text, url, active } = props;

    const { openInNewTab } = props;

    return (
        <a href={url} target={openInNewTab ? "_blank" : undefined} rel="noopener noreferrer" className="text-secondary hover:text-accent mr-6 transition-all duration-300">
            {text} {openInNewTab && "↗"}
        </a>
    );
};

interface LogoProps {
    /**
     * The URL to the logo image.
     */
    logoUrl: string;

    /**
     * The name of the team.
     */
    teamName: string;

    /**
     * The team number.
     */
    teamNumber: number;
}

/**
 * @returns A logo with the team icon, the name of the team, and team number.
 * @param props - props
 */
const Logo: React.FC<LogoProps> = (props) => {
    const { logoUrl, teamName, teamNumber } = props;

    return (
        <div className="flex items-center">
            <img src={logoUrl} alt="Logo" className="mr-2 h-12 w-12 rounded-lg" />
            <div>
                <h1 className="text-accent text-xl font-bold text-shadow-md">{teamName}</h1>
                <p className="text-secondary text-sm text-shadow-md">FRC Team {teamNumber}</p>
            </div>
        </div>
    );
};

/**
 * @returns The header component of the application.
 */
export const Header: React.FC = () => {
    return (
        <div className="bg-primary fixed top-0 z-10 flex w-full items-center justify-between p-4 shadow-md">
            <Logo logoUrl="/logo.png" teamName="Grayson Robotics" teamNumber={8100} />

            {/* TODO: Add these links */}
            <div className="flex items-center">
                <NavItem text="Home" url="/" />
                <NavItem text="History" url="/history" />
                <NavItem text="Our Team" url="/" />
                <NavItem text="Sponsors" url="/" />
                <NavItem text="Impact" url="/" />
                <NavItem text="Media" url="/" />
            </div>
        </div>
    );
};
