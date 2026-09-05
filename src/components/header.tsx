/**
 * @file Declares the Header component and related components.
 */
import Image from "next/image";
import Link from "next/link";
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
    const { text, url, openInNewTab } = props;

    return (
        <Link href={url} className={`text-secondary hover:text-accent mr-6 transition-all duration-300 font-bold text-xs md:text-base ${!openInNewTab ? "hidden md:block" : ""}`} rel="noopener noreferrer" target={openInNewTab ? "_blank" : undefined}>
            {text} {openInNewTab && "→"}
        </Link>
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
            <Image src={logoUrl} alt="Logo" className="mr-2 h-16 w-16 rounded-lg" height={64} width={64} />
            <div>
                <h1 className="text-accent md:text-2xl font-bold text-shadow-md text-nowrap">{teamName}</h1>
                <p className="text-secondary text-sm md:text-base text-shadow-md font-bold text-nowrap">FRC Team {teamNumber}</p>
            </div>
        </div>
    );
};

/**
 * @returns The header component of the application.
 */
export const Header: React.FC = () => {
    return (
        <div className="bg-primary/80 fixed top-0 z-10 flex w-full items-center justify-between border-b border-border/50 p-4 shadow-md backdrop-blur-md">
            <Logo logoUrl="/website/logo.png" teamName="Grayson Robotics" teamNumber={8100} />

            {/* TODO: Add these links */}
            <nav className="flex items-center">
                {/* <NavItem text="Home" url="/home" /> */}
                {/* <NavItem text="History" url="/history" /> */}
                {/* <NavItem text="Our Team" url="/team" /> */}
                {/* <NavItem text="Sponsors" url="/" />
                <NavItem text="Impact" url="/" />
                <NavItem text="Media" url="/" /> */}

                <NavItem text="About" url="#frc" />
                <NavItem text="Team" url="#team" />
                <NavItem text="Robot" url="#robot" />
                <NavItem text="Outreach" url="#outreach" />
                <NavItem text="Sponsors" url="#sponsors" />
                <NavItem text="Contact" url="#contact" />
            </nav>
        </div>
    );
};
