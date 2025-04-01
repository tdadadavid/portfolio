"use client"

import {Container} from "@/components/layout/Container";
import {NavBar} from "@/components/ui/NavBar";
import {GridBackground} from "@/components/other/GridBackground";
import meta from "@/data/meta";

const ContactPage = () => {
    return (
        <Container>
            <NavBar currentPage={"contact"}/>
            <GridBackground>
                <h2 className={"mt-4 font-bold text-4xl dark:text-gray-200 text-gray-800"}>Let&apos;s Build
                    Something Cool!</h2>
                <h3 className={"my-4 dark:text-gray-300 text-gray-500 leading-8"}>
                    I&apos;m a backend developer passionate about creating scalable and efficient solutions. If you have
                    a challenging problem to solve or a project that requires a strong backend foundation, let&apos;s
                    connect.
                </h3>
                <a href={"/resume.pdf"} className={"my-1 dark:text-gray-300 text-gray-500 leading-8 underline"}>You can
                    find my resume here</a>
                <h3 className={"mt-1 dark:text-gray-300 text-gray-500 leading-8"}>
                    <b>Email:</b>{' '}<a href={`mailto:${meta.email}`} className={"underline"}>{meta.email}</a>
                </h3>
                <h3 className={"my-1 dark:text-gray-300 text-gray-500 leading-8"}>
                    <b>GitHub:</b>{' '}<a href={meta.github} target={"_blank"} className={"underline"}>{meta.github}</a>
                </h3>
                <h3 className={"my-1 dark:text-gray-300 text-gray-500 leading-8"}>
                    <b>LinkedIn:</b>{' '}<a href={meta.socials.linkedin} target={"_blank"}
                                            className={"underline"}>{meta.socials.linkedin}</a>
                </h3>

            </GridBackground>
        </Container>
    )
}

export default ContactPage;