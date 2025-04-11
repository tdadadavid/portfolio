import { HTMLAttributes, ReactNode } from "react";

interface H1Props extends HTMLAttributes<HTMLHeadElement> {
    children: ReactNode;
}

const H2 = ({ children, className="", ...props }: H1Props) => {
    return (
        <h1
            {...props}
            className="text-gray-800 text-xl font-semibold my-3"
        >
            {children}
        </h1>
    )
}

export default H2;