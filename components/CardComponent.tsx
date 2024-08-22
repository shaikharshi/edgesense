import React from 'react'
import { FaRegCircleDot } from 'react-icons/fa6';
import clsx from 'clsx';

type IndustryCardProp = {
    icon: React.ReactNode;
    heading: string;
    description: string;
    containerClassName?: string;
    iconClassName?: string;
    descriptionClassName?: string;
    headingclassName?: string;
}

const CardComponent = ({ icon, heading, description, containerClassName, iconClassName, descriptionClassName, headingclassName }: IndustryCardProp) => {
    return (
        <div className={clsx("group flex flex-col gap-3 text-center items-center p-6 rounded-lg border-2 border-[#E5F2FF]", containerClassName)}>
            <FaRegCircleDot className={clsx("text-3xl text-accent-color ", iconClassName)} />
            <h3 className={clsx("text-accent-color h4 font-semibold", headingclassName)}>{heading}</h3>
            <p className={clsx("text-text-color text-lg", descriptionClassName)}>{description}</p>
        </div>
    )
}

export default CardComponent
