'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

import info from '@/misc/info';
import { getReadableBlogs } from '@/lib/blogs';

export type Cwd = '~' | '~/works' | '~/writing' | (string & {});

export interface ShellContext {
    cwd: Cwd;
    navigate: (href: string) => void;
    clear: () => void;
}

export type CommandResult = ReactNode | null;

export const ROUTES = [
    { name: 'works', href: '/works', cwd: '~/works', note: 'systems built and shipped' },
    { name: 'blog', href: '/blog', cwd: '~/writing', note: 'notes on how things work' },
    { name: 'resume', href: '/resume', cwd: '~/resume', note: 'the man page' },
    { name: 'contact', href: '/contact', cwd: '~/contact', note: 'say hello' },
];

const SOCIALS: Record<string, string> = {
    github: info.github,
    linkedin: info.socials.linkedin,
    x: info.socials.twitter,
    twitter: info.socials.twitter,
    email: `mailto:${info.email}`,
    resume: '/resume.pdf',
    pdf: '/resume.pdf',
};

const BIO = [
    'I am a backend engineer who thinks deeply about how systems are',
    'designed and built — constructing and dismantling services to',
    'understand what makes them reliable, scalable and maintainable.',
    '',
    'Write-ahead logs, sharded architectures, distributed coordination.',
    'APIs treated as long-term contracts. Database internals, from',
    'indexes down to the storage path between memory and disk.',
];

const Err = ({ children }: { children: ReactNode }) => (
    <div className="term-err mt-1">{children}</div>
);

const Hint = ({ children }: { children: ReactNode }) => (
    <div className="ink-faint mt-1">{children}</div>
);

const Blue = ({ children }: { children: ReactNode }) => (
    <span style={{ color: 'var(--term-blue)' }}>{children}</span>
);

const readablePosts = () => getReadableBlogs();

const postFile = (slug: string) => `${slug.replace(/^post\//, '')}.md`;

/** Section names shown by `ls` inside ~/resume. Kept in sync by the page. */
let resumeSections: string[] = [];

export const setResumeSections = (sections: string[]) => {
    resumeSections = sections;
};

/** Everything the shell can complete or resolve, per directory. */
export const entriesFor = (cwd: Cwd): string[] => {
    if (cwd === '~/works') return info.works.map(work => work.file);
    if (cwd === '~/writing') return readablePosts().map(post => postFile(post.slug));
    if (cwd === '~/resume') return ['resume.md', 'resume.pdf', 'david'];
    return ROUTES.map(route => route.name);
};

export const COMMAND_NAMES = [
    'help',
    'ls',
    'cd',
    'cat',
    'man',
    'open',
    'whoami',
    'pwd',
    'clear',
];

const HELP_ROWS: { name: string; args?: string; help: string }[] = [
    { name: 'ls', args: '[--tags]', help: 'list what is in this directory' },
    { name: 'cd', args: '<dir>', help: 'works, blog, resume, contact, .. or ~' },
    { name: 'cat', args: '<name>', help: 'read an entry here' },
    { name: 'man', args: 'david', help: 'the resume, as a manual page' },
    { name: 'open', args: '<name>', help: 'open a project, post or profile' },
    { name: 'whoami', help: 'the short version' },
    { name: 'pwd', help: 'where you are' },
    { name: 'clear', help: 'wipe the screen' },
];

const Help = () => (
    <div className="mt-1 space-y-0.5">
        {HELP_ROWS.map(row => (
            <div key={row.name} className="flex flex-wrap items-baseline gap-x-3">
                <span className="w-[22ch] shrink-0">
                    <span style={{ color: 'var(--paper-bright)' }}>{row.name}</span>
                    {row.args && <span className="ink-faint"> {row.args}</span>}
                </span>
                <span className="ink-muted">{row.help}</span>
            </div>
        ))}
        <div className="ink-faint pt-1">
            tab completes · ↑ recalls · or just click anything blue
        </div>
    </div>
);

