import {cn} from "@/lib/utils"
import React, {ReactNode} from "react";

interface GridBackgroundProps {
    children: ReactNode | null
}

export const GridBackground = (props: GridBackgroundProps) => {
    return (
        <div className="relative flex h-[50rem] w-full bg-white dark:bg-nord">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:20px_20px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262e44_1px,transparent_1px),linear-gradient(to_bottom,#262e44_1px,transparent_1px)]",
                )}
            />
            {/* Faded */}
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-nord"></div>
            <div className={"relative z-20 sm:px-16 sm:py-16 py-8 px-4"}>
                {props.children}
            </div>
        </div>
    );
}
