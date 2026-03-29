import { cn } from '@/lib/utils';

interface FrequencyTagProps {
    title: string;
    isSelected: boolean;
    tiny?: boolean;
    onClick: (tag: string) => void;
}

export const FrequencyTag = (props: FrequencyTagProps) => {
    return (
        <button
            type="button"
            onClick={() => props.onClick(props.title)}
            className={cn(
                'paper-surface whitespace-nowrap px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--paper-muted)] transition hover:-translate-y-0.5 hover:text-[var(--paper-ink)]',
                props.tiny && [
                    'cursor-default text-[10px] uppercase tracking-[0.16em] !pointer-events-none',
                ],
                props.isSelected && '!bg-[var(--paper-accent)] !text-[var(--paper)]',
            )}
        >
            {props.title}
        </button>
    );
};
