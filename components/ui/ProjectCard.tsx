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
        <div className="group relative mx-auto w-full max-w-sm">
            <div
                className="absolute inset-0 z-0 translate-x-1.5 translate-y-1.5 rounded-xl bg-[var(--paper-accent-soft)] transition duration-300 group-hover:translate-y-1"
                style={
                    {
                        '--accent': accentColor,
                    } as React.CSSProperties
                }
            />

            <div
                className={`
          relative z-10 min-h-[250px] rounded-xl border border-[var(--paper-line)]
          bg-[var(--paper-soft)] p-4 transition-all duration-300 ease-out hover:-translate-y-1
        `}
                style={{
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                }}
            >
                <div className="flex h-full flex-col">
                    <div className="mb-2 flex items-center gap-2.5">
                        <div
                            className="text-xl text-[var(--paper-muted)] transition-colors duration-300 group-hover:text-[var(--accent)]"
                            style={{ '--accent': accentColor } as React.CSSProperties}
                        >
                            {icon}
                        </div>
                        <h3
                            className="font-[family-name:var(--font-serif)] text-2xl capitalize leading-tight transition-colors duration-300 group-hover:text-[var(--accent)]"
                            style={{ '--accent': accentColor } as React.CSSProperties}
                        >
                            {name}
                        </h3>
                    </div>

                    <p className="ink-muted mb-3 text-sm leading-5">{description}</p>

                    <div className="my-3 flex flex-wrap gap-1.5">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                onClick={() => onTagClick?.(tag)}
                                className="inline-block cursor-pointer rounded-full border border-dashed border-[var(--paper-line)] px-2 py-0.5 text-[11px] font-mono text-[var(--paper-muted)] hover:border-[var(--paper-muted)]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto pt-1 text-xs font-mono uppercase tracking-[0.12em] text-[var(--paper-muted)] opacity-80 transition-opacity group-hover:opacity-100 hover:underline"
                    >
                        View on GitHub →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
