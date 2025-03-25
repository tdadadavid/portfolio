import meta from "@/data/meta"
import {NavLink} from "./NavLink"
import icon from "@/app/icon.svg"
import Image from "next/image"
import {GithubLogo, LinkedinLogo} from "@phosphor-icons/react/dist/ssr"
import {ThemeSwitcher} from "@/components/ui/ThemeSwitcher"
import {IconLink} from "./IconLink"
import {NavLinkType} from "@/types/types.navigation"

interface NavBarProps {
    currentPage: NavLinkType
}

const HomeRow = () => {
    return (
        <div className="flex items-center gap-3">
            <Image width={32} height={32} src={icon} alt="David Dada"/>
            <div className="flex flex-col">
                <h4 className={"font-bold"}>David Dada</h4>
                <h6 className="dark:text-gray-300 text-gray-500 text-xs">Software Engineer (Backend)</h6>
            </div>
        </div>
    )
}

const ExternalLinks = () => {
    return (
        <div className={"flex items-center gap-3"}>
            <IconLink icon={<LinkedinLogo size={24}/>} href={meta.socials.linkedin}/>
            <IconLink icon={<GithubLogo size={24}/>} href={meta.github}/>
            <ThemeSwitcher/>
        </div>
    )
}

export const NavBar = (props: NavBarProps) => {
    return (
        <header className="flex items-center justify-between w-full bg-white dark:bg-nord border-b-gray-300 py-4">
            <HomeRow/>
            <ul className="flex gap-4 items-center">
                {meta.navLinks.map((link, idx) => (
                    <li key={idx}
                        className={"dark:text-gray-300 dark:hover:text-gray-100 text-gray-500 hover:text-gray-800"}>
                        <NavLink href={link.href} title={link.title} selected={props.currentPage}/>
                    </li>
                ))}
            </ul>
            <ExternalLinks/>
        </header>
    )
}