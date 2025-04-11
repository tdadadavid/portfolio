import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

interface ULProps extends HTMLAttributes<HTMLUListElement> {
    children: ReactNode;
}

const UL = ({ children, className = '', ...props }: ULProps) => {
    return (
        <ol {...props} className={cn('my-2 list-disc list-inside pl-8', className)}>
            {children}
        </ol>
    );
};

export default UL;