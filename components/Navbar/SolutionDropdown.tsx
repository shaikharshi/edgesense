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

interface SolutionDropdownProps {
    isTransparent: boolean; // New prop
}

const SolutionDropdown: React.FC<SolutionDropdownProps> = ({ isTransparent }) => {
    const defaultItem: Item = {
        name: 'Energy Management System',
        image: '/energy-management-system.png',
        link: '/products/edgevision',
    };

    const [hoveredItem, setHoveredItem] = useState<Item>(defaultItem);

    const items: Item[] = [
        {
            name: 'Energy Management System',
            image: '/energy-management-system.png',
            link: '/solutions/energy-management-system',
        },
        {
            name: 'Water Management System',
            image: '/water-management-system.png',
            link: '/solutions/water-management-system',
        },
        {
            name: 'HVAC Optimization',
            image: '/hvac-optimization.png',
            link: '/solutions/hvac-optimization',
        },
        {
            name: 'Predictive Maintenance',
            image: '/predictive-maintenance.png',
            link: '/solutions/predictive-maintenance',
        },
        {
            name: 'Ambient Monitoring',
            image: '/ambient-monitoring.png',
            link: '/solutions/ambient-monitoring',
        },
        {
            name: 'Steam trap monitoring',
            image: '/steam-trap-monitoring.png',
            link: '/solutions/steam-trap-monitoring',
        },
        {
            name: 'Busbar Monitoring',
            image: '/busbar-monitoring.png',
            link: '/solutions/busbar-monitoring',
        },
        {
            name: 'Plant Digitalization',
            image: '/plant-digitalization.png',
            link: '/solutions/plant-digitalization',
        },
    ];

    return (
        <div className="dropdown inline-block relative">
            <button className={`text-text-color font-semibold py-2 px-2 lg:px-4 rounded inline-flex items-center ${isTransparent ? 'text-white' : 'text-text-color'}`}>
                <Link href="/solutions">Solutions</Link>
                <RiArrowDropDownLine className="text-2xl" />
            </button>
            <div className="dropdown-menu absolute hidden group-hover:block md:right-[-200px] lg:right-[-400px]">
                <div className="grid grid-cols-2 lg:grid-cols-[1fr_2fr] gap-4 bg-white p-4 md:w-[500px] lg:w-[860px] rounded-xl mt-11 cus-box-shadow">
                    <div className="side-nav">
                        <ul className='flex flex-col'>
                            {items.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className='px-5 py-10 rounded-l-xl group hover:bg-accent-color w-[110%] nav-item'
                                    onMouseEnter={() => setHoveredItem(item)}
                                    onMouseLeave={() => setHoveredItem(defaultItem)}
                                >
                                    <span className={`h5 font-semibold text-accent-color group-hover:text-white menu-text`}>
                                        {item.name}
                                    </span>
                                    <p className='text-text-color group-hover:text-white hidden group-hover:block'>
                                        {item.description}
                                    </p>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <Image
                        className="w-full h-full object-cover bg-accent-color p-3"
                        src={hoveredItem.image}
                        alt={`Image for ${hoveredItem.name}`}
                        width={520}
                        height={350}
                        style={{ borderRadius: '10px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SolutionDropdown;
