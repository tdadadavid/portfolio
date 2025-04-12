import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';

export type BlogMetadata = {
    title: string;
    summary: string;
    publishedOn: string;
    year: string;
    slug: string;
    tags: string[];
};

export interface BlogInterface {
    metadata: BlogMetadata;
    content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
    slug: string;
}

export const getBlogs = async () => {
    const BLOG_DIRECTORY = path.join('content/blog');

    const blogs = fs.readdirSync(BLOG_DIRECTORY).filter(file => path.extname(file) == '.mdx');

    const rehypePrettyCodeOptions = {
        theme: "poimandres",
    };

    const blogPosts = await Promise.all(
        blogs.map(async blog => {
            const filepath = path.join(BLOG_DIRECTORY, blog);
            const fileContent = fs.readFileSync(filepath, 'utf-8');
            const { data, content } = matter(fileContent);
            const mdxContent = await serialize(content, {
                mdxOptions: {
                    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
                },
            });
            return {
                metadata: data as BlogMetadata,
                content: mdxContent,
                slug: blog.replace(/\.mdx?$/, ''),
            };
        }),
    );

    return blogPosts;
};

export const getBlog = async (slug: string) => {
    const blogs = await getBlogs();
    return blogs.find(blog => blog.slug == slug) ?? null;
};
