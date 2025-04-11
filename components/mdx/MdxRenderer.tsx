'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import H1 from './elements/H1';
import H2 from './elements/H2';

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
                    h2: H2 
                }}
            />
        </article>
    );
};

export default MdxRenderer;
