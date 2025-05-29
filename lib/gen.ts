import type { Metadata } from 'next';
import info from '@/misc/info';

type MetadataParams = {
    title: string;
    description: string;
    path: string;
    ogTitle?: string;
    ogDescription?: string;
    ogType?: 'website' | 'article';
};

/**
 * Generate metadata for a page with dynamic OG image
 */
export function createMetadata({
    title,
    description,
    path,
    ogTitle,
    ogDescription,
    ogType = 'website',
}: MetadataParams): Metadata {
    // Use provided OG title/description or fall back to regular title/description
    const finalOgTitle = ogTitle || title;
    const finalOgDescription = ogDescription || description;

    const ogUrl = new URL(`${info.url}/api/og`);
    ogUrl.searchParams.append('title', finalOgTitle);
    ogUrl.searchParams.append('description', finalOgDescription);
    ogUrl.searchParams.append('type', ogType);

    const fullTitle = path === '/' ? title : `${title} | David Dada`;

    return {
        title: fullTitle,
        description,
        icons: {
            shortcut: info.shortcutIcon,
        },
        openGraph: {
            title: finalOgTitle,
            description: finalOgDescription,
            type: ogType,
            url: `${info.url}${path}`,
            images: [
                {
                    url: ogUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: finalOgTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: finalOgTitle,
            description: finalOgDescription,
            images: [ogUrl.toString()],
        },
    };
}
