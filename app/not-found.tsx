"use client"

import {motion} from "framer-motion"
import {Question} from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const NotFoundPage = () => {
    return (
        <main
            className="grid place-items-center min-w-full min-h-screen p-8 bg-white dark:bg-nord">
            <motion.section
                className="text-center flex flex-col items-center max-w-md"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <motion.div
                    initial={{scale: 0, rotate: -180}}
                    animate={{scale: 1, rotate: 0}}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                    }}
                    className="text-gray-500 dark:text-gray-300 mb-6"
                >
                    <Question size={120} weight="duotone"/>
                </motion.div>

                <motion.h3
                    className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: 0.5}}
                >
                    404 | There&apos;s Nothing to See Here
                </motion.h3>

                <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.5, duration: 0.5}}
                >
                    Seems you got lost. Don&apos;t worry,
                    <motion.span
                        whileHover={{
                            scale: 1.05,
                            color: "#3B82F6",
                            transition: {duration: 0.2},
                        }}
                    >
                        <Link href="/" className="ml-1 text-blue-500 dark:text-blue-400 font-medium hover:underline">take
                            me home.
                        </Link>
                    </motion.span>
                </motion.p>

            </motion.section>
        </main>
    )
}

export default NotFoundPage

