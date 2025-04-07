import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "ghost-popup relative w-full sm:w-[200px]",
        topMargin && "mt-4"
      )}
    >
      <div className="popup" />
      <button
        onClick={action}
        className={cn(
          "cursor-pointer content relative z-10 flex items-center justify-center gap-3 w-full py-3 px-4 text-sm sm:text-base font-semibold border-2 rounded-sm transition duration-200",
          "dark:bg-ice bg-white text-gray-800 border-2 dark:border-ice border-gray-800 dark:text-white hover:brightness-110"
        )}
      >
        {left && <>{icon}</>}
        <span>{title}</span>
        {!left && <>{icon}</>}
      </button>
    </div>
  );
};

