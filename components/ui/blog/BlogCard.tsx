import { BlogMetadata } from '@/lib/blogs';
import { FrequencyTag } from './FrequencyTag';

interface BlogCardProps {
    meta: BlogMetadata;
}

export const BlogCard = ({ meta }: BlogCardProps) => {
    return (
        <section className="py-2 mb-8">
            <h3 className="mb-2 text-sm">
                {new Date(meta.publishedOn).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </h3>
            <h3 className="underline text-gray-800 text-base mb-4 hover:text-ice dark:text-gray-400">
                <a href={`/blog/${meta.slug}`}>{meta.title}</a>
            </h3>
            <p className="text-gray-500 text-sm mb-4 dark:text-gray-200">{meta.summary}</p>
            <section className="flex gap-2 items-center">
                {meta.tags.map((tag, idx) => (
                    <FrequencyTag
                        key={idx}
                        title={tag}
                        onClick={() => {}}
                        isSelected={false}
                        tiny={true}
                    />
                ))}
            </section>
        </section>
    );
};
