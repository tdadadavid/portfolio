import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            // we need this to import svgs as react components
            use: ['@svgr/webpack'],
        });
        return config;
    },
    reactStrictMode: true,
};

/*
 * Two themes, not one. rehype-pretty-code emits every token twice as
 * --shiki-light / --shiki-dark custom properties, and code.css picks the
 * right one from [data-theme]. That is what makes highlighting follow the
 * theme toggle without shipping a highlighter to the browser.
 */
const prettyCodeOptions = {
    theme: {
        light: 'github-light',
        dark: 'github-dark',
    },
    keepBackground: false,
    defaultLang: 'plaintext',
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    },
});

export default withMDX(nextConfig);
