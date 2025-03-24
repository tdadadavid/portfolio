interface InlineLinkProps {
    title: string
    href: string
    external: boolean
}

export const InlineLink = (props: InlineLinkProps) => {
    return (
        <summary className={"inline-flex items-center text-blue-500"}>
            <a href={props.href} target={props.external ? "_blank" : "_self"}
               className={"text-blue-500 underline underline-offset-4 decoration-gray-800"}>{props.title}</a>
            {/*<ArrowUpRight size={24}/>*/}
        </summary>
    )
}