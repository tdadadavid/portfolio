import { Container } from '@/components/layout/Container';
import { NavBar } from '@/components/ui/NavBar';
import { BlogInterface, getBlogs } from '@/lib/getBlogs';

const BlogPage = async () => {
    const allBlogs: BlogInterface[] = await getBlogs(); 

    console.log('all blogs:', allBlogs);

    return (
        <Container>
            {/* <NavBar currentPage="blog" /> */}
            {/* BLog page */}
            <main className="mt-8">
                <section className="te"></section>
            </main>
        </Container>
    );
};

export default BlogPage;
