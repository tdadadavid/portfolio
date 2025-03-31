"use client"

import {Container} from "@/components/layout/Container";
import {NavBar} from "@/components/ui/NavBar";
import {GridBackground} from "@/components/other/GridBackground";

const ContactPage = () => {
    return (
        <Container>
            <NavBar currentPage={"contact"}/>
            <GridBackground>
                <h3>Got a cool idea or want to chat? Don&amp;t just sit</h3>
            </GridBackground>
        </Container>
    )
}

export default ContactPage;