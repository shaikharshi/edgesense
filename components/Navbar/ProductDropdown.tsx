import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

interface Item {
    name: string;
    description: string;
    image: string;
    link: string;
}

interface ProductDropdownProps {
    isTransparent: boolean; // Add this prop
}

const ProductDropdown: React.FC<ProductDropdownProps> = ({ isTransparent }) => {
    const defaultItem: Item = {
        name: 'EdgeVision',
        description: 'Unlocking optimal operational performance with advanced data insights.',
        image: '/iot-dashboard.png',
        link: '/products/edgevision',
    };

    const [hoveredItem, setHoveredItem] = useState<Item>(defaultItem);

    const items: Item[] = [
        {
            name: 'EdgeVision',
            description: 'Unlocking optimal operational performance with advanced data insights.',
            image: '/iot-dashboard.png',
            link: '/products/edgevision'
        },
        {
            name: 'EdgeNode',
            description: 'Seamless device integration and data flow for real-time control.',
            image: '/iot-gateway.png',
            link: "/products/edgenode"
        },
        // {
        //     name: 'New Product',
        //     description: 'Unlocking optimal operational performance with advanced data insights.',
        //     image: '/ambient-monitoring.png',
        //     link: "/products/new-product"
        // },
    ];

    return (
        <div className="dropdown inline-block relative">
            <button
                className={`text-text-color font-semibold py-2 px-2 lg:px-4 rounded inline-flex items-center ${isTransparent ? 'text-white' : ''}`}
            >
                <span>Products</span>
                <RiArrowDropDownLine className="text-2xl" />
            </button>
            <div className="dropdown-menu absolute hidden group-hover:block">
                <div className="grid grid-cols-[1.5fr_2fr] gap-4 bg-white p-4 md:w-[500px] lg:w-[660px] rounded-xl mt-8">
                    <div className="side-nav">
                        <ul className='flex flex-col'>
                            {items.map((item, index) => (
                                <Link
                                    href={item.link}
                                    key={index}
                                    className='px-5 py-4 rounded-l-xl group hover:bg-accent-color w-[110%] nav-item'
                                    onMouseEnter={() => setHoveredItem(item)}
                                    onMouseLeave={() => setHoveredItem(defaultItem)}
                                >
                                    <span className={`h5 font-semibold text-accent-color group-hover:text-white menu-text`}>{item.name}</span>
                                    <p className='text-text-color group-hover:text-white hidden group-hover:block'>
                                        {item.description}
                                    </p>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <Image
                        className="w-full h-[200px] object-contain bg-accent-color p-3"
                        src={hoveredItem.image}
                        alt={`Image for ${hoveredItem.name}`}
                        width={320}
                        height={250}
                        style={{ borderRadius: '10px' }} // Apply full radius to the image
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDropdown;
