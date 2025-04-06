"use client"

import {Container} from "@/components/layout/Container";
import {NavBar} from "@/components/ui/NavBar";
import {GridBackground} from "@/components/other/GridBackground";
import meta from "@/data/meta";
import ProjectCard from "@/components/ui/ProjectCard";
import {ChartLine, Database, Lifebuoy, MagnifyingGlass, Presentation} from '@phosphor-icons/react/dist/ssr';

type ProjectName =
    | "Minired"
    | "Orchestra"
    | "Search Engine"
    | "Google Analytics"
    | "Slide Scribe";

const projectIcons: Record<ProjectName, React.ReactNode> = {
    "Minired": <Database weight={"fill"}/>,
    "Orchestra": <Lifebuoy weight={"fill"}/>,
    "Search Engine": <MagnifyingGlass weight={"fill"}/>,
    "Google Analytics": <ChartLine weight={"fill"}/>,
    "Slide Scribe": <Presentation weight={"fill"}/>
};

const WorksPage = () => {
    return (
        <Container>
            <NavBar currentPage={"works"}/>
            <GridBackground>
                <h2 className="mt-4 font-bold text-3xl sm:text-5xl text-gray-800 dark:text-gray-200">
                    My Works
                </h2>
                <h3 className="my-4 text-gray-500 dark:text-gray-300 leading-5">
                    A curated collection of my works, highlighting my past achievements
                    and present projects.
                </h3>
                <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {meta.works.map((project, index) => (
                        <ProjectCard
                            key={index}
                            name={project.name}
                            description={project.description}
                            url={project.url}
                            icon={projectIcons[project.name as ProjectName]}
                            tags={project.tags}
                            accentColor={project.color}
                        />
                    ))}
                </section>
            </GridBackground>
        </Container>
    );
};

export default WorksPage;
