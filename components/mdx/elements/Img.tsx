import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

const Img = ({ src, alt }: ImageProps) => {
    return <Image src={src} alt={alt} width={1020} height={200} className="my-8" />;
};

export default Img;
