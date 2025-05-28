import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';

const BLOG_DIRECTORY = path.join(process.cwd(), 'content/blog');

export const getBlogs = async () => {
    const blogDirs = fs
        .readdirSync(BLOG_DIRECTORY)
        .filter(dir => fs.statSync(path.join(BLOG_DIRECTORY, dir)).isDirectory());

    const rehypePrettyCodeOptions = {
        theme: 'poimandres',
    };

    const blogs = await Promise.all(
        blogDirs.map(async slug => {
            const mdxPath = path.join(BLOG_DIRECTORY, slug, 'index.mdx');
            const metaPath = path.join(BLOG_DIRECTORY, slug, 'meta.json');

            const mdxRaw = fs.readFileSync(mdxPath, 'utf8');
            const { content } = matter(mdxRaw); 

            const metadata = JSON.parse(fs.readFileSync(metaPath, 'utf8'));

            const serialized = await serialize(content, {
                mdxOptions: {
                    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
                },
            });

            return {
                slug,
                metadata,
                content: serialized,
            };
        }),
    );

    return blogs;
};

export const getBlog = async (slug: string) => {
    const blogs = await getBlogs();
    return blogs.find(b => b.slug === slug) ?? null;
};
