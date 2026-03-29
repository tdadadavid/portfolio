import { clsx } from 'clsx';

interface NavLinkProps {
    title: string;
    href: string;
    selected: 'home' | 'works' | 'contact' | 'blog';
}

export const NavLink = (props: NavLinkProps) => {
    const isActive = props.title == props.selected;

    return (
        <a
            href={props.href}
            className={clsx(
                'rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 sm:text-[11px]',
                isActive
                    ? 'bg-[var(--paper-accent)] text-[var(--paper)]'
                    : 'text-[var(--paper-muted)] hover:text-[var(--paper-ink)]',
            )}
        >
            {props.title}
        </a>
    );
};
