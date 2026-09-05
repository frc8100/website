import type { MDXComponents } from "mdx/types";

import { Contact } from "@/components/Contact";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/Section";
import { Sponsors } from "@/components/Sponsors";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        Hero,
        Section,
        Sponsors,
        Contact,
        // h1: (props) => <h1 className="text-accent text-4xl font-bold" {...props} />,
        // h2: (props) => <h2 className="text-accent mt-8 text-2xl font-bold" {...props} />,
        // p: (props) => <p className="text-secondary my-4 leading-7" {...props} />,
        // a: (props) => <a className="text-accent underline" {...props} />,
    };
}

export const mdxComponents = useMDXComponents({});
