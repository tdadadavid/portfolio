export type BlogStatus = 'done' | 'in-progress' | 'draft';

export interface BlogMetadata {
    title: string;
    summary: string;
    publishedOn: string;
    year: string;
    slug: string;
    tags: string[];
    status: BlogStatus;
}

export interface Blog {
    metadata: BlogMetadata;
    content: string; 
}
