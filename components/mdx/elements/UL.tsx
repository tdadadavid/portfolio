import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

interface ULProps extends HTMLAttributes<HTMLUListElement> {
    children: ReactNode;
}

const UL = ({ children, className = '', ...props }: ULProps) => {
    return (
        <ul {...props} className={cn('list-disc', className)}>
            {children}
        </ul>
    );
};

export default UL;
