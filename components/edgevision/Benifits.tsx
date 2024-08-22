import React from 'react'
import Image from 'next/image'

const Benifits = () => {
    return (
        <section className='container pb-14 lg:pb-24'>
            <div className="flex flex-col-reverse md:grid md:grid-cols-[1.5fr_1fr] gap-x-14 items-center">
                <div className='flex flex-col gap-2 mt-6 md:mt-0'>
                    <h2 className='text-accent-color h2 font-semibold'>EdgeSense IoT Dashboard Benefits</h2>
                    <h3 className="h4 font-semibold text-text-color">Boost Efficiency, Optimize Operations</h3>
                    <p className='p text-text-color'>EdgeSense&#39;s real-time IoT data and advanced analytics streamline operations, boost efficiency, and cut costs, enhancing productivity and reducing waste.</p>
                    <h3 className="h4 font-semibold text-text-color">Real-Time Insights for Smarter Decision-Making </h3>
                    <p className='p text-text-color'>EdgeSense&#39;s comprehensive insights and customizable IoT dashboards enable informed decisions that drive operational excellence, optimize processes, and streamline maintenance for success.</p>
                    <h3 className="h4 font-semibold text-text-color">Increased Equipment Uptime and Longevity</h3>
                    <p className='p text-text-color'>Predictive maintenance alerts enhance equipment lifespan and performance, reducing downtime and maximizing your machinery investment through proactive care.</p>
                </div>
                <Image className="rounded-3xl w-full h-auto object-contain"
                    src="/io-sence-benifit.png"
                    alt="Picture of the author"
                    width={490}
                    height={400}
                />
            </div>
        </section>
    )
}

export default Benifits
