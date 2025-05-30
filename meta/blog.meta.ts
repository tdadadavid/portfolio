import { BlogMetadata } from '@/types/blog.type';

// NOTE: No need to manually edit slug anymore, it handles that
// automatically. 
// The object key must still be set to the directory name.
export const blogMetadata: Record<string, BlogMetadata> = {
    'distributed-sys': {
        title: 'Distributed Systems I',
        summary: 'Introduction to Distributed Systems [The Problem]',
        publishedOn: '2025-05-22T22:00:18.147Z',
        year: '2025',
        slug: '',
        tags: ['distributed-systems', 'storage', 'communication', 'go'],
        status: 'done',
    },
    'the-solution': {
        title: 'Distributed Systems II',
        summary: 'Introduction to Distributed Systems [The Solution]',
        publishedOn: '2025-05-22T22:00:18.147Z',
        year: '2025',
        slug: '',
        tags: ['distributed-systems', 'storage', 'communication'],
        status: 'draft',
    },
    'false-assumptions': {
        title: 'Distributed Systems III',
        summary: 'Introduction to Distributed Systems [Assumptions]',
        publishedOn: '2025-05-22T22:00:18.147Z',
        year: '2025',
        slug: '',
        tags: ['distributed-systems', 'network', 'communication'],
        status: 'draft',
    },
    'map-reduce': {
        title: 'MapReduce',
        summary: 'Distributed System Framework',
        publishedOn: '2025-05-22T22:00:18.147Z',
        year: '2025',
        slug: '',
        tags: ['distributed-systems', 'go', 'mapreduce'],
        status: 'draft',
    },
};
