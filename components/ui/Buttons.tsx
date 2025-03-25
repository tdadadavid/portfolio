import {ReactNode} from "react";

interface PopOutButtonProps {
    title: string
    icon: ReactNode,
    action: () => void
}

export const PopOutButton = (props: PopOutButtonProps) => {
    return (
        <button className={"ghost-popup flex items-center justify-center"}>
            <div className={"content mt-8 w-[200px] py-3 px-4 flex items-center justify-center gap-4 text-md " +
                "rounded-sm dark:text-gray-200 text-gray-900 border-2 dark:bg-nord dark:border-gray-500 border-gray-900 bg-white cursor-pointer"}
                 onClick={props.action}>
                <span className={"font-medium"}>{props.title}</span>
                {props.icon}
            </div>
            <div className="popup"></div>
        </button>
    )
}