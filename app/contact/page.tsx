"use client";

import {Container} from "@/components/layout/Container";
import {NavBar} from "@/components/ui/NavBar";
import {GridBackground} from "@/components/other/GridBackground";
import meta from "@/data/meta";

const ContactPage = () => {
    return (
        <Container>
            <NavBar currentPage="contact"/>
            <GridBackground>
                <div className=" max-w-2xl">
                    <h2 className="mt-6 font-extrabold text-5xl dark:text-gray-100 text-gray-900">
                        Let&apos;s Build Something Cool!
                    </h2>
                    <p className="my-4 text-lg dark:text-gray-300 text-gray-600 leading-7">
                        I&apos;m a backend developer passionate about building scalable and efficient systems.
                        If you have an exciting challenge or a project that needs a solid backend foundation, let&apos;s
                        connect.
                    </p>
                    <a
                        href="/resume.pdf"
                        className="inline-block my-3 text-lg font-medium dark:text-gray-300 text-gray-600 underline transition hover:text-blue-500"
                    >
                        View my resume
                    </a>
                    <div className="mt-4 space-y-2 text-lg dark:text-gray-300 text-gray-600">
                        <p>
                            <b>Email:</b>{" "}
                            <a
                                href={`mailto:${meta.email}`}
                                className="underline transition hover:text-blue-500"
                            >
                                {meta.email}
                            </a>
                        </p>
                        <p>
                            <b>GitHub:</b>{" "}
                            <a
                                href={meta.github}
                                target="_blank"
                                className="underline transition hover:text-blue-500"
                            >
                                {meta.github}
                            </a>
                        </p>
                        <p>
                            <b>LinkedIn:</b>{" "}
                            <a
                                href={meta.socials.linkedin}
                                target="_blank"
                                className="underline transition hover:text-blue-500"
                            >
                                {meta.socials.linkedin}
                            </a>
                        </p>
                    </div>
                </div>
            </GridBackground>
        </Container>
    );
};

export default ContactPage;
