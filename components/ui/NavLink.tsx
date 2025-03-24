interface NavLinkProps {
    title: string,
    href: string
}

export const NavLink = (props: NavLinkProps) => {
    return (
        <a href={props.href}>{props.title}</a>
    )
}