'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { NavBar } from '@/components/ui/NavBar';
import { GridBackground } from '@/components/other/GridBackground';
import meta from '@/misc/info';
import ProjectCard from '@/components/ui/ProjectCard';
import {
    ChartLine,
    Database,
    Lifebuoy,
    MagnifyingGlass,
    Presentation,
} from '@phosphor-icons/react/dist/ssr';
import Head from 'next/head';

type ProjectName = 'Minired' | 'Orchestra' | 'Search Engine' | 'Google Analytics' | 'Slide Scribe';

const projectIcons: Record<ProjectName, React.ReactNode> = {
    Minired: <Database weight={'fill'} />,
    Orchestra: <Lifebuoy weight={'fill'} />,
    'Search Engine': <MagnifyingGlass weight={'fill'} />,
    'Google Analytics': <ChartLine weight={'fill'} />,
    'Slide Scribe': <Presentation weight={'fill'} />,
};

const WorksPage = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const handleTagClick = (tag: string) => {
        setSelectedTag(prev => (prev === tag ? null : tag));
    };

    const filteredProjects = selectedTag
        ? meta.works.filter(project => project.tags.includes(selectedTag))
        : meta.works;

    const pageTitle = 'Works - David Dada';
    const pageDescription =
        'A curated collection of my works, highlighting my past achievements and present projects.';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:url" content={meta.url} />
                <meta property="og:image" content="/api/og" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content="/api/og" />
                <link rel="icon" href={meta.shortcutIcon} />
            </Head>
            <Container>
                <NavBar currentPage={'works'} />
                <GridBackground>
                    <h2 className="mt-4 font-bold text-3xl sm:text-5xl text-gray-800 dark:text-gray-200">
                        My Works
                    </h2>
                    <h3 className="my-4 text-gray-500 dark:text-gray-300 leading-7">
                        A curated collection of my works, highlighting my past achievements and
                        present projects.
                    </h3>
                    {selectedTag && (
                        <div className="my-8 text-sm font-mono text-center text-gray-600 dark:text-gray-300">
                            Filtering by tag: <strong>{selectedTag}</strong>{' '}
                            <button
                                onClick={() => setSelectedTag(null)}
                                className="ml-2 underline text-ice"
                            >
                                Clear
                            </button>
                        </div>
                    )}
                    <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                name={project.name}
                                description={project.description}
                                url={project.url}
                                icon={projectIcons[project.name as ProjectName]}
                                tags={project.tags}
                                accentColor={project.color}
                                onTagClick={handleTagClick}
                            />
                        ))}
                    </section>
                </GridBackground>
            </Container>
        </>
    );
};

export default WorksPage;
