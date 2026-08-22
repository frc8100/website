import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { ContentLayout } from "@/components/content-layout";
import { mdxComponents } from "@/mdx-components";

const pages = {
    home: {
        file: "home.mdx",
        layout: { showHeader: true, showFooter: true, variant: "wide" as const },
    },
    history: {
        file: "history.mdx",
        layout: { showHeader: true, showFooter: true, variant: "default" as const },
    },
} as const;

type PageSlug = keyof typeof pages;
type Frontmatter = { title: string; description?: string };

type PageParams = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return Object.keys(pages).map((slug) => ({ slug }));
}

async function getPage(slug: string) {
    if (!(slug in pages)) {
        notFound();
    }

    const page = pages[slug as PageSlug];
    const source = await readFile(path.join(process.cwd(), "src", "content", page.file), "utf8");

    return compileMDX<Frontmatter>({
        source,
        options: { parseFrontmatter: true },
        components: mdxComponents,
    });
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
    const { slug } = await params;
    const { frontmatter } = await getPage(slug);

    return {
        title: frontmatter.title,
        description: frontmatter.description,
    };
}

export default async function ContentPage({ params }: PageParams) {
    const { slug } = await params;
    const { content } = await getPage(slug);
    const page = pages[slug as PageSlug];

    return (
        <ContentLayout {...page.layout}>
            {content}
        </ContentLayout>
    );
}
