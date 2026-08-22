import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: (props) => <h1 className="text-accent text-4xl font-bold" {...props} />,
        h2: (props) => <h2 className="text-accent mt-8 text-2xl font-bold" {...props} />,
        p: (props) => <p className="text-secondary my-4 leading-7" {...props} />,
        a: (props) => <a className="text-accent underline" {...props} />,
    };
}

export const mdxComponents = useMDXComponents({});
