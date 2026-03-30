import { url } from "inspector";
import { color } from "motion/react";

const info = {
    me: 'òbàdàfídì',
    url: 'https://www.obadafidi.com',
    shortcutIcon: 'icon.svg',
    github: 'https://github.com/tdadadavid',
    email: 'davidtofunmidada@gmail.com',
    socials: {
        twitter: 'https://x.com/dtrue_king',
        linkedin: 'https://linkedin.com/in/obadafidi',
    },
    navLinks: [
        { title: 'home', href: '/' },
        { title: 'works', href: '/works' },
        { title: 'contact', href: '/contact' },
        { title: 'blog', href: '/blog' },
    ],
    works: [
        {
            name: 'Minired',
            url: 'https://github.com/tdadadavid/minired',
            description: 'Implemented Redis core functionality in Golang from scratch.',
            color: '#3b82f6',
            tags: ['golang', 'backend', 'database'],
        },
        {
            name: 'Orchestra',
            url: 'https://github.com/tdadadavid/orchestra',
            description:
                'Lightweight task orchestration tool built in Go, designed to manage and coordinate workers.',
            color: '#3b82f6',
            tags: ['golang', 'backend'],
        },
        {
            name: 'Search Engine',
            url: 'https://github.com/tdadadavid/search-engine',
            description:
                'An efficient search engine written in C# and built for performance and reliability.',
            color: '#3b82f6',
            tags: ['c#', 'backend', 'algorithms'],
        },
        {
            name: 'Web Analytics',
            url: 'https://github.com/tdadadavid/google-analytics',
            description:
                'A web analytics tool that tracks page visits, user locations, and device usage.',
            color: '#3b82f6',
            tags: ['javascript', 'analytics', 'cli', 'frontend'],
        },
        {
            name: 'Slide Scribe',
            url: 'https://github.com/tdadadavid/SlideScribeAI-Backend',
            description:
                '(Hackathon) The backend for SlideScribeAI, an AI-powered tool for transcribing and processing slides.',
            color: '#3b82f6',
            tags: ['hackathon', 'backend', 'typescript'],
      },
      {
        name: 'DNS',
        url: 'https://github.com/tdadadavid/go-dns',
        description: 'Domain Name Server written in Go. I explored it due to AWS outage that was caused by deleting DNS records',
        color: '#3b82f6',
        tags: ['dns', 'backend', 'AWS failure', 'go']
      },
      {
        name: 'Terrace',
        url: 'https://app.terrace.fi/i',
        description: 'CEX & DEX pool aggregator',
        color: '#0a0a0a',
        tags: ['crypto', 'dex', 'solana', 'docker/kubernetes', 'timescaledb', 'neo4j', 'go']
      },
      {
        name: 'Curaboard',
        url: 'https://www.curaboard.com/',
        description: 'A single home for all your shopping finds',
        color: '#0a0a0a',
        tags: ['nodejs', 'postgres', 'DNS', 'AWS', 'TLS/SSL']
      },
      {
        name: 'Groove',
        url: 'https://groove.ng/',
        description: 'Music and Video streaming platform',
        color: '#0a0a0a',
        tags: ['nodejs', 'postgres', 'mongo', 'S3', 'AWS(IAM)', 'EKS', 'GCP', 'paystack', 'stripe']
      }
    ],
};

export default info;
