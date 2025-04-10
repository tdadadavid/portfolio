import React from 'react';

interface ProjectCardProps {
    name: string;
    description: string;
    url: string;
    icon: React.ReactNode;
    tags: string[];
    accentColor?: string;
    onTagClick?: (tag: string) => void;
}

const ProjectCard = ({
    name,
    description,
    url,
    icon,
    tags = [],
    accentColor,
    onTagClick,
}: ProjectCardProps) => {
    return (
        <div className="relative group w-full max-w-md mx-auto">
            <div
                className="absolute inset-0 -translate-x-2 translate-y-2 group-hover:bg-[var(--accent)] dark:bg-[#535E71FF] rounded-xl z-0"
                style={
                    {
                        '--accent': accentColor,
                    } as React.CSSProperties
                }
            />

            <div
                className={`
          relative z-10 p-6 rounded-xl border border-gray-300 dark:border-gray-700
          bg-white dark:bg-nord shadow-md
          transition-all duration-300 ease-out
          hover:-translate-y-2 hover:translate-x-2 hover:shadow-xl
          h-[360px]
        `}
                style={{
                    backgroundImage: `url('/noise-texture.png')`,
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                }}
            >
                <div className="flex flex-col flex-1 h-full">
                    <div className="flex items-center gap-3 mb-3">
                        <div
                            className="group-hover:text-[var(--accent)] text-2xl transition-colors duration-300"
                            style={{ '--accent': accentColor } as React.CSSProperties}
                        >
                            {icon}
                        </div>
                        <h3
                            className="group-hover:text-[var(--accent)] text-xl  font-semibold transition-colors duration-300"
                            style={{ '--accent': accentColor } as React.CSSProperties}
                        >
                            {name.toLowerCase()}
                        </h3>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>

                    <div className="flex flex-wrap gap-2 my-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                onClick={() => onTagClick?.(tag)}
                                className="inline-block px-2 py-1 text-xs font-mono border border-dashed border-gray-400 dark:border-gray-500 text-gray-600 dark:text-gray-300 rounded cursor-pointer hover:border-gray-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto my-1 text-sm font-mono text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                    >
                        View on GitHub →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
