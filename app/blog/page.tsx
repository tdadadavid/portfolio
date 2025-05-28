import { Container } from '@/components/layout/Container';
import BlogTemplate from '@/components/templates/BlogTemplate';
import { getBlogs } from '@/lib/blogs';

const BlogsPage = async () => {
    const allBlogs = await getBlogs();

    return (
        <Container>
            <BlogTemplate blogs={allBlogs} />
        </Container>
    );
};

export default BlogsPage;
