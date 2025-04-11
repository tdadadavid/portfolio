'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import H1 from './elements/H1';
import H2 from './elements/H2';
import OL from './elements/OL';
import UL from './elements/UL';
import BlockQuote from './elements/BlockQuote';

interface RendererProps {
    content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

const MdxRenderer = ({ content }: RendererProps) => {
    return (
        <article>
            <MDXRemote 
                {...content}
                components={{
                    h1: H1,
                    h2: H2,
                    ol: OL,
                    ul: UL,
                    blockquote: BlockQuote
                }}
            />
        </article>
    );
};

export default MdxRenderer;
