'use client';

import Link from 'next/link';
import { getBlogSeries, getSeriesParts } from '@/lib/blogs';

export function SeriesNavigation({ seriesKey, currentKey }: { seriesKey: string; currentKey?: string }) {
    const series = getBlogSeries(seriesKey);
    if (!series) return null;
    const parts = getSeriesParts(seriesKey);
    const index = parts.findIndex(part => part.slug === currentKey);
    const previous = index > 0 ? parts[index - 1] : undefined;
    const next = index >= 0 ? parts[index + 1] : undefined;

    return (
        <nav aria-label="Series navigation" className="my-6 border-y py-4 text-[12px]" style={{ borderColor: 'var(--paper-line)' }}>
            <div className="flex flex-wrap justify-between gap-3">
                <span className="ink-muted">
                    {series.title}{index >= 0 ? ` · Part ${parts[index].part}` : ''}
                </span>
                <Link href="/blog" className="underline" style={{ color: 'var(--term-blue)' }}>
                    All blog posts →
                </Link>
            </div>
            {currentKey && (
                <div className="mt-4 flex flex-wrap justify-between gap-3">
                    {previous ? (
                        <Link href={`/blog/post/${previous.slug}`} className="underline" style={{ color: 'var(--term-blue)' }}>
                            ← Previous: Part {previous.part}
                        </Link>
                    ) : <span />}
                    {next && (
                        <Link href={`/blog/post/${next.slug}`} className="underline" style={{ color: 'var(--term-blue)' }}>
                            Next: Part {next.part} →
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
}
