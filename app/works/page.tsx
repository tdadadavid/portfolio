"use client"

import {Container} from "@/components/layout/Container";
import {NavBar} from "@/components/ui/NavBar";
import {GridBackground} from "@/components/other/GridBackground";

const WorksPage = () => {
    return (
        <Container>
            <NavBar currentPage={"works"}/>
            <GridBackground>

            </GridBackground>
        </Container>
    );
}

export default WorksPage;