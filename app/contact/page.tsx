'use client';

import { Container } from '@/components/layout/Container';
import { NavBar } from '@/components/ui/NavBar';
import { GridBackground } from '@/components/other/GridBackground';
import { PopOutButton } from '@/components/ui/Buttons';
import info from '@/misc/info';
import { LinkedinLogo, ReadCvLogo, EnvelopeOpen, GithubLogo } from '@phosphor-icons/react';

const ContactPage = () => {
    const handleNavigation = (to: string) => {
        window.open(to, '_blank');
    };

    return (
        <Container>
            <NavBar currentPage="contact" />
            <GridBackground>
                <div className="max-w-2xl">
                    <p className="ink-muted text-xs font-semibold uppercase tracking-[0.2em]">
                        Contact
                    </p>
                    <h2 className="mt-3 font-[family-name:var(--font-serif)] text-4xl sm:text-6xl leading-tight">
                        Let&apos;s build something meaningful.
                    </h2>
                    <p className="ink-muted my-4 text-lg leading-7">
                        I&apos;m a backend developer passionate about building scalable and
                        efficient systems. If you have an exciting challenge or a project that needs
                        a solid backend foundation, let&apos;s connect.
                    </p>
                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                        <PopOutButton
                            title="Email"
                            icon={<EnvelopeOpen size={24} weight="fill" />}
                            action={() => handleNavigation(`mailto:${info.email}`)}
                            left={true}
                        />
                        <PopOutButton
                            title="LinkedIn"
                            icon={<LinkedinLogo size={24} weight="fill" />}
                            action={() => handleNavigation(info.socials.linkedin)}
                            left={true}
                        />
                        <PopOutButton
                            title="GitHub"
                            icon={<GithubLogo size={24} weight="fill" />}
                            action={() => handleNavigation(info.github)}
                            left={true}
                        />
                        <PopOutButton
                            title="My Resume"
                            icon={<ReadCvLogo size={24} weight="fill" />}
                            action={() => handleNavigation('/resume.pdf')}
                            left={true}
                        />
                    </section>
                </div>
            </GridBackground>
        </Container>
    );
};

export default ContactPage;
