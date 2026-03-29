import { ReactNode } from 'react';

interface IconLinkProps {
    icon: ReactNode;
    href: string;
}

export const IconLink = (props: IconLinkProps) => {
    return (
        <a
            href={props.href}
            className="paper-surface grid h-10 w-10 place-items-center text-[var(--paper-muted)] transition duration-200 hover:-translate-y-0.5 hover:text-[var(--paper-ink)]"
            target="_blank"
            rel="noreferrer"
        >
            {props.icon}
        </a>
    );
};
