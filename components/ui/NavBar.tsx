import meta from "@/data/meta"
import { NavLink } from "./NavLink"

export const NavBar = () => { 
    return (
        <header>
            {meta.navLinks.map(link => (
                <NavLink href={link.href} title={link.title} key={link.href} />
            ))}
        </header>
    )
}