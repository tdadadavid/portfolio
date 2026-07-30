import type { Metadata } from 'next';

import { ManPage } from '@/components/ui/resume/ManPage';
import { getResume } from '@/lib/resume';
import { inlineToText } from '@/lib/resume';
import info from '@/misc/info';

const resume = getResume();

const description =
    inlineToText(resume.tagline) ||
    'Backend and infrastructure engineer. Experience, projects and skills.';

export const metadata: Metadata = {
    title: `Resume — ${resume.name}`,
    description,
    alternates: {
        canonical: `${info.url}/resume`,
    },
    openGraph: {
        title: `Resume — ${resume.name}`,
        description,
        url: `${info.url}/resume`,
        siteName: resume.name,
        type: 'profile',
        images: [
            {
                url: '/api/og',
                width: 1200,
                height: 630,
                alt: `Resume — ${resume.name}`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `Resume — ${resume.name}`,
        description,
        images: ['/api/og'],
    },
};

const ResumePage = () => <ManPage resume={resume} />;

export default ResumePage;
