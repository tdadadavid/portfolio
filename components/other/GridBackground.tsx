import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface GridBackgroundProps {
    children: ReactNode | null;
    isCentered?: boolean;
}

export const GridBackground = ({ children, isCentered = false }: GridBackgroundProps) => {
    return (
        <div className="paper-frame paper-grid relative isolate mt-7 overflow-hidden p-5 sm:p-8">
            <div className="pointer-events-none absolute -left-12 top-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgb(66_153_225_/_0.16),_transparent_70%)] blur-sm dark:bg-[radial-gradient(circle,_rgb(71_132_255_/_0.28),_transparent_72%)]" />
            <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgb(158_103_68_/_0.14),_transparent_72%)] blur-sm dark:bg-[radial-gradient(circle,_rgb(253_186_116_/_0.1),_transparent_75%)]" />
            <div
                className={cn(
                    'relative z-20 py-5 sm:py-8',
                    isCentered && 'flex flex-col items-center justify-center text-center mx-auto',
                )}
            >
                {children}
            </div>
        </div>
    );
};
