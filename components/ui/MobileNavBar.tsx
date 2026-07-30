'use client';

import { useEffect, useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { cn } from '@/lib/utils';
import info from '@/misc/info';
import type { NavLinkType } from '@/types/types.navigation';

interface MobileNavBarProps {
    active: NavLinkType;
}

export const MobileNavBar = (props: MobileNavBarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <div className="z-50 flex items-center gap-1 sm:hidden">
                <ThemeSwitcher />
                <Hamburger size={16} color="currentColor" toggled={isOpen} toggle={setIsOpen} />
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40 flex items-center justify-center px-6 backdrop-blur-sm"
                    style={{ background: 'color-mix(in oklab, var(--paper) 88%, transparent)' }}
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', duration: 0.25 }}
                        className="term-chrome w-full max-w-xs"
                        onClick={event => event.stopPropagation()}
                    >
                        <div className="term-bar">
                            <span className="term-dot" />
                            <span className="term-dot" />
                            <span className="term-dot" />
                            <span className="ink-faint ml-2 text-[11px]">cd</span>
                        </div>

                        <ul className="px-3 py-3 text-[13px]">
                            {info.navLinks.map(item => {
                                const isActive = props.active === item.title;
                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                'flex items-baseline gap-2 rounded-[4px] px-2 py-2',
                                                isActive && 'bg-[var(--paper-accent-soft)]',
                                            )}
                                        >
                                            <span className="term-sym">$</span>
                                            <span
                                                style={{
                                                    color: isActive
                                                        ? 'var(--paper-bright)'
                                                        : 'var(--term-blue)',
                                                }}
                                            >
                                                cd {item.title === 'home' ? '~' : item.title}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};
