import React from 'react';

type CardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const KeyFeatureCard = ({ icon, title, description }: CardProps) => {
    return (
        <div className='flex flex-col gap-2 items-center border-2 border-tertiary-color p-8 rounded-xl hover:bg-accent-color group'>
            <div className='text-5xl text-accent-color group-hover:text-white'>
                {icon}
            </div>
            <h3 className="h4 text-accent-color text-center font-semibold group-hover:text-white">{title}</h3>
            <p className="p text-text-color text-center group-hover:text-white">{description}</p>
        </div>
    );
};

export default KeyFeatureCard;
