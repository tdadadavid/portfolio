import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import meta from '@/data/meta';
import ThemeSwitchProvider from '@/providers/ThemeSwitchProvider';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const ogImageUrl = new URL(`${meta.url}/api/og`);

ogImageUrl.searchParams.append('title', 'David Dada');
ogImageUrl.searchParams.append(
    'description',
    'Computer Scientist and Experienced Backend Engineer.',
);
ogImageUrl.searchParams.append('type', 'website');

export const metadata: Metadata = {
    title: 'David Dada',
    description: 'Computer Scientist and Experienced Backend Engineer.',
    icons: {
        shortcut: meta.shortcutIcon,
    },
    openGraph: {
        locale: 'en_US',
        title: 'David Dada',
        siteName: 'David Dada',
        description: 'Computer Scientist and Experienced Backend Engineer.',
        url: meta.url,
        images: [
            {
                url: '/api/og',
                width: 1200,
                height: 630,
                alt: 'David Dada',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'David Dada',
        description: 'Computer Scientist and Experienced Backend Engineer.',
        images: [ogImageUrl.toString()],
    },
    metadataBase: new URL(meta.url),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={geistSans.className}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeSwitchProvider>{children}</ThemeSwitchProvider>
            </body>
        </html>
    );
}
