import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PopOutButtonProps {
    title: string;
    icon: ReactNode;
    action: () => void;
    topMargin?: boolean;
    left?: boolean;
}

export const PopOutButton = ({
    title,
    icon,
    action,
    topMargin = true,
    left = false,
}: PopOutButtonProps) => {
    return (
        <div className={cn('group relative w-full sm:w-[210px]', topMargin && 'mt-4')}>
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-xl bg-[var(--paper-accent-soft)] transition duration-200 group-hover:translate-y-1" />
            <button
                type="button"
                onClick={action}
                className={cn(
                    'relative z-10 flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition duration-200 sm:text-base',
                    'border-[var(--paper-line)] bg-[var(--paper-soft)] text-[var(--paper-ink)] hover:-translate-y-0.5',
                )}
            >
                {left && <>{icon}</>}
                <span>{title}</span>
                {!left && <>{icon}</>}
            </button>
        </div>
    );
};
