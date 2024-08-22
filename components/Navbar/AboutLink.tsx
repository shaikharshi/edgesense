import React from 'react';
import Link from 'next/link';

interface AboutLinkProps {
    isTransparent: boolean;
    isHomePage: boolean;
}

const AboutLink: React.FC<AboutLinkProps> = ({ isTransparent, isHomePage }) => {
    return isHomePage ? (
        <div className="dropdown inline-block relative">
            <button
                className={`text-text-color font-semibold py-2 px-2 lg:px-4 rounded inline-flex items-center ${isTransparent ? 'text-white' : ''}`}
            >
                <Link href="/about-us" className={`${isTransparent ? 'text-white' : ''}`}>
                    <span>About</span>
                </Link>
            </button>
        </div>
    ) : (
        <Link
            className={`text-text-color font-semibold py-2 px-2 lg:px-4 rounded inline-flex items-center ${isTransparent ? 'text-white' : ''}`}
            href="/about-us"
        >
            About
        </Link>
    );
};

export default AboutLink;
