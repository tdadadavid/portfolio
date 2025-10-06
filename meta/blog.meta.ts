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
        status: 'done',
    },
};
