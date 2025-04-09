"use client"

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface RendererProps {
    content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

const MdxRenderer = ({ content }: RendererProps) => {
    return (
        <article>
            <MDXRemote {...content} />
        </article>
    );
};

export default MdxRenderer;
