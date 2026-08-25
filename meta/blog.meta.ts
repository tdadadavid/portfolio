import { BlogMetadata } from '@/types/blog.type';

// NOTE: No need to manually edit slug anymore, it handles that
// automatically.
// The object key must still be set to the directory name.
export const blogMetadata: Record<string, BlogMetadata> = {
    'busy-waiting': {
        title: 'Busy-Waiting: When Doing Nothing Uses Everything',
        summary:
            'Why a thread can do no useful work and still consume an entire CPU core — and how condition variables replace repeated polling with an efficient sleep-and-wake protocol.',
        publishedOn: '2026-08-25T12:00:00.000Z',
        year: '2026',
        slug: 'busy-waiting',
        tags: ['concurrency', 'operating-systems', 'go', 'synchronization'],
        status: 'done',
        coverImage: {
            src: '/image/busy-waiting-cover.webp',
            alt: 'Network cables connected to rows of servers in a data centre',
        },
    },
    'raft': {
        title: 'Raft',
        summary: 'Raft',
        publishedOn: '2025-10-06T02:10:44',
        year: '2025',
        slug: '',
        tags: ['distributed-systems', 'consensus', 'go', 'raft'],
        status: 'draft',
    },
    'dns': {
        title: 'Domain Name System (DNS)',
        summary:
            'What is actually on the wire: the header, label encoding and compression pointers, walking from root to authoritative, the 512-byte limit, and why TTLs are how long your mistakes last. Built as a resolver in Go.',
        publishedOn: '2025-10-27T19:16:03',
        year: '2025',
        slug: 'dns-server-in-go',
        tags: ['dns', 'go', 'networking', 'protocols'],
        status: 'in-progress',
    },
    'wal': {
      title: 'Write-Ahead Logs',
      summary:
        'How databases keep the promise that an acknowledged write survives a power cut — record layout, fsync, group commit, segment rotation and replay, built up in Go.',
      publishedOn: '2026-07-30T09:00:00.000Z',
      year: '2026',
      slug: 'wal',
      tags: ['wal', 'go', 'db', 'storage', 'distributed-systems'],
      status: 'in-progress'
    },
    'SNA': {
      'title': "Shared-nothing-architecture",
      summary: 'SNA',
      publishedOn: '2026-04-06T21:03:05.177Z',
      year: '2026',
      slug: 'sna',
      tags: ['db', 'distributed-systems', 'disk', 'memory'],
      status: 'draft'
    },
};
