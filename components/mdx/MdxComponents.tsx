import { MDXComponents } from 'mdx/types';

import H1 from './elements/H1';
import H2 from './elements/H2';
import OL from './elements/OL';
import UL from './elements/UL';
import BlockQuote from './elements/BlockQuote';
import Img from './elements/Img';
import ResizableImg from './elements/ResizeableImg';
import A from './elements/A';
import HR from './elements/HR';

export function useMDXComponents(): MDXComponents {
    return {
        h1: H1,
        h2: H2,
        ol: OL,
        ul: UL,
        blockquote: BlockQuote,
        img: Img,
        ResizableImg,
        a: A,
        hr: HR
    };
}

export const mdxComponents: MDXComponents = {};
