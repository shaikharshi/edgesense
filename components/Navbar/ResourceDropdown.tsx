import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

interface Item {
    name: string;
    description?: string;
    image: string;
    link: string;
}

interface ResourcesDropdownProps {
    isTransparent: boolean; // New prop
}

const ResourcesDropdown: React.FC<ResourcesDropdownProps> = ({ isTransparent }) => {
    const defaultItem: Item = {
        name: 'Case Study',
        image: '/case-study-benifits.png',
        link: '/products/edgevision',
    };

    const [hoveredItem, setHoveredItem] = useState<Item>(defaultItem);

    const items: Item[] = [
        {
            name: 'Case Study',
            image: '/case-study-benifits.png',
            link: '/case-study',
        },
        {
            name: 'Blogs',
            image: '/benifits.png',
            link: '/blogs',
        },
        {
            name: 'FAQs',
            image: '/ambient-monitoring.png',
            link: '/faqs',
        },
        {
            name: 'Downloads',
            image: '/case-study-benifits.png',
            link: '/downloads',
        },
    ];

    return (
        <div className="dropdown inline-block relative">
            <button className={`text-text-color font-semibold py-2 px-2 lg:px-4 rounded inline-flex items-center ${isTransparent ? 'text-white' : 'text-text-color'}`}>
                <span>Resources</span>
                <RiArrowDropDownLine className="text-2xl" />
            </button>
            <div className="dropdown-menu absolute hidden group-hover:block md:right-[-100px]">
                <div className="grid gap-4 bg-white p-4 w-[300px] rounded-xl mt-11 cus-box-shadow">
                    <ul className='flex flex-col gap-2'>
                        {items.map((item, index) => (
                            <Link
                                href={item.link}
                                key={index}
                                className='px-3 py-2.5 rounded-xl group hover:bg-accent-color'
                                onMouseEnter={() => setHoveredItem(item)}
                                onMouseLeave={() => setHoveredItem(defaultItem)}
                            >
                                <span className={`h5 font-semibold text-accent-color group-hover:text-white`}>
                                    {item.name}
                                </span>
                                <p className='text-text-color group-hover:text-white hidden group-hover:block'>
                                    {item.description}
                                </p>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResourcesDropdown;
