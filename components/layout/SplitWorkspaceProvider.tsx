'use client';

import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';

import { SplitPaneContent } from './SplitPaneContent';
import { SplitWorkspaceContext, type ActivePane } from './split-state';

export const SplitWorkspaceProvider = ({ children }: { children: ReactNode }) => {
    const [splitOpen, setSplitOpen] = useState(false);
    const [secondaryPath, setSecondaryPath] = useState('/works');
    const [activePane, setActivePane] = useState<ActivePane>('primary');
    const [ratio, setRatio] = useState(50);

    const closeSplit = useCallback(() => {
        setSplitOpen(false);
        setActivePane('primary');
    }, []);

    const toggleSplit = useCallback(() => {
        setSplitOpen(current => {
            const next = !current;
            setActivePane(next ? 'secondary' : 'primary');
            return next;
        });
    }, []);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === '\\') {
                event.preventDefault();
                toggleSplit();
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [toggleSplit]);

    const secondaryContent = useMemo(
        () => <SplitPaneContent path={secondaryPath} navigate={setSecondaryPath} />,
        [secondaryPath],
    );

    const value = useMemo(
        () => ({
            splitOpen,
            toggleSplit,
            closeSplit,
            secondaryPath,
            setSecondaryPath,
            activePane,
            setActivePane,
            ratio,
            setRatio,
            secondaryContent,
        }),
        [activePane, closeSplit, ratio, secondaryContent, secondaryPath, splitOpen, toggleSplit],
    );

    return (
        <SplitWorkspaceContext.Provider value={value}>{children}</SplitWorkspaceContext.Provider>
    );
};
