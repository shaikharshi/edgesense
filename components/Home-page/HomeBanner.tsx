import Link from 'next/link'
import React from 'react'
import RequestDemo from '../RequestDemo.tsx/RequestDemo'

const HomeBanner = () => {
    return (
        <div className="relative w-full" id="first-section">
            <video
                className="w-full h-[450px] md:h-[700px] object-cover"
                loop
                autoPlay
                muted
                preload="auto"
                playsInline
            >
                <source src="/burak-iot-banner.mp4" type="video/mp4" />
            </video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/70"></div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col pt-36 md:pt-14 items-center justify-center text-center px-4">
                <h1 className="h1 text-white font-semibold">Smart IoT Solutions for Industrial Growth</h1>
                <p className="text-white mt-2 text-lg">
                    Achieve real-time insights with our IoT Gateway and Dashboard Solutions. Your trusted partner for advanced IoT solutions and device management.
                </p>
                <div className="flex gap-4 mt-4">
                    <RequestDemo ButtonClass="h-[40px] bg-accent-color text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-accent-color" buttonName="Request Demo" />
                    <Link
                        className="bg-white text-text-color px-3 py-2 md:px-5 rounded-full font-semibold hover:bg-accent-color hover:text-white"
                        href={{ pathname: "/solutions" }}
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default HomeBanner
