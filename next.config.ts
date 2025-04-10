import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig }*/
const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        });
        return config;
    },
};

const withMDX = createMDX({
    // TODO: add plugins later
});

export default withMDX(nextConfig);
