import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig }*/
const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
    // TODO: add plugins later
});

export default withMDX(nextConfig);
