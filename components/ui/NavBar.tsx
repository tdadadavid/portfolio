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
            <div className="flex flex-col leading-tight">
                <h4 className="font-[family-name:var(--font-serif)] text-lg font-semibold tracking-wide">
                    {info.me}
                </h4>
                <h6 className="ink-muted hidden text-[11px] uppercase tracking-[0.2em] sm:block">
                    Backend Engineer
                </h6>
            </div>
        </div>
    );
};

const ExternalLinks = () => {
    return (
        <div className="hidden items-center gap-2 sm:flex">
            <IconLink icon={<LinkedinLogo size={18} />} href={info.socials.linkedin} />
            <IconLink icon={<GithubLogo size={18} />} href={info.github} />
            <ThemeSwitcher />
        </div>
    );
};

export const NavBar = (props: NavBarProps) => {
    return (
        <header className="paper-surface sticky top-3 z-30 mb-4 flex items-center justify-between gap-4 px-4 py-3 sm:top-5 sm:px-5">
            <HomeRow />
            <ul className="hidden items-center gap-2 sm:flex">
                {info.navLinks.map((link, idx) => (
                    <li key={idx}>
                        <NavLink href={link.href} title={link.title} selected={props.currentPage} />
                    </li>
                ))}
            </ul>
            <ExternalLinks />
            <MobileNavBar active={props.currentPage} />
        </header>
    );
};
