import { BlogMetadata } from '@/lib/getBlogs';
import { FrequencyTag } from './FrequencyTag';

interface BlogCardProps {
    meta: BlogMetadata;
}

export const BlogCard = ({ meta }: BlogCardProps) => {
    return (
        <section className="py-2">
            <h3 className="underline text-gray-800 text-base mb-1 hover:text-ice dark:text-gray-400">
                <a href={`/blog/${meta.slug}`}>{meta.title}</a>
            </h3>
            <p className="text-gray-500 text-sm mb-4 dark:text-gray-200">
                {meta.summary}
            </p>
            <section className="flex gap-2 items-center">
                {meta.tags.map((tag, idx) => (
                    <FrequencyTag key={idx} title={tag} onClick={() => {}} />
                ))}
            </section>
        </section>
    );
};
