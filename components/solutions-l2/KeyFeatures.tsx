import React from 'react';
import Image from 'next/image';

type Feature = {
    title: string;
    description: string;
};

type KeyFeaturesProps = {
    title: string;
    features: Feature[];
    imageSrc: string;
};

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ title, features, imageSrc }) => {
    return (
        <section className='container py-14 lg:pb-24'>
            <h2 className='text-accent-color h2 font-semibold text-center'>{title}</h2>
            <div className="flex-col-reverse justify-center lg:flex-row flex gap-6 gap-x-14 items-center mt-10">
                <div className='flex flex-col gap-2'>
                    {features.map((feature, index) => (
                        <div key={index}>
                            <h3 className="h4 font-semibold text-text-color">{feature.title}</h3>
                            <p className='p text-text-color'>{feature.description}</p>
                        </div>
                    ))}
                </div>
                <Image className="rounded-3xl w-full h-auto object-cover"
                    src={imageSrc}
                    alt="Picture of the key features"
                    width={490}
                    height={400}
                />
            </div>
        </section>
    );
};

export default KeyFeatures;
