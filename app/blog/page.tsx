'use client';

import { Container } from '@/components/layout/Container';
import { GridBackground } from '@/components/other/GridBackground';
import { BlogCard } from '@/components/ui/blog/BlogCard';
import { FrequencyTag } from '@/components/ui/blog/FrequencyTag';
import { NavBar } from '@/components/ui/NavBar';
import { getAllBlogs } from '@/lib/blogs';
import { BlogMetadata } from '@/types/blog.type';
import { useEffect, useState } from 'react';

const BlogsPage = () => {
    const blogs = getAllBlogs();

    const [filterTag, setFilterTag] = useState<string>('');
    const [flattenedPosts, setFlattenedPosts] = useState<{ year: string; post: BlogMetadata }[]>(
        [],
    );

    // Flattens posts into a sorted array with year labels
    const flattenPosts = (source: BlogMetadata[]) => {
        const sorted = [...source].sort(
            (a, b) => new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime(),
        );
        return sorted.map(post => ({
            year: post.year,
            post,
        }));
    };

    // Returns a map containing how many times each tag occurs
    const getTagFrequencyMap = (source: BlogMetadata[]) => {
        const frequencyMap: Record<string, number> = {};
        source.forEach(blog => {
            blog.tags.forEach(tag => {
                frequencyMap[tag] = (frequencyMap[tag] || 0) + 1;
            });
        });
        return frequencyMap;
    };

    const tags = getTagFrequencyMap(blogs);

    // Filter each post in the post groups by tag
    const handleTagClick = (tag: string) => {
        const caseInsensitiveTag = tag.toLowerCase();
        if (filterTag == '' || filterTag != caseInsensitiveTag) {
            setFilterTag(caseInsensitiveTag);
            const filtered = blogs.filter(blog =>
                blog.tags.some(t => t.toLowerCase() == caseInsensitiveTag),
            );
            setFlattenedPosts(flattenPosts(filtered));
        } else {
            setFilterTag('');
            setFlattenedPosts(flattenPosts(blogs));
        }
    };

    // Effects
    useEffect(() => {
        setFlattenedPosts(flattenPosts(blogs));
    }, [blogs]);

    // Track when a year label has already been shown
    const yearDisplayed: Record<string, boolean> = {};

    return (
        <Container>
            <NavBar currentPage="blog" />
            <GridBackground>
                <div className="overflow-x-hidden">
                    {/* Frequency tags */}
                    <section className="mb-12">
                        <h3 className="text-3xl">Frequent</h3>
                        <section className="my-4 flex flex-wrap gap-2 items-center overflow-x-auto max-w-full">
                            {Object.entries(tags)
                                .sort(([, a], [, b]) => b - a) // sort by frequency count
                                .map(([tag, count], idx) => (
                                    <FrequencyTag
                                        key={idx}
                                        title={`${tag} (${count})`}
                                        isSelected={filterTag.toLowerCase() === tag.toLowerCase()}
                                        onClick={() => handleTagClick(tag)}
                                    />
                                ))}
                        </section>
                    </section>

                    {/* Blog cards grid */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-12">
                        {flattenedPosts?.map(({ year, post }, idx) => {
                            let showYear = false;
                            if (!yearDisplayed[year]) {
                                showYear = true;
                                yearDisplayed[year] = true;
                            }

                            return (
                                <div key={idx} className="col-span-1 space-y-1">
                                    {showYear && (
                                        <h3 className="text-lg font-bold text-ice">{year}</h3>
                                    )}
                                    <BlogCard meta={post} />
                                </div>
                            );
                        })}
                    </section>
                </div>
            </GridBackground>
        </Container>
    );
};

export default BlogsPage;
