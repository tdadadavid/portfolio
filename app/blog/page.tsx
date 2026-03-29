'use client';

import { Container } from '@/components/layout/Container';
import { GridBackground } from '@/components/other/GridBackground';
import { BlogCard } from '@/components/ui/blog/BlogCard';
import { FrequencyTag } from '@/components/ui/blog/FrequencyTag';
import { NavBar } from '@/components/ui/NavBar';
import { getAllBlogs } from '@/lib/blogs';
import { BlogMetadata } from '@/types/blog.type';
import { FunnelSimple, MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const emptyTag = 'All Topics';

const BlogsPage = () => {
    const blogs = useMemo(() => getAllBlogs(), []);
    const [filterTag, setFilterTag] = useState<string>('');
    const [query, setQuery] = useState('');

    const tags = useMemo(() => {
        const frequencyMap: Record<string, number> = {};
        blogs.forEach(blog => {
            blog.tags.forEach(tag => {
                frequencyMap[tag] = (frequencyMap[tag] || 0) + 1;
            });
        });
        return Object.entries(frequencyMap).sort(([, a], [, b]) => b - a);
    }, [blogs]);

    const filteredPosts = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return blogs.filter(blog => {
            const matchesTag =
                filterTag === '' || blog.tags.some(tag => tag.toLowerCase() === filterTag);
            const searchable = `${blog.title} ${blog.summary} ${blog.tags.join(' ')}`.toLowerCase();
            const matchesQuery = normalizedQuery === '' || searchable.includes(normalizedQuery);
            return matchesTag && matchesQuery;
        });
    }, [blogs, filterTag, query]);

    const groupedByYear = useMemo(() => {
        return filteredPosts.reduce<Record<string, BlogMetadata[]>>((acc, blog) => {
            if (!acc[blog.year]) {
                acc[blog.year] = [];
            }
            acc[blog.year].push(blog);
            return acc;
        }, {});
    }, [filteredPosts]);

    const orderedYears = useMemo(
        () => Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a)),
        [groupedByYear],
    );

    return (
        <Container>
            <NavBar currentPage="blog" />
            <GridBackground>
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-8"
                >
                    <header className="space-y-4">
                        <p className="ink-muted text-xs font-semibold uppercase tracking-[0.2em]">
                            Writing Desk
                        </p>
                        <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl">
                            Blog Notes & Deep Dives
                        </h1>
                        <p className="ink-muted max-w-3xl leading-7">
                            Technical essays, backend notes, and system design breakdowns. Filter by
                            topic or search by keyword.
                        </p>
                    </header>

                    <section className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
                        <div className="paper-surface p-4 sm:p-5">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="ink-muted text-xs uppercase tracking-[0.16em]">
                                        Published Entries
                                    </p>
                                    <p className="mt-2 font-[family-name:var(--font-serif)] text-4xl leading-none">
                                        {filteredPosts.length}
                                    </p>
                                </div>
                                <div className="ink-muted hidden items-center gap-1 text-xs uppercase tracking-[0.16em] sm:flex">
                                    <FunnelSimple size={13} />
                                    {filterTag || emptyTag}
                                </div>
                            </div>
                        </div>

                        <label className="paper-surface flex items-center gap-2 px-4 py-3">
                            <MagnifyingGlass size={16} className="text-[var(--paper-muted)]" />
                            <input
                                type="search"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Search title, topic, or summary"
                                className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--paper-muted)]"
                            />
                        </label>
                    </section>

                    <section className="paper-surface p-4 sm:p-5">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.17em] text-[var(--paper-muted)]">
                            Filter by Topic
                        </h2>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <FrequencyTag
                                title={emptyTag}
                                isSelected={filterTag === ''}
                                onClick={() => setFilterTag('')}
                            />
                            {tags.map(([tag, count]) => (
                                <FrequencyTag
                                    key={tag}
                                    title={`${tag} (${count})`}
                                    isSelected={filterTag.toLowerCase() === tag.toLowerCase()}
                                    onClick={() => setFilterTag(tag.toLowerCase())}
                                />
                            ))}
                        </div>
                    </section>

                    {filteredPosts.length === 0 ? (
                        <section className="paper-surface p-8 text-center">
                            <h3 className="font-[family-name:var(--font-serif)] text-3xl">
                                No posts matched
                            </h3>
                            <p className="ink-muted mt-2 text-sm">
                                Try removing filters or searching with a broader term.
                            </p>
                        </section>
                    ) : (
                        <section className="space-y-8">
                            {orderedYears.map(year => (
                                <section key={year} className="space-y-4">
                                    <header className="flex items-center gap-3">
                                        <h3 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl">
                                            {year}
                                        </h3>
                                        <span className="h-px flex-1 bg-[var(--paper-line)]" />
                                    </header>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                                        {groupedByYear[year].map(post => (
                                            <BlogCard key={post.slug} meta={post} />
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </section>
                    )}
                </motion.div>
            </GridBackground>
        </Container>
    );
};

export default BlogsPage;
