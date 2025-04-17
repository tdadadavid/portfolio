'use client';

import meta from '@/data/meta';

import { NavBar } from '@/components/ui/NavBar';
import { Container } from '@/components/layout/Container';
import { GridBackground } from '@/components/other/GridBackground';
import { InlineLink } from '@/components/ui/InlineLink';
import { PopOutButton } from '@/components/ui/Buttons';
import { Cursor, PaperPlaneTilt } from '@phosphor-icons/react/dist/ssr';

const Home = () => {
    const onConnectButtonClick = () => {
        window.open(meta.socials.linkedin, '_blank', 'noopener,noreferrer');
    };

    const onViewWorksButtonClick = () => {
        window.open('/works', '_self');
    };

    return (
        <Container>
            <NavBar currentPage={'home'} />
            <GridBackground>
                <div className={'flex gap-4'}>
                    <div>
                        <h2
                            className={
                                'font-bold text-4xl sm:text-6xl dark:text-gray-200 text-gray-800'
                            }
                        >
                            David Dada
                        </h2>
                        <h2
                            className={
                                'mt-4 text-xl sm:text-3xl underline dark:text-gray-200 text-gray-800'
                            }
                        >
                            Software Engineer
                        </h2>
                    </div>
                </div>
                <h4 className={'mt-8 dark:text-gray-300 text-gray-500 leading-8'}>
                    I am a backend engineer based in Lagos, Nigeria, with over 5 years of experience
                    building scalable, high-performance systems. My technical expertise centres on distributed systems, network protocols, 
                    Database architecture and infrastructure optimisation—areas where I&apos;ve consistently delivered robust solutions for 
                    complex engineering challenges. Beyond my technical pursuits, I nurture a deep appreciation for the arts.
                </h4>
                <h4 className={'mt-6 dark:text-gray-300 text-gray-500 leading-8'}>
                    I&apos;ve worked on projects like{' '}
                    <InlineLink href={`${meta.github}/minired`} title={'minired'} external={true} />
                    , implementing core Redis functionality from scratch in Go,{''}
                    <InlineLink
                        href={`${meta.github}/search-engine`}
                        title={'a search engine'}
                        external={true}
                    />{' '}
                    written in C#, and contributed to big Open Source projects like{' '}
                    <InlineLink
                        title={'DiceDB'}
                        href={'https://github.com/DiceDB/dice'}
                        external={true}
                    />
                    . I&apos;m also a member of the Google Student Developer Club, Github Campus Expert Unilag, and a technical
                    trainer at NitHub, where I contribute & give back to the community.
                </h4>
                <section className={'flex sm:gap-4 items-center flex-col sm:flex-row pb-4 mt-4'}>
                    <PopOutButton
                        title={"Let's connect"}
                        icon={
                            <PaperPlaneTilt
                                size={18}
                                className={'dark:text-gray-200 text-gray-900'}
                                weight={'fill'}
                            />
                        }
                        action={onConnectButtonClick}
                    />
                    <PopOutButton
                        title={'View Works'}
                        icon={
                            <Cursor
                                size={18}
                                className={
                                    'transform -scale-x-100 dark:text-gray-200 text-gray-900'
                                }
                                weight={'fill'}
                            />
                        }
                        action={onViewWorksButtonClick}
                    />
                </section>
            </GridBackground>
        </Container>
    );
};

export default Home;
