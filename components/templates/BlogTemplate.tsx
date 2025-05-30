'use client';

import { BlogMetadata, BlogStatus } from '@/types/blog.type';
import { Container } from '../layout/Container';
import { NavBar } from '../ui/NavBar';
import { FrequencyTag } from '../ui/blog/FrequencyTag';

interface BlogTemplateProps {
    children: React.ReactNode;
    metadata: BlogMetadata;
}

interface BlogMetaProps {
    title: string;
    date: string;
    tags: string[];
    status: BlogStatus;
}

const BlogMeta = ({ title, date, tags, status }: BlogMetaProps) => {
    // Status styling configuration
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

                {/* Status Badge */}
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

export const BlogTemplate = ({ children, metadata }: BlogTemplateProps) => {
    return (
        <Container>
            <NavBar currentPage="blog" />
            <article>
                <BlogMeta
                    title={metadata.title}
                    date={metadata.publishedOn}
                    tags={metadata.tags}
                    status={metadata.status}
                />
                <section className="dark:text-gray-400 text-gray-500">
                   {children}
                </section>
            </article>
        </Container>
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