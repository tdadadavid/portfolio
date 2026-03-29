import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
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
    experimental: {
        mdxRs: true,
    },
    reactStrictMode: true,
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeRaw,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: false,
          defaultLang: 'plaintext',
        },
      ],
    ],
  }
});

export default withMDX(nextConfig);
