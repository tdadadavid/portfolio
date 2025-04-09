"use client"

import { MDXRemote } from 'next-mdx-remote';

interface RendererProps {
    content: any;
}

const MdxRenderer = ({ content }: RendererProps) => {
    console.log("content:", content);
    return (
        <article>
            <MDXRemote {...content} />
        </article>
    );
};

export default MdxRenderer;
