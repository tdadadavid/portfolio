// Generate site map
import info from '@/misc/info';

export default async function sitemap() {
    const routes = ['/', '/works', '/contact', '/blog'].map(route => ({
        url: `${info.url}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes];
}
