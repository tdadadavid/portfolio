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
                <h2 className="mt-4 font-bold text-4xl text-gray-800 dark:text-gray-200">
                    My Works
                </h2>
                <h3 className="my-4 text-gray-500 dark:text-gray-300 leading-7">
                    A curated collection of my works, highlighting my past achievements
                    and present projects.
                </h3>
                <section className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {meta.works.map((project, index) => (
                        <div
                            key={index}
                            className={`group cursor-pointer bg-white dark:bg-nord border border-gray-300 
                            dark:border-gray-600 rounded-xl shadow-md transition-transform hover:scale-105 hover:translate-y-[-3px] hover:shadow-lg ${
                                index === 0 ? "md:col-span-2 md:row-span-2" : ""
                            }`}
                        >
                            <div className="p-5 flex flex-col justify-center h-full">
                                <div>
                                    <h4 className="text-lg font-semibold dark:text-ice text-blue-500">
                                        {project.name}
                                    </h4>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        {project.description}
                                    </p>
                                </div>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline mt-4 text-sm text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    View on GitHub →
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
