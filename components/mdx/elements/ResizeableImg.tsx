import Image from 'next/image';

interface ResizableImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    desc?: string;
}

const ResizableImg = ({ src, alt, width, height, desc }: ResizableImageProps) => {
    return (
        <section className="my-8 flex flex-col">
            <Image src={src} alt={alt} width={width} height={height} />
            {desc && <span className="w-full text-center my-2 text-sm text-gray-400">{desc}</span>}
        </section>
    );
};

export default ResizableImg;
