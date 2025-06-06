import info from '@/misc/info';
import { NavLink } from './NavLink';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { IconLink } from './IconLink';
import { NavLinkType } from '@/types/types.navigation';
import { MobileNavBar } from '@/components/ui/MobileNavBar';
import { Avatar } from './Avatar';

interface NavBarProps {
    currentPage: NavLinkType;
}

const HomeRow = () => {
    return (
        <div className="flex items-center gap-3">
            <Avatar />
            <div className="flex flex-col">
                <h4 className={'font-bold text-gray-800 dark:text-gray-300/80'}>{info.me}</h4>
                <h6 className="dark:text-gray-300 text-gray-500 hidden text-xs">
                    Software Engineer (Backend)
                </h6>
            </div>
        </div>
    );
};

const ExternalLinks = () => {
    return (
        <div className={'hidden sm:flex items-center gap-3'}>
            <IconLink icon={<LinkedinLogo size={24} />} href={info.socials.linkedin} />
            <IconLink icon={<GithubLogo size={24} />} href={info.github} />
            <ThemeSwitcher />
        </div>
    );
};

export const NavBar = (props: NavBarProps) => {
    return (
        <header className="flex items-center justify-between w-full bg-white dark:bg-nord border-b-gray-300 sm:py-4">
            <HomeRow />
            <ul className="sm:flex gap-4 items-center hidden">
                {info.navLinks.map((link, idx) => (
                    <li
                        key={idx}
                        className={
                            'dark:text-gray-300 dark:hover:text-gray-100 text-gray-500 hover:text-gray-800'
                        }
                    >
                        <NavLink href={link.href} title={link.title} selected={props.currentPage} />
                    </li>
                ))}
            </ul>
            <ExternalLinks />
            <MobileNavBar active={props.currentPage} />
        </header>
    );
};
