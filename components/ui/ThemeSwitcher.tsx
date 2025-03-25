import {Sun} from "@phosphor-icons/react/dist/ssr";
import {useTheme} from "next-themes";

export const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    return (
        <div className={"cursor-pointer dark:text-gray-300 dark:hover:text-gray-100 text-gray-500 hover:text-gray-800"}
             onClick={toggleTheme}>
            <Sun size={24}/>
        </div>
    )
}