// Generate site map
import meta from '@/misc/info';

export default async function sitemap() {
    const routes = ['/', '/works', '/contact', '/blog'].map(route => ({
        url: `${meta.url}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes];
}
