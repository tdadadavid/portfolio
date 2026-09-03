'use client';

import Link from 'next/link';
import { TerminalWindow } from '@/components/layout/TerminalWindow';
import { CommandLine } from '@/components/ui/shell/CommandLine';
import { PagerProgress } from './PagerProgress';
import { ShareBar } from './ShareBar';
import { UnpublishedNotice } from './UnpublishedNotice';
import { PostContent } from './PostContent.generated';
import { SeriesNavigation } from './SeriesNavigation';
import { blogStatusLabel, getBlogMetadata, getReadableBlogs, isReadable } from '@/lib/blogs';
import info from '@/misc/info';
import '@/app/code.css';

export function PostView({ postKey }: { postKey: string }) {
    const blog = getBlogMetadata(postKey);
    if (!blog) return <p className="term-err">Article not found.</p>;
    const file = `${postKey}.md`;
    const navigation = blog.series ? <SeriesNavigation seriesKey={blog.series} currentKey={postKey} /> : null;

    if (!isReadable(blog)) {
        return (
            <UnpublishedNotice
                key={postKey}
                blog={{ ...blog, slug: `post/${postKey}` }}
                file={file}
                others={getReadableBlogs()}
            >
                {navigation}
            </UnpublishedNotice>
        );
    }

    return (
        <TerminalWindow currentPage="blog" path={`~/writing/${file}`} status={
            <>
                <PagerProgress />
                <Link href="/blog" style={{ color: 'var(--term-blue)' }}>q · back to ~/writing</Link>
            </>
        }>
            <article>
                <header className="pager-head">
                    <span className="ink-faint">{new Date(blog.publishedOn).toISOString().slice(0, 10)}</span>
                    <span style={{ color: 'var(--paper-bright)' }}>{blog.title}</span>
                    <span style={{ color: 'var(--term-green)' }}>
                        [{blogStatusLabel(blog.status)}]
                    </span>
                    <span className="ink-faint ml-auto hidden text-[11px] sm:inline">{blog.tags.join(' · ')}</span>
                </header>

                <ShareBar title={blog.title} summary={blog.summary} url={`${info.url}/blog/post/${postKey}`} />

                {navigation}
                <div className="pager-body pager-prose"><PostContent postKey={postKey} /></div>
                {navigation}

                <footer className="mt-16 border-t pt-5 text-[12px]" style={{ borderColor: 'var(--paper-line)' }}>
                    <CommandLine cwd="~/writing" />
                </footer>
            </article>
        </TerminalWindow>
    );
}
