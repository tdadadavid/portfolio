import {clsx} from "clsx";

interface NavLinkProps {
    title: string,
    href: string,
    selected: "home" | "works" | "contact" | "blog"
}

export const NavLink = (props: NavLinkProps) => {
    return (
        <a href={props.href}
           className={clsx(props.title == props.selected ? "underline font-bold text-gray-800" : "", "underline-offset-4")}>
            {props.title}
        </a>
    )
}