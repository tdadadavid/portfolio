"use client"

import {Container} from "@/components/layout/Container";
import {NavBar} from "@/components/ui/NavBar";
import {GridBackground} from "@/components/other/GridBackground";
import meta from "@/data/meta";

const WorksPage = () => {
    return (
        <Container>
            <NavBar currentPage={"works"}/>
            <GridBackground>
                <h2 className="mt-4 font-bold text-4xl dark:text-gray-200 text-gray-800">
                    My Works
                </h2>
                <h3 className="my-4 dark:text-gray-300 text-gray-500 leading-8">
                    A curated collection of my works, highlighting my past achievements
                    and present projects.
                </h3>
                <section className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {meta.works.map((project, index) => (
                        <div
                            key={index}
                            className={`group cursor-pointer bg-white dark:bg-nord border-3 border-gray-400 dark:border-gray-200 rounded-2xl shadow-lg transition-transform transform hover:scale-105 ${
                                index === 0
                                    ? "md:col-span-2 md:row-span-2" // Make the first item larger
                                    : ""
                            }`}
                        >
                            <div className="p-6 flex flex-col justify-between h-full">
                                <div>
                                    <h4 className="text-xl font-semibold text-blue-500">
                                        {project.name}
                                    </h4>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                                        {project.description}
                                    </p>
                                </div>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline mt-4 text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity self-start"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </section>
            </GridBackground>
        </Container>
    );
};

export default WorksPage;