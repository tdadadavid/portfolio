import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

interface H1Props extends HTMLAttributes<HTMLHeadElement> {
    children: ReactNode;
}

const H1 = ({ children, className = '', ...props }: H1Props) => {
    return (
        <h1 {...props} className={cn('text-[19px]', className)}>
            {children}
        </h1>
    );
};

export default H1;
