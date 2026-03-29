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
            className="paper-surface grid h-10 w-10 cursor-pointer place-items-center text-[var(--paper-muted)] transition duration-200 hover:-translate-y-0.5 hover:text-[var(--paper-ink)]"
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
                    {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};
