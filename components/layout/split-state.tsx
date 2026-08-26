'use client';

import { createContext, useContext, type ReactNode } from 'react';

export type ActivePane = 'primary' | 'secondary';

export const PANE_ROUTES = [
    { href: '/', label: '~ / home' },
    { href: '/works', label: '~/works' },
    { href: '/blog', label: '~/writing' },
    { href: '/resume', label: '~/resume' },
    { href: '/contact', label: '~/contact' },
    { href: '/blog/post/cpu-pipelining', label: '~/writing/cpu-pipelining.md' },
    { href: '/blog/post/busy-waiting', label: '~/writing/busy-waiting.md' },
] as const;

interface SplitWorkspaceValue {
    splitOpen: boolean;
    toggleSplit: () => void;
    closeSplit: () => void;
    secondaryPath: string;
    setSecondaryPath: (path: string) => void;
    activePane: ActivePane;
    setActivePane: (pane: ActivePane) => void;
    ratio: number;
    setRatio: (ratio: number) => void;
    secondaryContent: ReactNode;
}

export const SplitWorkspaceContext = createContext<SplitWorkspaceValue | null>(null);

export const useSplitWorkspace = () => {
    const value = useContext(SplitWorkspaceContext);
    if (!value) throw new Error('useSplitWorkspace must be used inside SplitWorkspaceProvider');
    return value;
};

const EmbeddedPaneContext = createContext(false);

export const EmbeddedPaneProvider = ({ children }: { children: ReactNode }) => (
    <EmbeddedPaneContext.Provider value>{children}</EmbeddedPaneContext.Provider>
);

export const useEmbeddedPane = () => useContext(EmbeddedPaneContext);

type PaneNavigate = ((href: string) => void) | null;

const PaneNavigationContext = createContext<PaneNavigate>(null);

export const PaneNavigationProvider = ({
    navigate,
    children,
}: {
    navigate: (href: string) => void;
    children: ReactNode;
}) => <PaneNavigationContext.Provider value={navigate}>{children}</PaneNavigationContext.Provider>;

export const usePaneNavigation = () => useContext(PaneNavigationContext);
