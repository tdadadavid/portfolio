import { cn } from '@/lib/utils';

interface FrequencyTagProps {
    title: string;
    onClick: (tag: string) => void;
    tiny?: boolean;
}

export const FrequencyTag = (props: FrequencyTagProps) => {
    return (
        <button
            onClick={() => props.onClick(props.title)}
            className={cn(
                'text-xs py-1 px-2 bg-gray-200 border-b border-gray-400 cursor-pointer hover:bg-ice/40 dark:bg-gray-800 dark:hover:bg-ice/50',
                props.tiny && 'scale-90'
            )}
        >
            {props.title.toLowerCase()}
        </button>
    );
};
