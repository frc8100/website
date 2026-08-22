import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type ContentLayoutProps = {
    children: ReactNode;
    showHeader?: boolean;
    showFooter?: boolean;
    variant?: "default" | "wide";
};

export function ContentLayout({
    children,
    showHeader = true,
    showFooter = true,
    variant = "default",
}: ContentLayoutProps) {
    return (
        <>
            {showHeader && <Header />}
            <main className={showHeader ? "pt-24" : "pt-8"}>
                <article className={variant === "wide" ? "mx-auto max-w-6xl px-6" : "mx-auto max-w-3xl px-6"}>
                    {children}
                </article>
            </main>
            {showFooter && <Footer />}
        </>
    );
}
