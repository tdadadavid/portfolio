import type { Metadata } from 'next';
import { Fira_Code, IBM_Plex_Mono, Manrope, Newsreader } from 'next/font/google';
import './globals.css';
import info from '@/misc/info';
import { ThemeProvider } from 'next-themes';
import ogImageUrl from '@/misc/og';

const sans = Manrope({
    variable: '--font-sans',
    subsets: ['latin'],
});

const serif = Newsreader({
    variable: '--font-serif',
    subsets: ['latin'],
});

const mono = IBM_Plex_Mono({
    variable: '--font-mono',
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

const code = Fira_Code({
    variable: '--font-code',
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
    title: 'David Dada',
    description: 'Computer Scientist and Experienced Backend Engineer.',
    icons: {
        shortcut: info.shortcutIcon,
    },
    openGraph: {
        locale: 'en_US',
        title: 'David Dada',
        siteName: 'David Dada',
        description: 'Computer Scientist and Experienced Backend Engineer.',
        url: info.url,
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
    metadataBase: new URL(info.url),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${sans.variable} ${serif.variable} ${mono.variable} ${code.variable}`}
        >
            <body className="antialiased">
                <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
