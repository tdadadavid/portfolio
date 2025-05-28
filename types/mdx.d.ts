declare module '*.mdx' {
    import { ComponentType } from 'react';

    const MDXComponent: ComponentType;
    export const metadata: Record<string, any>;
    export default MDXComponent;
}
