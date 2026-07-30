import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

interface H2Props extends HTMLAttributes<HTMLHeadElement> {
    children: ReactNode;
}

const H2 = ({ children, className = '', ...props }: H2Props) => {
    return (
        <h2 {...props} className={cn(className)}>
            {children}
        </h2>
    );
};

export default H2;
