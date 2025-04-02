const meta = {
    url: "https://tdadadavid-portfolio.vercel.app",
    github: "https://github.com/tdadadavid",
    email: "davidtofunmidada@gmail.com",
    socials: {
        twitter: "https://x.com/dtrue_king",
        linkedin: "https://linkedin.com/in/obadafidi",
    },
    navLinks: [
        {title: "home", href: "/"},
        {title: "works", href: "/works"},
        {title: "contact", href: "/contact"},
        {title: "blog", href: "/blog"}
    ],
    works: [

        {
            name: "Minired",
            url: "https://github.com/tdadadavid/minired",
            description: "cache database with publish-subscribe capabilities, developed in Go to emulate Redis " +
                "functionalities. It supports essential commands like SET, GET, and PING, manages multiple client " +
                "connections, and handles transactions."
        },
        {
            name: "Orchestra",
            url: "https://github.com/tdadadavid/orchestra",
            description: "lightweight task orchestration tool built in Go, designed to manage and coordinate workers " +
                "efficiently, inspired by Kubernetes.",
        },
        {
            name: "Search Engine",
            url: "https://github.com/tdadadavid/search-engine",
            description: "An efficient search engine written in C# and built for performance and reliability, " +
                "it enables users to retrieve relevant information quickly.",
        },
        {
            name: "Google Analytics CLI",
            url: "https://github.com/tdadadavid/google-analytics",
            description: "A web analytics tool that tracks page visits, user locations, and device usage."
        },
        {
            name: "Slide Scribe: Nigerian AI Tutor",
            url: "https://github.com/tdadadavid/SlideScribeAI-Backend",
            description: "(Hackathon) The backend for SlideScribeAI, an AI-powered tool for transcribing and processing slides."
        },
    ]
}

export default meta;