import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

interface BlockQuoteProps extends HTMLAttributes<HTMLQuoteElement> {
    children: ReactNode;
}

const BlockQuote = ({ children, className = '', ...props }: BlockQuoteProps) => {
    return (
        <blockquote {...props} className={cn('mdx my-4 bg-[#e1e2e5] p-8', className)}>
            {children}
        </blockquote>
    );
};

export default BlockQuote;