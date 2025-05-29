"use client"

import { Container } from '@/components/layout/Container';
import { FrequencyTag } from '@/components/ui/blog/FrequencyTag';
import { NavBar } from '@/components/ui/NavBar';
import { getBlogMetadata } from '@/lib/blogs';
import { BlogStatus } from '@/types/blog.type';
import { notFound, usePathname } from 'next/navigation';

interface BlogMetaDisplayProps {
    title: string;
    date: string;
    tags: string[];
    status: BlogStatus;
}

export default async function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const slug = pathname.split('/').filter(Boolean).pop(); 
    if (!slug) {
        return notFound();
    }
    const blog = getBlogMetadata(slug);
    return (
        <Container>
            <NavBar currentPage="blog" />
            <article>
                <BlogMetaDisplay
                    title={blog.title}
                    date={blog.publishedOn}
                    tags={blog.tags}
                    status={blog.status}
                />
                <section className="dark:text-gray-400 text-gray-500">{children}</section>
            </article>
        </Container>
    );
}

const BlogMetaDisplay = ({ title, date, tags, status }: BlogMetaDisplayProps) => {
    const statusConfig = getStatusConfig(status);
    return (
        <header className="dark:border-b-[#212d40] mt-4 mb-8 border-b border-b-gray-300 pt-8 pb-4">
            <div className="flex items-center justify-between mb-2">
                <h4 className="dark:text-ice text-gray-500 text-base">
                    {new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </h4>
                <div
                    className={`
                    inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border
                    ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor}
                `}
                >
                    <span className="text-xs">{statusConfig.icon}</span>
                    <span>{statusConfig.text}</span>
                </div>
            </div>
            <h2 className="font-semibold text-2xl mb-4">{title}</h2>
            <section className="flex gap-2 items-center">
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

export const getStatusConfig = (status: BlogStatus) => {
    switch (status) {
        case 'done':
            return {
                text: 'Published',
                icon: '✓',
                bgColor: 'bg-green-100 dark:bg-green-900/30',
                textColor: 'text-green-700 dark:text-green-300',
                borderColor: 'border-green-200 dark:border-green-700',
            };
        case 'in-progress':
            return {
                text: 'In Progress',
                icon: '⏳',
                bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
                textColor: 'text-yellow-700 dark:text-yellow-300',
                borderColor: 'border-yellow-200 dark:border-yellow-700',
            };
        default:
            return {
                text: 'Draft',
                icon: '📝',
                bgColor: 'bg-gray-100 dark:bg-gray-800',
                textColor: 'text-gray-700 dark:text-gray-300',
                borderColor: 'border-gray-200 dark:border-gray-600',
            };
    }
};
