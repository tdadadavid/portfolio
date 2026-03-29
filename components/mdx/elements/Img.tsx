import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
}

const Img = ({ src, alt, width, height, className }: ImageProps) => {
    const resolvedWidth = typeof width === 'number' ? width : Number(width) || 1280;
    const resolvedHeight = typeof height === 'number' ? height : Number(height) || 720;

    return (
        <figure className="mdx-image-frame group">
            <Image
                src={src}
                alt={alt}
                width={resolvedWidth}
                height={resolvedHeight}
                className={cn(
                    'w-full h-auto rounded-[14px] border border-[#2a3347] bg-[#0b1120] shadow-[0_14px_35px_-24px_rgb(0,0,0,0.95)] transition duration-300 group-hover:scale-[1.01]',
                    className,
                )}
            />
            <figcaption className="mt-2 px-1 text-[10px] uppercase tracking-[0.16em] text-[#93a4bf]">
                Terminal Snapshot
            </figcaption>
        </figure>
    );
};

export default Img;
