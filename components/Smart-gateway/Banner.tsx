import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    const handleDownload = () => {
        // Create an anchor element to trigger the download
        const link = document.createElement('a');
        link.href = '/edgesense-brochure.pdf';
        link.download = 'edgesense-brochure.pdf';
        link.click();
    };
    return (
        <section className='bg-gradient py-14 lg:py-20'>
            <div className="container flex flex-col items-center">
                <h1 className='text-accent-color h2 text-center font-semibold'>Connecting the World with EdgeNode</h1>
                <p className='p text-text-color text-center'>Explore our EdgeNode devices for seamless data connectivity and integration with sensors such as energy <br /> meters, PLCs, DCS, OPC, flow meters, and vibration sensors.</p>
                <Image
                    className='mt-8'
                    src={"/smart-gateway.png"}
                    alt="Connecting the World with EdgeNode - Edge Sense"
                    width={890}
                    height={320}
                />
                <button
                    onClick={handleDownload}
                    className='bg-accent-color text-white rounded-2xl px-4 py-2 mt-12'
                >
                    Download Catalogue
                </button>
            </div>
        </section>
    )
}

export default Banner