const RouteListing = () => (
    <div className="mt-1 space-y-0.5">
        {ROUTES.map(route => (
            <Link key={route.href} href={route.href} className="term-row group">
                <span className="ink-faint w-[11ch] shrink-0">drwxr-xr-x</span>
                <span className="group-hover:underline" style={{ color: 'var(--term-blue)' }}>
                    {route.name}/
                </span>
                <span className="ink-muted ml-auto text-[11px]">{route.note}</span>
            </Link>
        ))}
    </div>
);

const WorksListing = () => (
    <div className="mt-1 space-y-0.5">
        {info.works.map(work => (
            <a
                key={work.file}
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="term-row group"
            >
                <span className="ink-faint w-[11ch] shrink-0">
                    {work.kind === 'product' ? 'drwxr-xr-x' : '-rw-r--r--'}
                </span>
                <span
                    className="w-[16ch] shrink-0 group-hover:underline"
                    style={{ color: 'var(--term-blue)' }}
                >
                    {work.file}
                </span>
                <span className="ink-muted min-w-0 flex-1 text-[12px]">{work.description}</span>
            </a>
        ))}
    </div>
);

const PostsListing = () => {
    const posts = readablePosts();
    if (posts.length === 0) return <Hint>no published entries yet</Hint>;

    return (
        <div className="mt-1 space-y-0.5">
            {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="term-row group">
                    <span className="ink-faint w-[11ch] shrink-0">
                        {new Date(post.publishedOn).toISOString().slice(0, 10)}
                    </span>
                    <span className="group-hover:underline" style={{ color: 'var(--term-blue)' }}>
                        {postFile(post.slug)}
                    </span>
                    <span className="ink-muted ml-auto text-[11px]">{post.title}</span>
                </Link>
            ))}
        </div>
    );
};

const ResumeListing = () => (
    <div className="mt-1 space-y-0.5">
        <a href="/resume.pdf" className="term-row group">
            <span className="ink-faint w-[11ch] shrink-0">-rw-r--r--</span>
            <span className="group-hover:underline" style={{ color: 'var(--term-blue)' }}>
                resume.pdf
            </span>
            <span className="ink-muted ml-auto text-[11px]">the printable one</span>
        </a>
        {resumeSections.length > 0 && (
            <div className="ink-muted pt-2 text-[12px]">
                sections: <span className="ink-faint">{resumeSections.join(' · ').toLowerCase()}</span>
            </div>
        )}
    </div>
);

