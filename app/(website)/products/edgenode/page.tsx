"use client"
import React, { useRef } from 'react';
import { BiChevronDown } from "react-icons/bi";
import KeyFeatureCard from '@/components/Smart-gateway/KeyFeatures';
import { LuShuffle } from "react-icons/lu";
import { PiPuzzlePieceBold } from "react-icons/pi";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { TbHandClick } from 'react-icons/tb';
import IotGateway from '@/components/Smart-gateway/IotGateway';
import Accordian from '@/components/edgevision/Faq';
import HomeIndustrySoltions from '@/components/Home-page/HomeIndustrySoltions';
import NewsLetter from '@/components/NewsLetter';
import Image from 'next/image';
import Link from 'next/link';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const Page = () => {
    // Create a ref for the key features section
    const keyFeaturesRef = useRef<HTMLDivElement>(null);

    const handleScrollToKeyFeatures = () => {
        if (keyFeaturesRef.current) {
            // Add a smooth scroll with an offset
            window.scrollTo({
                top: keyFeaturesRef.current.offsetTop - 100, // Adjust this value based on the height of your navbar
                behavior: 'smooth',
            });
        } else {
            console.error('Ref to keyFeaturesRef is not defined');
        }
    };
    const handleDownload = () => {
        // Create an anchor element to trigger the download
        const link = document.createElement('a');
        link.href = '/edgesense-brochure.pdf';
        link.download = 'edgesense-brochure.pdf';
        link.click();
    };

    return (
        <>
            <section className='pt-28 pb-14 lg:pb-24 smart-gateway-shadow'>
                <Breadcrumb className='flex justify-center px-4'>
                    <BreadcrumbList className='text-lg'>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/" className='hover:text-text-color'>Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <span className='hover:text-text-color'>Products</span>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <span className='hover:text-text-color'>EdgeNode</span>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Image className='mt-10 w-[31px] h-[34px] mx-auto' src="/smart-gateway-logo.png" width={31} height={34} alt='EdgeNode - Edge Sense' />
                <div className="flex flex-col items-center gap-4 justify-center container mt-4 md:mt-10">
                    <h1 className="h2 text-accent-color text-center font-semibold">Real-Time IoT Data Collection for Industrial Automation</h1>
                    <p className="p text-center text-text-color mx-auto lg:w-[900px]">Explore EdgeNode, a smart IoT gateway for seamless integration with energy meters, PLCs, DCS, OPC, flow meters, and vibration sensors.</p>

                    <Image className='mt-10' src="/smart-gateway.png" width={755} height={755} alt='EdgeNode - Edge Sense' />

                    <button
                        onClick={handleDownload}
                        className='bg-accent-color border-[1px] border-transparent text-white rounded-2xl px-4 py-2 mt-12 hover:bg-white hover:text-accent-color hover:border-[1px] hover:border-accent-color'
                    >
                        Download Catalogue
                    </button>


                    <BiChevronDown
                        className="text-5xl text-accent-color mt-8 cursor-pointer"
                        onClick={handleScrollToKeyFeatures}
                    />
                </div>
            </section>

            {/* Key Features Section with Ref */}
            <section className='container py-14 lg:py-20 key-feature-shadow'>
                {/* Optional spacer to adjust for navbar height */}
                <div ref={keyFeaturesRef}>
                    <h2 className='h2 text-accent-color font-semibold text-center'>EdgeNode’s Key Features</h2>
                    <p className='text-text-color text-center'>Seamless device integration, real-time data collection for connected IoT ecosystems</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                        <KeyFeatureCard icon={<LuShuffle />} title={'Scalable Deployment'} description={'Connect to and manage a large network of devices and sensors.'} />
                        <KeyFeatureCard icon={<PiPuzzlePieceBold />} title={'Redundant Connectivity'} description={'Multiple communication channels to ensure uninterrupted data flow.'} />
                        <KeyFeatureCard icon={<HiOutlineShieldCheck />} title={'Alarm Management'} description={'Monitor data and trigger alarms based on configurable thresholds.'} />
                        <KeyFeatureCard icon={<TbHandClick />} title={'Data Security'} description={'Securely bridge local devices and the cloud, protecting sensitive data'} />
                    </div>
                </div>
            </section>

            <IotGateway />

            <section className='container py-14 lg:py-24'>
                <h2 className='text-accent-color h2 font-semibold text-center'>Frequently Asked Questions</h2>
                <p className='text-text-color text-center'>Your Query Answered</p>
                <Accordian />
            </section>

            <HomeIndustrySoltions SectionClassName='bg-white lg:pb-24 pb-14' />

            <NewsLetter />
        </>
    );
}

export default Page;
