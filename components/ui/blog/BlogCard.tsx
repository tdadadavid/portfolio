import { BlogMetadata } from '@/types/blog.type';

interface BlogCardProps {
    meta: BlogMetadata;
}

const statusLabel = {
    done: 'Published',
    'in-progress': 'In Progress',
    draft: 'Draft',
} as const;

export const BlogCard = ({ meta }: BlogCardProps) => {
    const isDraft = meta.status === 'draft';

    return (
        <article className="paper-surface group h-full p-4 transition duration-300 hover:-translate-y-1">
            <div className="mb-3 flex items-center justify-between gap-2.5">
                <p className="ink-muted text-xs uppercase tracking-[0.15em]">
                    {new Date(meta.publishedOn).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </p>
                <span className="rounded-full border border-[var(--paper-line)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--paper-muted)]">
                    {statusLabel[meta.status]}
                </span>
            </div>
            <h3 className="font-[family-name:var(--font-serif)] text-xl leading-tight">
                {isDraft ? (
                    <span className="cursor-not-allowed opacity-75">{meta.title}</span>
                ) : (
                    <a href={`/blog/${meta.slug}`} className="transition hover:text-[#2d6cdf]">
                        {meta.title}
                    </a>
                )}
            </h3>
            <p className="ink-muted mt-2.5 text-sm leading-5">{meta.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
                {meta.tags.map(tag => (
                    <span
                        key={tag}
                        className="rounded-full border border-dashed border-[var(--paper-line)] px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[var(--paper-muted)]"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
};
