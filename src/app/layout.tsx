/**
 * @file Defines the Next.js root layout for the application.
 */
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
// export const instant = false;

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Grayson Robotics",
    description: "Grayson Robotics Team 8100 website",
};

/**
 * @returns The root layout component of the application.
 */
const RootLayout: React.FC<{
    children: React.ReactNode;
}> = (props) => {
    return (
        <html lang="en" className={`scroll-smooth bg-foreground text-background antialiased`}>
            <body>{props.children}</body>
        </html>
    );
};

export default RootLayout;
