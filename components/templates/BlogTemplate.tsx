'use client';

import { BlogInterface } from '@/lib/getBlogs';
import { Container } from '../layout/Container';
import { NavBar } from '../ui/NavBar';
import { FrequencyTag } from '../ui/blog/FrequencyTag';
import { BlogCard } from '../ui/blog/BlogCard';
import { useEffect, useState } from 'react';

interface BlogTemplateProps {
    blogs: BlogInterface[];
}

const BlogTemplate = ({ blogs }: BlogTemplateProps) => {
    const [filterTag, setFilterTag] = useState<string>('');
    const [filteredPosts, setFilteredPosts] = useState<Record<
        string,
        Array<BlogInterface>
    > | null>(null);

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
                organizedPosts[post.metadata.year] = [];
            }
            organizedPosts[post.metadata.year].push(post);
        }

        // Sort posts by ISO date (descending within each year)
        Object.keys(organizedPosts).forEach((year) => {
            organizedPosts[year].sort(
                (a, b) =>
                    new Date(b.metadata.publishedOn).getTime() -
                    new Date(a.metadata.publishedOn).getTime()
            );
        });

        return organizedPosts;
    };

    // Filter each post in the post groups by tag
    const handleTagClick = (tag: string) => {
        // Toggle-able based on whether the string is empty or not
        const caseInsensitiveTag = tag.toLowerCase();
        if (filterTag == '' || filterTag != caseInsensitiveTag) {
            setFilterTag(caseInsensitiveTag);
            const filtered = blogs.filter((post) =>
                post.metadata.tags.some(
                    (t) => t.toLowerCase() == caseInsensitiveTag
                )
            );
            const organized = organizePostsIntoYears(filtered);
            setFilteredPosts(organized);
        } else {
            setFilterTag('');
            setFilteredPosts(organizePostsIntoYears(blogs));
        }
    };

    const tags = getTagFrequencyMap(blogs);

    // Effects
    useEffect(() => {
        setFilteredPosts(organizePostsIntoYears(blogs));
    }, []);

    return (
        <Container>
            <NavBar currentPage="blog" />

            {/* Frequency tags */}
            <section className="mt-12">
                <h3 className="text-3xl">Frequent</h3>
                <section className="my-4 flex gap-2 items-center">
                    {Object.entries(tags)
                        .sort(([, a], [, b]) => b - a) // sort by frequency count
                        .map(([tag, count], idx) => (
                            <FrequencyTag
                                key={idx}
                                title={`${tag} (${count})`}
                                isSelected={
                                    filterTag.toLowerCase() ===
                                    tag.toLowerCase()
                                }
                                onClick={() => handleTagClick(tag)}
                            />
                        ))}
                </section>
            </section>

            {/* Blog cards */}
            <section className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredPosts &&
                    Object.entries(filteredPosts)
                        .sort(([a], [b]) => Number(b) - Number(a)) // sort years newest first
                        .map(([year, posts], idx) => (
                            <section key={idx} className="my-6">
                                <h3 className="my-2 font-bold text-ice">
                                    {year}
                                </h3>
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
