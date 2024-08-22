"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FooterLinks = () => {
    const pathname = usePathname();

    return (
        <div className="md:grid md:grid-cols-[70px_auto] xl:grid-cols-[88px_auto] md:gap-4 xl:gap-8 lg:border-r-2 lg:border-[#AED9FF]">
            <Link
                href="/"
                className={`md:mb-[-170px] lg:mb-0 py-4 bg-accent-color flex items-center justify-center flex-wrap gap-x-4 footer-radius ${pathname === '/' ? 'text-accent-color' : 'text-text-color'}`}
            >
                <Image
                    className="h-auto object-contain"
                    src="/footer-logo.png"
                    alt="Picture of the author"
                    width={31}
                    height={34}
                />
            </Link>
            <div className="flex flex-col lg:flex-row gap-5 xl:gap-x-10 py-6 px-2">
                <div className="flex flex-wrap gap-x-4 lg:flex-col lg:gap-2">
                    <h2 className='text-accent-color text-lg font-semibold'>Products</h2>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/products/edgevision' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/products/edgevision"
                    >
                        EdgeVision
                    </Link>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/products/edgenode' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/products/edgenode"
                    >
                        EdgeNode
                    </Link>
                    {/* <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/io-sence' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/io-sence"
                    >
                        Modbus 4G
                    </Link>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/io-sence' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/io-sence"
                    >
                        Modbus Ethernet
                    </Link> */}
                </div>
                <div className="flex flex-wrap gap-x-4 lg:flex-col lg:gap-2">
                    <h2 className='text-accent-color text-lg font-semibold'>Solutions</h2>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/solutions/energy-management-system' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/solutions/energy-management-system"
                    >
                        Energy Management
                    </Link>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/solutions/hvac-optimization' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/solutions/hvac-optimization"
                    >
                        HVAC Optimization
                    </Link>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/solutions/ambient-monitoring' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/solutions/ambient-monitoring"
                    >
                        Ambient Monitoring
                    </Link>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/solutions/steam-trap-monitoring' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/solutions/steam-trap-monitoring"
                    >
                        Steam Trap Monitoring
                    </Link>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/solutions/busbar-monitoring' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/solutions/busbar-monitoring"
                    >
                        Busbar Monitoring
                    </Link>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/solutions/plant-digitalization' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/solutions/plant-digitalization"
                    >
                        Plant Digitalization
                    </Link>
                </div>
                <div className="flex flex-wrap gap-x-4 lg:flex-col lg:gap-2">
                    <h2 className='text-accent-color text-lg font-semibold'>Company</h2>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/about-us' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/about-us"
                    >
                        About
                    </Link>
                    {/* <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/careers' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/careers"
                    >
                        Careers
                    </Link> */}
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/case-study' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/case-study"
                    >
                        Case Study
                    </Link>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/blogs' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/blogs"
                    >
                        Blogs
                    </Link>
                    {/* <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/support' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/support"
                    >
                        Support
                    </Link> */}
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/faqs' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/faqs"
                    >
                        FAQs
                    </Link>
                </div>
                <div className="flex flex-wrap gap-x-4 lg:flex-col lg:gap-2">
                    <h2 className='text-accent-color text-lg font-semibold'>Contacts</h2>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/customer-support' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/customer-support"
                    >
                        Customer Support
                    </Link>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/downloads' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/downloads"
                    >
                        Downloads
                    </Link>
                    <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/contact-us' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/contact-us"
                    >
                        Contact Us
                    </Link>
                    {/* <Link
                        className={`text-sm py-2 hover:text-accent-color hover:underline ${pathname === '/community-forum' ? 'text-accent-color' : 'text-text-color'}`}
                        href="/community-forum"
                    >
                        Community Forum
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default FooterLinks;
