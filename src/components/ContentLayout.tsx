import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type ContentLayoutProps = {
    children: ReactNode;
    showHeader?: boolean;
    showFooter?: boolean;
    variant?: "default" | "wide";
};

export const ContentLayout: React.FC<ContentLayoutProps> = (props: ContentLayoutProps) => {
    const {
        children,
        showHeader = true,
        showFooter = true,
        variant = "default",
    } = props;

    return (
        <>
            {showHeader && <Header />}
            <main className={showHeader ? "pt-20" : "pt-8"}>
                <article className={`${variant === "wide" ? "mx-auto" : "mx-auto max-w-4xl"}`}>
                    {children}
                </article>
            </main>
            {showFooter && <Footer />}
        </>
    );
}
