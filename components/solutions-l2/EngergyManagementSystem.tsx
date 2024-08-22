import React from 'react';
import Image from 'next/image';

type EnergyManagementSystemProps = {
    heading: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
};

const EnergyManagementSystem: React.FC<EnergyManagementSystemProps> = ({ heading, paragraphs, imageSrc, imageAlt }) => {
    return (
        <section className='pt-14 lg:pt-24'>
            <div className="flex flex-col-reverse gap-10 md:grid md:grid-cols-2 items-center md:gap-20 xl:gap-28">
                <div className="pl-10 pr-10 lg:pr-0 lg:pl-12 xl:pl-20 2xl:pl-72">
                    <h2 className='text-accent-color h3 font-semibold'>{heading}</h2>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className='text-text-color text-lg mt-2'>{paragraph}</p>
                    ))}
                </div>

                <Image
                    className='w-full h-auto rounded-l-3xl custom-box-shadow hidden md:block'
                    src={imageSrc}
                    alt={imageAlt}
                    width={1100}
                    height={750}
                />
            </div>
        </section>
    );
};

export default EnergyManagementSystem;
