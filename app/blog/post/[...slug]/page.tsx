import { permanentRedirect } from 'next/navigation';

type Props = { params: Promise<{ slug: string[] }> };

export default async function LegacyBlogPost({ params }: Props) {
    const key = (await params).slug.join('/');
    permanentRedirect(`/blog/${key}`);
}
