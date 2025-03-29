import {ReactNode} from "react";

interface PopOutButtonProps {
    title: string
    icon: ReactNode,
    action: () => void
}

export const PopOutButton = (props: PopOutButtonProps) => {
    return (
        <button className={"ghost-popup flex items-center justify-center w-full sm:w-[200px]"}>
            <div
                className={"content mt-8 w-full min-w-full sm:max-w[200px] sm:w-[200px] py-3 px-4 flex items-center justify-center gap-4 text-sm sm:text-base " +
                    "rounded-sm dark:text-gray-200 text-gray-900 border-2 dark:bg-nord dark:border-gray-500 border-gray-900 bg-white cursor-pointer"}
                onClick={props.action}>
                <span className={"font-medium"}>{props.title}</span>
                {props.icon}
            </div>
            <div className="popup"></div>
        </button>
    )
}