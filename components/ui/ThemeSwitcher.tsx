'use client';

import { Moon, Sun } from '@phosphor-icons/react/dist/ssr';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    if (!mounted) return null;

    return (
        <button
            type="button"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid h-7 w-7 cursor-pointer place-items-center rounded-[4px] text-[var(--paper-muted)] transition-colors duration-200 hover:bg-[var(--paper-accent-soft)] hover:text-[var(--paper-bright)]"
            onClick={toggleTheme}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'dark' ? <Moon size={15} /> : <Sun size={15} />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};
