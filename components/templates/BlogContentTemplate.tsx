import { BlogInterface } from "@/lib/blogs";
import { Container } from "../layout/Container";
import MdxRenderer from "../mdx/MdxRenderer";

interface BlogContentTemplateProps {
    blog: BlogInterface;
}

export const BlogContentTemplate = ({ blog }: BlogContentTemplateProps) => {
    return (
        <Container>
            <article>
                <header>
                    <h1>{blog.metadata.title}</h1>
                    <p>{blog.metadata.summary}</p>
                </header>
                <section>
                    <MdxRenderer content={blog.content} />
                </section>
            </article>
        </Container>
    );
};
