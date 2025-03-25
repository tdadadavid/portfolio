import {Spiral as Hamburger} from 'hamburger-react'

export const MobileNavBar = () => {
    return (
        <section className={"flex sm:hidden"}>
            <Hamburger size={24} color={"#6a7282"}/>
        </section>
    )
}