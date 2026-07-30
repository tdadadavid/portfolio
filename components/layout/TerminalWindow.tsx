'use client';

import type { ReactNode } from 'react';

import info from '@/misc/info';
import { NavLink } from '@/components/ui/NavLink';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { MobileNavBar } from '@/components/ui/MobileNavBar';
import type { NavLinkType } from '@/types/types.navigation';

interface TerminalWindowProps {
    currentPage: NavLinkType;
    path: string;
    status?: ReactNode;
    children: ReactNode;
}

export const TerminalWindow = ({
    currentPage,
    path,
    status,
    children,
}: TerminalWindowProps) => {
    return (
        <div className="term-page">
            <header className="term-titlebar">
                <div className="hidden shrink-0 items-center gap-2 sm:flex">
                    <span className="term-dot" />
                    <span className="term-dot" />
                    <span className="term-dot" />
                </div>

                <span className="ink-faint hidden min-w-0 truncate text-[11px] lg:block">
                    david@obadafidi — {path}
                </span>

                <nav className="ml-auto hidden items-center gap-1 sm:flex">
                    {info.navLinks.map(link => (
                        <NavLink
                            key={link.href}
                            href={link.href}
                            title={link.title}
                            selected={currentPage}
                        />
                    ))}
                    <span
                        className="mx-1 h-4 w-px"
                        style={{ background: 'var(--paper-line-strong)' }}
                    />
                    <ThemeSwitcher />
                </nav>

                <div className="ml-auto sm:hidden">
                    <MobileNavBar active={currentPage} />
                </div>
            </header>

            <main className="term-content">{children}</main>

            <footer className="term-statusbar">
                <span className="truncate">{path}</span>
                <span className="hidden sm:inline">zsh</span>
                <span className="hidden sm:inline">utf-8</span>
                <span className="ml-auto flex items-center gap-4">{status}</span>
            </footer>
        </div>
    );
};
