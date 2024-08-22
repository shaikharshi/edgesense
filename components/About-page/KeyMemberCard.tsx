import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';

type KeyMemberCardProps = {
    imageSrc: string;
    imageAlt: string;
    name: string;
    designation: string;
    description: string;
    linkedinUrl: string;
};

const KeyMemberCard: React.FC<KeyMemberCardProps> = ({
    imageSrc,
    imageAlt,
    name,
    designation,
    description,
    linkedinUrl,
}) => (
    <div className="bg-white p-4 rounded-xl">
        <Image
            className="w-full h-[250px] object-contain rounded-xl"
            src={imageSrc}
            width={350}
            height={165}
            alt={imageAlt}
        />
        <div className="flex justify-between items-center mt-3">
            <div>
                <h3 className="text-xl text-accent-color">{name}</h3>
                <p className="text-text-color">{designation}</p>
            </div>
            <Link href={linkedinUrl} target='blank'>
                <FaLinkedinIn className="bg-accent-color text-white text-4xl p-2 rounded-lg" />
            </Link>
        </div>
        <p className=" text-text-color mt-4">{description}</p>
    </div>
);

export default KeyMemberCard;
