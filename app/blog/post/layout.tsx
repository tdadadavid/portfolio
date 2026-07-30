'use client';

import Link from 'next/link';
import { notFound, usePathname } from 'next/navigation';

import { TerminalWindow } from '@/components/layout/TerminalWindow';
import { CommandLine } from '@/components/ui/shell/CommandLine';
import { PagerProgress } from '@/components/ui/blog/PagerProgress';
import { getBlogMetadata } from '@/lib/blogs';
import type { BlogStatus } from '@/types/blog.type';
import '../../code.css';

const STATUS_LABEL: Record<BlogStatus, { text: string; color: string }> = {
    done: { text: 'published', color: 'var(--term-green)' },
    'in-progress': { text: 'in progress', color: 'var(--term-amber)' },
    draft: { text: 'draft', color: 'var(--paper-faint)' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const slug = pathname.split('/').filter(Boolean).pop();

    if (!slug) return notFound();

    const blog = getBlogMetadata(slug);
    if (!blog || blog.status === 'draft') return notFound();

    const status = STATUS_LABEL[blog.status];
    const file = `${slug}.md`;

    return (
        <TerminalWindow
            currentPage="blog"
            path={`~/writing/${file}`}
            status={
                <>
                    <PagerProgress />
                    <Link href="/blog" style={{ color: 'var(--term-blue)' }}>
                        q · back to ~/writing
                    </Link>
                </>
            }
        >
            <article>
                <header className="pager-head">
                    <span className="ink-faint">
                        {new Date(blog.publishedOn).toISOString().slice(0, 10)}
                    </span>
                    <span style={{ color: 'var(--paper-bright)' }}>{blog.title}</span>
                    <span style={{ color: status.color }}>[{status.text}]</span>
                    <span className="ink-faint ml-auto hidden text-[11px] sm:inline">
                        {blog.tags.join(' · ')}
                    </span>
                </header>

                <div className="pager-body pager-prose">{children}</div>

                <footer
                    className="mt-16 border-t pt-5 text-[12px]"
                    style={{ borderColor: 'var(--paper-line)' }}
                >
                    <CommandLine cwd="~/writing" />
                </footer>
            </article>
        </TerminalWindow>
    );
}
