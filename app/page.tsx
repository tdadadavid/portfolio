'use client';

import info from '@/misc/info';
import { NavBar } from '@/components/ui/NavBar';
import { Container } from '@/components/layout/Container';
import { GridBackground } from '@/components/other/GridBackground';
import { PopOutButton } from '@/components/ui/Buttons';
import { ArrowUpRight, Cursor, PaperPlaneTilt, Stack } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';

const stagger = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

const Home = () => {
    const onConnectButtonClick = () => {
        window.open(info.socials.linkedin, '_blank', 'noopener,noreferrer');
    };

    const onViewWorksButtonClick = () => {
        window.open('/works', '_self');
    };

    return (
        <Container>
            <NavBar currentPage={'home'} />
            <GridBackground>
                <motion.section
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="space-y-10"
                >
                    <motion.header variants={fadeInUp} className="space-y-5">
                        <p className="ink-muted text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
                            Portfolio / 2026 Edition
                        </p>
                        <h1 className="font-[family-name:var(--font-serif)] text-5xl leading-[0.95] sm:text-7xl">
                            David Dada
                        </h1>
                        <div className="flex items-center gap-3 text-sm sm:text-base">
                            <span className="rounded-full border border-[var(--paper-line)] px-3 py-1 font-semibold uppercase tracking-[0.15em]">
                                Software Engineer
                            </span>
                            <span className="ink-muted flex items-center gap-1.5">
                                Backend + Infrastructure <ArrowUpRight size={14} />
                            </span>
                        </div>
                    </motion.header>

                    <motion.section
                        variants={fadeInUp}
                        className="max-w-3xl space-y-5 text-base leading-8"
                    >
                        <p className="ink-muted">
                            I am a backend engineer who thinks deeply about how systems are designed
                            and built. I spend much of my time constructing and dismantling
                            services to understand how to make them reliable, scalable, and
                            maintainable.
                        </p>
                        <p className="ink-muted">
                            I am especially drawn to system design concepts such as write-ahead
                            logs, sharded architectures, and distributed coordination. I treat APIs
                            as long-term contracts, so I design them to be predictable, consistent,
                            and easy to evolve as products grow.
                        </p>
                        <p className="ink-muted">
                            I also explore database internals, including indexing strategies, query
                            patterns, and storage paths from memory to disk. In parallel, I study
                            compiler and execution pipelines to understand how high-level logic
                            becomes efficient runtime behavior. Most of my work sits at the
                            intersection of backend infrastructure, data systems, and developer
                            tooling.
                        </p>
                    </motion.section>

                    <motion.section
                        variants={fadeInUp}
                        className={'flex items-center gap-4 pb-2 flex-col sm:flex-row'}
                    >
                        <PopOutButton
                            title={"Let's connect"}
                            icon={<PaperPlaneTilt size={18} weight={'fill'} />}
                            action={onConnectButtonClick}
                        />
                        <PopOutButton
                            title={'View Works'}
                            icon={<Cursor size={18} className={'transform -scale-x-100'} weight={'fill'} />}
                            action={onViewWorksButtonClick}
                        />
                        <div className="ink-muted mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.16em] sm:mt-4">
                            <Stack size={14} /> Building resilient systems
                        </div>
                    </motion.section>
                </motion.section>
            </GridBackground>
        </Container>
    );
};

export default Home;
