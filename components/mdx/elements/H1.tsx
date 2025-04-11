import { HTMLAttributes, ReactNode } from "react";

interface H1Props extends HTMLAttributes<HTMLHeadElement> {
    children: ReactNode;
}

const H1 = ({ children, className="", ...props }: H1Props) => {
    return (
        <h1
            {...props}
            className="text-gray-800 text-2xl font-bold my-4"
        >
            {children}
        </h1>
    )
}

export default H1;