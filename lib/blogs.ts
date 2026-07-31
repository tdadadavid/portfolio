import { blogMetadata } from '@/meta/blog.meta';
import type { BlogMetadata } from '@/types/blog.type';

/**
 * The single rule for whether a post is publicly readable.
 *
 * Only 'done' is. Both 'draft' and 'in-progress' 404 on their own URL and
 * render greyed out in the listing. Keep every caller going through this —
 * duplicating the check is how a half-finished post ends up live.
 */
export const isReadable = (blog: Pick<BlogMetadata, 'status'>) => blog.status === 'done';

export const getAllBlogs = () => {
    return Object.entries(blogMetadata)
        .map(([slug, meta]) => ({
            ...meta,
            slug: 'post/' + slug,
        }))
        .sort((a, b) => new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime());
};

/** Only the posts a visitor can actually open. */
export const getReadableBlogs = () => getAllBlogs().filter(isReadable);

export const getBlogMetadata = (slug: string) => {
    return blogMetadata[slug];
};
