import { HTMLAttributes, ReactNode } from 'react';

interface H2Props extends HTMLAttributes<HTMLHeadElement> {
    children: ReactNode;
}

const H2 = ({ children, className = '', ...props }: H2Props) => {
    return (
        <h1 {...props} className="dark:text-gray-200 text-gray-800 text-xl font-semibold my-3 mt-6">
            {children}
        </h1>
    );
};

export default H2;
