import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RequestDemo from '../RequestDemo.tsx/RequestDemo';

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

const DownloadCard: React.FC<InfoCardProps> = ({
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
            <RequestDemo ButtonClass="text-white bg-accent-color w-fit rounded-full px-5 py-5 border-[1px] border-transparent rounded-xl font-semibold hover:bg-accent-color hover:text-white hover:border-[1px] hover:border-white" buttonName="Download" />
        </div>
    );
};

export default DownloadCard;
