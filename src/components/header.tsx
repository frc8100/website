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
}

/**
 * @returns An individual navigation item.
 * @param props -
 */
const NavItem: React.FC<NavItemProps> = (props) => {
    const { text, url } = props;

    return (
        <div className="mr-6">
            <a href={url} className="text-primary hover:text-accent">
                {text}
            </a>
        </div>
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
            <img src={logoUrl} alt="Team Logo" className="h-12 w-12 mr-2 rounded-lg shadow-md" />
            <div>
                <h1 className="text-xl font-bold text-accent">{teamName}</h1>
                <p className="text-sm text-primary">{teamNumber}</p>
            </div>
        </div>
    );
};

/**
 * @returns The header component of the application.
 */
export const Header: React.FC = () => {
    // TODO: Add logo image
    return (
        <div className="fixed top-0 z-10 w-full shadow-md flex items-center justify-between p-4 bg-secondary">
            <Logo
                logoUrl="https://www.iconsdb.com/icons/preview/white/circle-xxl.png"
                teamName="Grayson Robotics"
                teamNumber={8100}
            />

            <div className="flex items-center">
                <NavItem text="Home" url="/" />
                <NavItem text="Portfolio" url="/portfolio" />
                <NavItem text="Our Team" url="/ourteam" />
                <NavItem text="News" url="/news" />
                <NavItem text="Resources" url="/resources" />
            </div>
        </div>
    );
};
