import React from 'react'
import Image from 'next/image'
import { FaRegCircleDot } from 'react-icons/fa6'

type SmartGatewayListProp = {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const SmartGatewayList = ({ icon, description, title }: SmartGatewayListProp) => {
    return (
        <div className="grid grid-cols-[40px_auto] items-center">
            {icon}
            <div>
                <h3 className='text-accent-color h5 font-semibold'>{title}</h3>
                <p className='text-md text-text-color '>{description}</p>
            </div>
        </div>
    )
}

const Challenges = () => {
    return (
        <section className='container pb-14 lg:pb-24'>
            <div className="flex flex-col gap-6 justify-center md:grid md:grid-cols-2 gap-x-14 items-center md:mt-10">
                <Image className="rounded-3xl w-full h-auto object-cover"
                    src="/benifits.png"
                    alt="Picture of the author"
                    width={420}
                    height={320}
                />
                <div className='flex flex-col gap-2'>
                    <h2 className='text-accent-color font-semibold h2'>Challenges</h2>
                    <p className="p text-text-color">L&T faced several key issues:</p>
                    <SmartGatewayList
                        icon={<FaRegCircleDot className='text-2xl text-accent-color' />}
                        description="High energy and water consumption."
                        title="Inefficient Resource Use:"
                    />
                    <SmartGatewayList
                        icon={<FaRegCircleDot className='text-2xl text-accent-color' />}
                        description="Frequent equipment failures caused operational delays."
                        title="Unplanned Downtime:"
                    />
                    <SmartGatewayList
                        icon={<FaRegCircleDot className='text-2xl text-accent-color' />}
                        description="Struggled to merge data from different sources for a complete analysis."
                        title="Data Integration:"
                    />
                </div>
            </div>
            <p className='text-lg text-center text-text-color mt-10 lg:mt-14'>To tackle these challenges, L&T adopted EdgeSense&apos;s EdgeVision and EdgeNode. EdgeNode streamlined data collection from various sensors, while EdgeVision offered advanced analytics and real-time monitoring.</p>
        </section>
    )
}

export default Challenges