const TagsListing = ({ cwd }: { cwd: Cwd }) => {
    const source =
        cwd === '~/writing'
            ? readablePosts().flatMap(post => post.tags)
            : info.works.flatMap(work => work.tags);

    const counts: Record<string, number> = {};
    source.forEach(tag => {
        counts[tag] = (counts[tag] ?? 0) + 1;
    });

    const sorted = Object.entries(counts).sort(
        (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
    );

    if (sorted.length === 0) return <Hint>no tags here</Hint>;

    return (
        <div className="ink-muted mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[12px]">
            {sorted.map(([tag, count]) => (
                <span key={tag}>
                    {tag}
                    <span className="ink-faint"> ({count})</span>
                </span>
            ))}
        </div>
    );
};

const parentOf = (cwd: Cwd) => (cwd === '~' ? '/' : cwd === '~/writing' ? '/' : '/');

export const runCommand = (raw: string, ctx: ShellContext): CommandResult | 'CLEARED' => {
    const input = raw.trim();
    if (!input) return null;

    const [verb, ...rest] = input.split(/\s+/);
    const arg = rest[0];
    const { cwd } = ctx;

    switch (verb) {
        case 'help':
            return <Help />;

        case 'man': {
            const page = arg?.replace(/\(\d\)$/, '');
            if (!page || page === 'david' || page === 'resume') {
                ctx.navigate('/resume');
                return <div className="ink-muted mt-1">→ /resume</div>;
            }

            const route = ROUTES.find(item => item.name === page);
            if (route) {
                ctx.navigate(route.href);
                return <div className="ink-muted mt-1">→ {route.href}</div>;
            }

            return (
                <>
                    <Err>No manual entry for {page}</Err>
                    <Hint>
                        try <Blue>man david</Blue>
                    </Hint>
                </>
            );
        }

        case 'pwd':
            return <div className="ink-muted mt-1">{cwd}</div>;

        case 'whoami':
            return (
                <div className="mt-1" style={{ color: 'var(--paper-ink)' }}>
                    David Dada — backend + infrastructure engineer
                </div>
            );

        case 'clear':
            ctx.clear();
            return 'CLEARED';

        case 'ls':
        case 'll': {
            if (rest.some(flag => flag.startsWith('--tag'))) return <TagsListing cwd={cwd} />;
            if (cwd === '~/works') return <WorksListing />;
            if (cwd === '~/writing') return <PostsListing />;
            if (cwd === '~/resume') return <ResumeListing />;
            return <RouteListing />;
        }

        case 'cd': {
            if (!arg || arg === '~' || arg === '/') {
                ctx.navigate('/');
                return <div className="ink-muted mt-1">→ /</div>;
            }
            if (arg === '..' || arg === '../') {
                const href = parentOf(cwd);
                ctx.navigate(href);
                return <div className="ink-muted mt-1">→ {href}</div>;
            }

            const target = ROUTES.find(route => route.name === arg.replace(/\/$/, ''));
            if (target) {
                ctx.navigate(target.href);
                return <div className="ink-muted mt-1">→ {target.href}</div>;
            }

            const post = readablePosts().find(
                item => postFile(item.slug) === arg || item.slug.endsWith(arg),
            );
            if (post) {
                ctx.navigate(`/blog/${post.slug}`);
                return <div className="ink-muted mt-1">→ /blog/{post.slug}</div>;
            }

            return <Err>cd: no such directory: {arg}</Err>;
        }

        case 'cat': {
            if (!arg) return <Err>cat: missing operand</Err>;

            if (arg === 'resume' || arg === 'resume.md' || arg === 'david') {
                ctx.navigate('/resume');
                return <div className="ink-muted mt-1">→ /resume</div>;
            }

            if (arg === 'resume.pdf') {
                window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
                return <div className="ink-muted mt-1">opening resume.pdf…</div>;
            }

            if (arg === 'about' || arg === 'about.md') {
                return (
                    <div className="ink-muted measure mt-1">
                        {BIO.map((line, idx) => (
                            <div key={idx}>{line === '' ? ' ' : line}</div>
                        ))}
                    </div>
                );
            }

            const work = info.works.find(item => item.file === arg.replace(/\/$/, ''));
            if (work) {
                return (
                    <div className="mt-1">
                        <div className="ink-muted measure">{work.description}</div>
                        <div className="ink-faint mt-1">{work.tags.join(' · ')}</div>
                        <a
                            href={work.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-block underline"
                            style={{ color: 'var(--term-blue)' }}
                        >
                            {work.url}
                        </a>
                    </div>
                );
            }

            const post = readablePosts().find(
                item => postFile(item.slug) === arg || item.slug.endsWith(arg),
            );
            if (post) {
                return (
                    <div className="mt-1">
                        <div className="ink-muted measure">{post.summary}</div>
                        <div className="ink-faint mt-1">{post.tags.join(' · ')}</div>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="mt-1 inline-block underline"
                            style={{ color: 'var(--term-blue)' }}
                        >
                            read it →
                        </Link>
                    </div>
                );
            }

            return (
                <>
                    <Err>cat: {arg}: no such file</Err>
                    <Hint>
                        try <Blue>ls</Blue> to see what is here
                    </Hint>
                </>
            );
        }

        case 'open': {
            if (!arg) return <Err>open: missing operand</Err>;

            const social = SOCIALS[arg];
            if (social) {
                window.open(social, '_blank', 'noopener,noreferrer');
                return <div className="ink-muted mt-1">opening {arg}…</div>;
            }

            const work = info.works.find(item => item.file === arg.replace(/\/$/, ''));
            if (work) {
                window.open(work.url, '_blank', 'noopener,noreferrer');
                return <div className="ink-muted mt-1">opening {work.name}…</div>;
            }

            return (
                <>
                    <Err>open: unknown target: {arg}</Err>
                    <Hint>try github, linkedin, x, email or resume</Hint>
                </>
            );
        }

        default:
            return (
                <>
                    <Err>zsh: command not found: {verb}</Err>
                    <Hint>
                        try <Blue>help</Blue>
                    </Hint>
                </>
            );
    }
};
