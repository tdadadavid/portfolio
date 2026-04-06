import { BlogMetadata } from '@/types/blog.type';

// NOTE: No need to manually edit slug anymore, it handles that
// automatically.
// The object key must still be set to the directory name.
export const blogMetadata: Record<string, BlogMetadata> = {
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
        summary: 'DNS',
        publishedOn: '2025-10-27T19:16:03',
        year: '2025',
        slug: 'dns-server-in-go',
        tags: ['dns', 'go'],
        status: 'done',
    },
    'wal': {
      title: 'Write-Ahead-Log 🪵',
      summary: 'WAL',
      publishedOn: '2026-04-06T21:03:05.177Z',
      year: '2026',
      slug: 'wal',
      tags: ['wal', 'go', 'db'],
      status: 'draft'
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
