"use client"

import {Moon, Sun} from "@phosphor-icons/react/dist/ssr"
import {useTheme} from "next-themes"
import {AnimatePresence, motion} from "framer-motion"
import {useEffect, useState} from "react"

export const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    if (!mounted) return null

    return (
        <div
            className="cursor-pointer dark:text-[#6a7282] dark:hover:text-gray-100 text-gray-500 hover:text-gray-800"
            onClick={toggleTheme}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{rotate: -180, opacity: 0}}
                    animate={{rotate: 0, opacity: 1}}
                    exit={{rotate: 180, opacity: 0}}
                    transition={{duration: 0.2}}
                >
                    {theme === "dark" ? <Moon size={24}/> : <Sun size={24}/>}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

