import { MDXComponents } from 'mdx/types';

import H1 from '@/components/mdx/elements/H1';
import H2 from '@/components/mdx/elements/H2';
import OL from '@/components/mdx/elements/OL';
import UL from '@/components/mdx/elements/UL';
import BlockQuote from '@/components/mdx/elements/BlockQuote';
import Img from '@/components/mdx/elements/Img';
import ResizableImg from '@/components/mdx/elements/ResizeableImg';
import A from '@/components/mdx/elements/A';
import HR from '@/components/mdx/elements/HR';
import Pre from '@/components/mdx/elements/Pre';
import { ComponentPropsWithoutRef } from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: H1,
        h2: H2,
        ol: OL,
        ul: UL,
        blockquote: BlockQuote,
        img: Img,
        ResizableImg,
        a: A,
        hr: HR,
        pre: Pre,
        code: ({ children, className, ...props }: ComponentPropsWithoutRef<'code'>) => {
            return (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },
        ...components,
    };
}
