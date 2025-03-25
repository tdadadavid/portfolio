"use client"

import {ReactNode, useEffect, useState} from "react";
import {ThemeProvider} from "next-themes";

interface ThemeSwitchProps {
    children?: ReactNode;
}

const ThemeSwitchProvider = ({children}: ThemeSwitchProps) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    })

    if (!mounted) return (<>{children}</>);

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default ThemeSwitchProvider