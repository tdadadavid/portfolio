import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

interface OLProps extends HTMLAttributes<HTMLOListElement> {
    children: ReactNode;
}

const OL = ({ children, className = '', ...props }: OLProps) => {
    return (
        <ol {...props} className={cn('list-decimal', className)}>
            {children}
        </ol>
    );
};

export default OL;
