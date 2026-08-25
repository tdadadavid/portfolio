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

/**
 * Page metadata for a post.
 *
 * Unpublished posts render a notice instead of 404ing, which means they now
 * answer 200 — so they must be explicitly noindex, or crawlers will index a
 * page whose only content is "this is not finished".
 */
export const buildPostMetadata = (key: string, site: { me: string; icon: string }) => {
    const blog = blogMetadata[key];

    if (!blog) return { title: site.me };

    const published = isReadable(blog);
    const generatedImage = `/api/og?${new URLSearchParams({
        title: blog.title,
        description: blog.summary,
        type: 'article',
    })}`;
    const socialImage = blog.coverImage?.src ?? generatedImage;
    const canonicalUrl = `/blog/post/${key}`;

    return {
        title: `${blog.title} | ${site.me}`,
        description: blog.summary,
        alternates: { canonical: canonicalUrl },
        authors: [{ name: site.me }],
        icons: { icon: site.icon },
        openGraph: {
            type: 'article' as const,
            title: blog.title,
            description: blog.summary,
            url: canonicalUrl,
            siteName: site.me,
            locale: 'en_US',
            publishedTime: blog.publishedOn,
            images: [
                {
                    url: socialImage,
                    alt: blog.coverImage?.alt ?? `${blog.title} article cover`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image' as const,
            title: blog.title,
            description: blog.summary,
            images: [socialImage],
        },
        robots: published
            ? undefined
            : { index: false, follow: false, googleBot: { index: false, follow: false } },
    };
};
