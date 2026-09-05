import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { getBlogMetadata } from '@/lib/blogs';

export const runtime = 'nodejs';

/** Serve a small, standard-format preview without depending on an image optimizer URL. */
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string[] }> }) {
    const post = getBlogMetadata((await params).slug.join('/'));
    const src = post?.coverImage?.src;
    if (!src?.startsWith('/image/')) return new Response('Image not found', { status: 404 });

    const imageRoot = path.join(process.cwd(), 'public', 'image');
    const file = path.resolve(imageRoot, src.slice('/image/'.length));
    if (!file.startsWith(`${imageRoot}${path.sep}`)) {
        return new Response('Image not found', { status: 404 });
    }

    const bytes = await sharp(await readFile(file))
        .rotate()
        .resize(1200, 630, { fit: 'contain', background: '#10141b' })
        .flatten({ background: '#10141b' })
        .jpeg({ quality: 85 })
        .toBuffer();

    return new Response(new Uint8Array(bytes), {
        headers: {
            'Content-Type': 'image/jpeg',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}
