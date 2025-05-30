import { blogMetadata } from '@/meta/blog.meta';

export const getAllBlogs = () => {
    return Object.entries(blogMetadata)
        .map(([slug, meta]) => ({
            ...meta,
            slug: 'post/' + slug,
        }))
        .sort((a, b) => new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime());
};

export const getBlogMetadata = (slug: string) => {
    return blogMetadata[slug];
};
