'use client';

import { BlogInterface } from '@/lib/getBlogs';
import { Container } from '../layout/Container';
import { NavBar } from '../ui/NavBar';
import { FrequencyTag } from '../ui/blog/FrequencyTag';
import { Yesteryear } from 'next/font/google';
import { BlogCard } from '../ui/blog/BlogCard';

interface BlogTemplateProps {
    blogs: BlogInterface[];
}

const BlogTemplate = ({ blogs }: BlogTemplateProps) => {
    // Returns a set of each individual tag
    const getAllTags = (source: BlogInterface[]) => {
        const tags: string[] = [];
        source.forEach((blog) => {
            blog.metadata.tags.forEach((tag) => {
                tags.push(tag);
            });
        });
        return tags;
    };

    // Returns a map containing how many times each tag occurs
    const getTagFrequencyMap = (source: BlogInterface[]) => {
        const tags = Array.from(getAllTags(source));
        const frequencyMap: Record<string, number> = {};
        for (const tag of tags) {
            frequencyMap[tag as string] =
                (frequencyMap[tag as string] || 0) + 1;
        }
        return frequencyMap;
    };

    // Organize posts into years for clarity
    const organizePostsIntoYears = (source: BlogInterface[]) => {
        const organizedPosts: Record<string, Array<BlogInterface>> = {};
        for (const post of source) {
            // If this is the first post, create an array to hold them
            if (!organizedPosts[post.metadata.year]) {
                organizedPosts[post.metadata.year] = []
            }
            organizedPosts[post.metadata.year].push(post);
        }
        return organizedPosts;
    }

    const handleTagClick = (tag: string) => {
        // TODO: implementation
    }

    const tags = getTagFrequencyMap(blogs);
    const organizedPosts = organizePostsIntoYears(blogs);

    return (
        <Container>
            <NavBar currentPage="blog" />

            {/* Frequency tags */}
            <section className="mt-12">
                <h3 className="text-3xl">Frequent</h3>
                <section className="my-4 flex gap-2 items-center">
                    {Object.entries(tags).map(([key, value], idx) => (
                        <FrequencyTag key={idx} title={`${key} (${value})`} onClick={handleTagClick} />
                    ))}
                </section>
            </section>

            {/* Blog cards */}
            <section className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(organizedPosts).map(([year, posts], idx) => (
                    <section key={idx} className="my-6">
                        <h3 className="my-2 text-ice">{year}</h3>
                        {posts.map((post, idx) => (
                            <BlogCard key={idx} meta={post.metadata} />
                        ))}
                    </section>
                ))}
            </section>
        </Container>
    );
};

export default BlogTemplate;
