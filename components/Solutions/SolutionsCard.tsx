import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type InfoCardProps = {
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
    link?: string;
    linkClassName?: string;
    linkName?: string;
    CardClassName?: string;
};

const SolutionsCard: React.FC<InfoCardProps> = ({
    imageSrc,
    altText,
    title,
    description,
    link,
    linkClassName,
    linkName,
    CardClassName,
}) => {
    return (
        <Link href={link ?? "#"} className="block h-full">
            <div className={CardClassName ?? "grid  content-between grid-cols-1 gap-2 p-6 border-2 h-full border-tertiary-color rounded-lg  grid-rows-auto"}>
                <div className='grid gap-2'>
                    <Image
                        className="w-full h-[180px] object-cover rounded-xl"
                        src={imageSrc}
                        alt={altText}
                        width={380}
                        height={180}
                    />
                    <h2 className="h4 font-semibold text-accent-color">{title}</h2>
                    <p className="text-lg text-text-color line-clamp-3">{description}</p>
                </div>
                {link && (
                    <span className={linkClassName ?? "underline text-accent-color"}>
                        {linkName}
                    </span>
                )}
            </div>
        </Link>
    );
};

export default SolutionsCard;
