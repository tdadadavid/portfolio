import { Container } from '@/components/layout/Container';
import BlogTemplate from '@/components/templates/BlogTemplate';
import { BlogInterface, getBlogs } from '@/lib/blogs';

const BlogsPage = async () => {
    const allBlogs: BlogInterface[] = await getBlogs();

    return (
        <Container>
            <BlogTemplate blogs={allBlogs} />
        </Container>
    );
};

export default BlogsPage;
