'use client';

import { BlogInterface } from '@/lib/blogs';
import { Container } from '../layout/Container';
import MdxRenderer from '../mdx/MdxRenderer';
import { NavBar } from '../ui/NavBar';
import { FrequencyTag } from '../ui/blog/FrequencyTag';

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
        <header className="mt-4 mb-8 border-b border-b-gray-300 pt-8 pb-4">
            <h4 className="text-gray-500 text-base mb-2">
                {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </h4>
            <h2 className="font-semibold text-2xl">{title}</h2>
            <section className="my-4 flex gap-2 items-center">
                {tags.map((tag, idx) => (
                    <FrequencyTag
                        key={idx}
                        title={tag}
                        tiny={true}
                        isSelected={false}
                        onClick={() => {}}
                    />
                ))}
            </section>
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
                <section className="text-gray-800">
                    <MdxRenderer content={blog.content} />
                </section>
            </article>
        </Container>
    );
};
