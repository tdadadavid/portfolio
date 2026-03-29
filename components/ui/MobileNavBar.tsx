import { useEffect, useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { cn } from '@/lib/utils';

const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Contact', href: '/contact' },
    { title: 'Works', href: '/works' },
    { title: 'Blog', href: '/blog' },
];

interface MobileNavBarProps {
    active: 'home' | 'contact' | 'works' | 'blog';
}

export const MobileNavBar = (props: MobileNavBarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <div className="z-50 flex items-center gap-3 sm:hidden">
                <ThemeSwitcher />
                <Hamburger
                    size={20}
                    color={isOpen ? '#f8fafc' : '#5f6775'}
                    toggled={isOpen}
                    toggle={setIsOpen}
                />
            </div>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40 flex items-center justify-center bg-[#0f1624]/82 px-6 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                >
                    <motion.ul
                        initial={{ y: 16, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 16, opacity: 0 }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="w-full max-w-xs rounded-2xl border border-slate-600 bg-slate-900/90 p-6 text-slate-100 shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        {navItems.map(item => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'block rounded-xl border border-transparent px-3 py-3 text-base font-semibold uppercase tracking-[0.18em] transition',
                                        props.active == item.title.toLowerCase() &&
                                            'border-slate-600 bg-slate-800 text-white',
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>
            )}
        </>
    );
};
