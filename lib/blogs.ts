import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

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
    content: any;
    slug: string;
}

export const getBlogs = async () => {
    const BLOG_DIRECTORY = path.join('content/blog');

    const blogs = fs
        .readdirSync(BLOG_DIRECTORY)
        .filter((file) => path.extname(file) == '.mdx');

    const blogPosts = await Promise.all(
        blogs.map(async (blog) => {
            const filepath = path.join(BLOG_DIRECTORY, blog);
            const fileContent = fs.readFileSync(filepath, 'utf-8');
            const { data, content } = matter(fileContent);
            const mdxContent = await serialize(content);
            return {
                metadata: data as BlogMetadata,
                content: mdxContent,
                slug: blog.replace(/\.mdx?$/, ''),
            };
        })
    );

    return blogPosts;
};

export const getBlog = async (slug: string) => {
    const blogs = await getBlogs();
    return blogs.find((blog) => blog.slug == slug) ?? null;
};
