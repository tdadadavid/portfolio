import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig }*/
const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'], // we need this to import svgs as react components
        });
        return config;
    },
    reactStrictMode: true,
};

const withMDX = createMDX({
   // add plugins here 
});

export default withMDX(nextConfig);
