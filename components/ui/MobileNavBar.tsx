import {useEffect, useState} from "react";
import {Spiral as Hamburger} from "hamburger-react";
import {motion} from "framer-motion";
import Link from "next/link";
import meta from "@/data/meta";
import {ThemeSwitcher} from "@/components/ui/ThemeSwitcher";

const navItems = [
    {title: "Contact", href: "/contact"},
    {title: "Works", href: "/works"},
    {title: "Blog", href: "/blog"},
    {title: "GitHub", href: meta.github},
    {title: "LinkedIn", href: meta.socials.linkedin},
];

export const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <div className="flex sm:hidden z-50 items-center gap-3">
                <ThemeSwitcher/>
                <Hamburger size={24} color={isOpen ? "#fff" : "#6a7282"} toggled={isOpen} toggle={setIsOpen}/>
            </div>
            {isOpen && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="fixed inset-0 bg-nord flex justify-center items-center z-40"
                    onClick={() => setIsOpen(false)}
                >
                    <motion.ul
                        initial={{x: "100%"}}
                        animate={{x: 0}}
                        exit={{x: "100%"}}
                        transition={{type: "tween", duration: 0.3}}
                        className="flex flex-col gap-6 text-white text-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        {navItems.map((item, idx) => (
                            <li key={idx}>
                                <Link href={item.href} className="hover:underline" onClick={() => setIsOpen(false)}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>
            )}
        </>
    );
};
