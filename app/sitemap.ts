// Generate site map
import { getReadableBlogs } from '@/lib/blogs';
import info from '@/misc/info';

export default async function sitemap() {
    const routes = ['/', '/works', '/contact', '/blog', '/resume'].map(route => ({
        url: `${info.url}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    const posts = getReadableBlogs().map(post => ({
        url: `${info.url}/blog/${post.slug}`,
        lastModified: new Date(post.publishedOn).toISOString().split('T')[0],
    }));

    return [...routes, ...posts];
}
