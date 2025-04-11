'use client';

import { BlogInterface } from '@/lib/blogs';
import { Container } from '../layout/Container';
import MdxRenderer from '../mdx/MdxRenderer';
import { NavBar } from '../ui/NavBar';

interface BlogContentTemplateProps {
    blog: BlogInterface;
}

interface BlogMetaDisplayProps {
    title: string;
    date: string;
    tags: string[];
}

const BlogMetaDisplay = ({ title, date, tags }: BlogMetaDisplayProps) => {
    return (
        <header className="mt-4 mb-8 border-b border-b-gray-300 py-8">
            <h4 className="text-gray-500 text-base mb-2">
                {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </h4>
            <h2 className="font-semibold text-2xl">{title}</h2>
        </header>
    );
};

export const BlogContentTemplate = ({ blog }: BlogContentTemplateProps) => {
    return (
        <Container>
            <NavBar currentPage="blog" />
            <article>
                <BlogMetaDisplay
                    title={blog.metadata.title}
                    date={blog.metadata.publishedOn}
                    tags={blog.metadata.tags}
                />
                <section>
                    <MdxRenderer content={blog.content} />
                </section>
            </article>
        </Container>
    );
};
