interface InlineLinkProps {
    title: string;
    href: string;
    external: boolean;
}

export const InlineLink = (props: InlineLinkProps) => {
    return (
        <span className="inline-flex items-center">
            <a
                href={props.href}
                target={props.external ? '_blank' : '_self'}
                className="ink-link font-medium"
            >
                {props.title}
            </a>
        </span>
    );
};
