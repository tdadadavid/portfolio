'use client';

import { useState, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react';

import info from '@/misc/info';
import { NavLink } from '@/components/ui/NavLink';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { MobileNavBar } from '@/components/ui/MobileNavBar';
import type { NavLinkType } from '@/types/types.navigation';
import { PANE_ROUTES, useEmbeddedPane, useSplitWorkspace } from './split-state';

interface TerminalWindowProps {
    currentPage: NavLinkType;
    path: string;
    status?: ReactNode;
    children: ReactNode;
}

const SplitButton = ({ active, onClick }: { active: boolean; onClick: () => void }) => (
    <button
        type="button"
        onClick={onClick}
        className="term-split-button"
        aria-label={active ? 'Close split pane' : 'Open split pane'}
        aria-pressed={active}
        title={`${active ? 'Close' : 'Open'} split pane · Ctrl/Cmd + \\`}
    >
        <span aria-hidden="true">▥</span>
        <span className="hidden lg:inline">split</span>
    </button>
);

export const TerminalWindow = ({ currentPage, path, status, children }: TerminalWindowProps) => {
    const embedded = useEmbeddedPane();
    const workspace = useSplitWorkspace();
    const [dragging, setDragging] = useState(false);

    if (embedded) return <>{children}</>;

    const secondaryLabel =
        PANE_ROUTES.find(route => route.href === workspace.secondaryPath)?.label ??
        workspace.secondaryPath;

    const resize = (clientX: number, target: HTMLElement) => {
        const bounds = target.parentElement?.getBoundingClientRect();
        if (!bounds) return;
        const next = ((clientX - bounds.left) / bounds.width) * 100;
        workspace.setRatio(Math.min(72, Math.max(28, next)));
    };

    const onDividerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        const direction = event.key === 'ArrowLeft' ? -2 : 2;
        workspace.setRatio(Math.min(72, Math.max(28, workspace.ratio + direction)));
    };

    const onDividerPointerDown = (event: PointerEvent<HTMLDivElement>) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        setDragging(true);
        resize(event.clientX, event.currentTarget);
    };

    const onDividerPointerMove = (event: PointerEvent<HTMLDivElement>) => {
        if (dragging) resize(event.clientX, event.currentTarget);
    };

    return (
        <div className={`term-page ${workspace.splitOpen ? 'term-page--split' : ''}`}>
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
                    <SplitButton active={workspace.splitOpen} onClick={workspace.toggleSplit} />
                    <ThemeSwitcher />
                </nav>

                <div className="ml-auto flex items-center gap-1 sm:hidden">
                    <SplitButton active={workspace.splitOpen} onClick={workspace.toggleSplit} />
                    <MobileNavBar active={currentPage} />
                </div>
            </header>

            {workspace.splitOpen ? (
                <div className="term-split-workspace">
                    <div className="term-split-tabs" role="tablist" aria-label="Portfolio panes">
                        <button
                            type="button"
                            role="tab"
                            aria-selected={workspace.activePane === 'primary'}
                            onClick={() => workspace.setActivePane('primary')}
                        >
                            {path}
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={workspace.activePane === 'secondary'}
                            onClick={() => workspace.setActivePane('secondary')}
                        >
                            {secondaryLabel}
                        </button>
                    </div>

                    <div
                        className="term-split-grid"
                        style={{ '--split-ratio': `${workspace.ratio}%` } as React.CSSProperties}
                    >
                        <section
                            className={`term-pane ${workspace.activePane === 'primary' ? 'term-pane--active' : ''}`}
                            data-mobile-visible={workspace.activePane === 'primary'}
                            onPointerDown={() => workspace.setActivePane('primary')}
                        >
                            <div className="term-pane-head">
                                <span className="term-pane-focus" aria-hidden="true" />
                                <span className="truncate">{path}</span>
                                <span className="ink-faint ml-auto">primary</span>
                            </div>
                            <main className="term-content term-pane-scroll">{children}</main>
                        </section>

                        <div
                            className={`term-split-divider ${dragging ? 'term-split-divider--dragging' : ''}`}
                            role="separator"
                            aria-label="Resize split panes"
                            aria-orientation="vertical"
                            aria-valuemin={28}
                            aria-valuemax={72}
                            aria-valuenow={Math.round(workspace.ratio)}
                            tabIndex={0}
                            onDoubleClick={() => workspace.setRatio(50)}
                            onKeyDown={onDividerKeyDown}
                            onPointerDown={onDividerPointerDown}
                            onPointerMove={onDividerPointerMove}
                            onPointerUp={event => {
                                setDragging(false);
                                event.currentTarget.releasePointerCapture(event.pointerId);
                            }}
                            onPointerCancel={() => setDragging(false)}
                        />

                        <section
                            className={`term-pane ${workspace.activePane === 'secondary' ? 'term-pane--active' : ''}`}
                            data-mobile-visible={workspace.activePane === 'secondary'}
                            onPointerDown={() => workspace.setActivePane('secondary')}
                        >
                            <div className="term-pane-head">
                                <span className="term-pane-focus" aria-hidden="true" />
                                <label className="sr-only" htmlFor="secondary-pane-route">
                                    Second pane page
                                </label>
                                <select
                                    id="secondary-pane-route"
                                    value={workspace.secondaryPath}
                                    onChange={event =>
                                        workspace.setSecondaryPath(event.target.value)
                                    }
                                    className="term-pane-select"
                                >
                                    {!PANE_ROUTES.some(
                                        route => route.href === workspace.secondaryPath,
                                    ) && (
                                        <option value={workspace.secondaryPath}>
                                            {workspace.secondaryPath}
                                        </option>
                                    )}
                                    {PANE_ROUTES.map(route => (
                                        <option key={route.href} value={route.href}>
                                            {route.label}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    type="button"
                                    onClick={workspace.closeSplit}
                                    className="term-pane-close"
                                    aria-label="Close second pane"
                                    title="Close split pane"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="term-content term-pane-scroll">
                                {workspace.secondaryContent}
                            </div>
                        </section>
                    </div>
                </div>
            ) : (
                <main className="term-content">{children}</main>
            )}

            <footer className="term-statusbar">
                <span className="truncate">
                    {workspace.splitOpen && workspace.activePane === 'secondary'
                        ? secondaryLabel
                        : path}
                </span>
                <span className="hidden sm:inline">zsh</span>
                <span className="hidden sm:inline">utf-8</span>
                {workspace.splitOpen && (
                    <span className="hidden md:inline">
                        pane {workspace.activePane === 'primary' ? '1' : '2'} of 2
                    </span>
                )}
                <span className="ml-auto flex items-center gap-4">
                    {!workspace.splitOpen || workspace.activePane === 'primary' ? status : null}
                </span>
            </footer>
        </div>
    );
};
