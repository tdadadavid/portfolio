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
            onClick={() => props.onClick(props.title)}
            className={cn(
                'text-xs py-1 px-2 bg-gray-200 border-b border-gray-400 cursor-pointer hover:bg-ice/40 dark:bg-gray-800 dark:hover:bg-ice/50',
                props.tiny && [
                    'scale-90 !cursor-default !pointer-events-none',
                    'hover:!bg-transparent dark:!hover:bg-transparent',
                ],
                props.isSelected && '!bg-ice dark:!bg-ice font-bold decoration-blue-800',
            )}
        >
            {props.title.toLowerCase()}
        </button>
    );
};
