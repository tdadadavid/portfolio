import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

interface OLProps extends HTMLAttributes<HTMLOListElement> {
    children: ReactNode;
}

const OL = ({ children, className = '', ...props }: OLProps) => {
    return (
        <ol {...props} className={cn('my-4 list-decimal list-inside pl-8', className)}>
            {children}
        </ol>
    );
};

export default OL;
