// components/ImageSlider.tsx

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
    '/about-us.png',
    '/io-sence-benifit.png',
    '/about-us.png',
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full object-cover overflow-hidden">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className="w-full h-[500px] object-cover mt-4"
                        width={900}
                        height={1000}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
