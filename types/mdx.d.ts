declare module '*.mdx' {
    import { ComponentType } from 'react';

    const MDXComponent: ComponentType;
    export const post: Partial<import('./blog.type').BlogMetadata>;
    export default MDXComponent;
}
