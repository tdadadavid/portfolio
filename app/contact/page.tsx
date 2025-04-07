"use client";

import { Container } from "@/components/layout/Container";
import { NavBar } from "@/components/ui/NavBar";
import { GridBackground } from "@/components/other/GridBackground";
import { PopOutButton } from "@/components/ui/Buttons";
import meta from "@/data/meta";
import { LinkedinLogo, ReadCvLogo, EnvelopeOpen, GithubLogo } from "@phosphor-icons/react";

const ContactPage = () => {
  const handleNavigation = (to: string) => {
    window.open(to, "_blank");
  };

  return (
    <Container>
      <NavBar currentPage="contact" />
      <GridBackground>
        <div className="max-w-2xl">
          <h2 className="mt-6 font-extrabold text-3xl sm:text-5xl dark:text-gray-100 text-gray-900 leading-16">
            Let&apos;s Build Something Cool!
          </h2>
          <p className="my-4 text-lg dark:text-gray-300 text-gray-600 leading-7">
            I&apos;m a backend developer passionate about building scalable and efficient systems.
            If you have an exciting challenge or a project that needs a solid backend foundation,
            let&apos;s connect.
          </p>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
             <PopOutButton
               title="Email"
               icon={<EnvelopeOpen size={24} weight="fill" />}
               action={() => handleNavigation(`mailto:${meta.email}`)}
               left={true}
             />
             <PopOutButton
                title="LinkedIn"
                icon={<LinkedinLogo size={24} weight="fill" />}
                action={() => handleNavigation(meta.socials.linkedin)}
                left={true}
             />
             <PopOutButton
               title="GitHub"
               icon={<GithubLogo size={24} weight="fill" />}
               action={() => handleNavigation(meta.github)}
               left={true}
             />
            <PopOutButton
               title="My Resume"
               icon={<ReadCvLogo size={24} weight="fill" />}
               action={() => handleNavigation("/resume.pdf")}
               left={true}
            />
           </section>
        </div>
      </GridBackground>
    </Container>
  );
};

export default ContactPage;

