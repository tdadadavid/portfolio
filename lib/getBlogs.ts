import fs from "fs"
import matter from "gray-matter";
import path from "path"

type BlogMetadata = {
    title: string;
    summary: string;
    publishedOn: string;
    tags: string[];
};

export interface BlogInterface {
    metadata: BlogMetadata;
    content: string;
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

            return {
                metadata: data as BlogMetadata,
                content: content as string,
                slug: blog.replace(/\.mdx?$/, ''),
            };
        })
    );

    return blogPosts;
}