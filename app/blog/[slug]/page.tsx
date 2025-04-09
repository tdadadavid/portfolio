import { BlogContentTemplate } from '@/components/templates/BlogContentTemplate';
import meta from '@/data/meta';
import { BlogInterface, getBlog, getBlogs } from '@/lib/blogs';
import { notFound } from 'next/navigation';

interface PageParams {
    params: { slug: string | string[] };
}

export const generateStaticParams = async () => {
    try {
        const blogFiles = await getBlogs();
        return blogFiles.map((blog) => ({ slug: blog.slug }));
    } catch {
        return [];
    }
};

export const generateMetadata = async ({ params }: PageParams) => {
    const { slug } = params;
    const blog = await getBlog(slug as string);
    if (!blog) {
        return {
            title: 'This Page Does Not Exist',
            description:
                "There seems to be a typo, we couldn't find this page.",
            type: 'website',
            icons: {
                shortcut: 'icon.svg',
            },
        };
    }
    return {
        title: blog.metadata.title,
        description: blog.metadata.summary,
        type: 'article',
        icons: {
            shortcut: 'icon.svg',
        },
        openGraph: {
            title: blog.metadata.title,
            description: blog.metadata.summary,
            url: `${meta.url}/blog/${params.slug}`,
        },
    };
};

const BlogPage = async ({ params }: PageParams) => {
    const { slug } = await params;
    const blog: BlogInterface | null = await getBlog(slug);
    if (!blog) {
        return notFound();
    }
    return <BlogContentTemplate blog={blog} />;
};

export default BlogPage;
