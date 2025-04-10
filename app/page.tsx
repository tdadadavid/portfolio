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
                            Backend Engineer
                        </h2>
                    </div>
                </div>
                <h4 className={'mt-8 dark:text-gray-300 text-gray-500 leading-8'}>
                    I am a backend engineer based in Lagos, Nigeria, with over 5 years of experience
                    building scalable, high-performance systems. I&apos;m passionate about
                    technology, arts, and entrepreneurship. I also have a keen interest in writing
                    and web development.
                </h4>
                <h4 className={'mt-6 dark:text-gray-300 text-gray-500 leading-8'}>
                    I&apos;ve worked on projects like{' '}
                    <InlineLink href={`${meta.github}/minired`} title={'minired'} external={true} />
                    , implementing core redis functionality from scratch in Go,{' '}
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
                    . I&apos;m also member of the Google Student Developer Club and a technical
                    trainer at NitHub and Engineering Career Expo (ECX).
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
