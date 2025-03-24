import {ReactNode} from "react";

interface IconLinkProps {
    icon: ReactNode
    href: string
}

export const IconLink = (props: IconLinkProps) => {
    return (
        <a href={props.href} className={"text-gray-500 cursor-pointer hover:text-gray-800 block"} target="_blank"
           rel="noreferrer">
            {props.icon}
        </a>
    )
}