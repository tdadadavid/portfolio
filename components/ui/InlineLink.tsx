interface InlineLinkProps {
    title: string
    href: string
    external: boolean
}

export const InlineLink = (props: InlineLinkProps) => {
    return (
        <summary className={"inline-flex items-center text-blue-500 dark:text-ice"}>
            <a href={props.href} target={props.external ? "_blank" : "_self"}
               className={"dark:text-ice text-blue-500 underline underline-offset-4 dark:decoration-ice decoration-gray-800"}>{props.title}</a>
        </summary>
    )
}