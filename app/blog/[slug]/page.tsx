import { BlogContentTemplate } from '@/components/templates/BlogContentTemplate';
import meta from '@/data/meta';
import { BlogInterface, getBlog, getBlogs } from '@/lib/blogs';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => {
    try {
        const blogFiles = await getBlogs();
        return blogFiles.map(blog => ({ slug: blog.slug }));
    } catch {
        return [];
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateMetadata = async ({ params }: { params: any }) => {
    const { slug } = await params;
    const blog = await getBlog(slug as string);
    if (!blog) {
        return {
            title: 'This Page Does Not Exist',
            description: "There seems to be a typo, we couldn't find this page.",
            type: 'website',
            icons: {
                shortcut: meta.shortcutIcon,
            },
        };
    }
    return {
        title: `${blog.metadata.title} | David Dada`,
        description: blog.metadata.summary,
        type: 'article',
        icons: {
            shortcut: meta.shortcutIcon,
        },
        openGraph: {
            title: blog.metadata.title,
            description: blog.metadata.summary,
            url: `${meta.url}/blog/${slug}`,
        },
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogPage = async ({ params }: { params: any }) => {
    const { slug } = await params;
    const blog: BlogInterface | null = await getBlog(slug);
    if (!blog) {
        return notFound();
    }
    return <BlogContentTemplate blog={blog} />;
};

export default BlogPage;
