import React from 'react'
import { FaRegCircleDot } from 'react-icons/fa6'
import Image from 'next/image'

type SmartGatewayListProp = {
    icon: React.ReactNode;
    description: string;
    title: string;
}

const SmartGatewayList = ({ description, title }: SmartGatewayListProp) => {
    return (

        <div className="grid grid-cols-[40px_auto] items-center">
            <FaRegCircleDot className='text-2xl text-accent-color' />
            <div>
                <h3 className='text-accent-color h4 font-semibold'>{title}</h3>
                <p className='text-md text-text-color '>{description}</p>
            </div>
        </div>
    )
}


const Benifits = () => {
    return (
        <section className='container py-14 lg:py-24'>
            <div className='flex flex-col-reverse sm:grid sm:grid-cols-2 sm:items-center gap-6'>
                <div className="flex flex-col gap-6 pt-4">
                    <h3 className='text-accent-color font-semibold h3'>Benefits</h3>
                    <SmartGatewayList
                        icon={<FaRegCircleDot />}
                        description="L&T cut down on resource use, meeting their sustainability goals and regulatory standards." title={'Sustainability:'} />
                    <SmartGatewayList
                        icon={<FaRegCircleDot />}
                        description="Better operations and less downtime led to significant cost savings, boosting L&T’s profitability." title={'Cost Savings:'} />
                </div>
                <Image className="w-full h-auto object-contain"
                    src="/case-study-benifits.png"
                    alt="Picture of the author"
                    width={640}
                    height={350}
                />
            </div>
            <p className='text-text-color text-lg text-center mt-10'>By using EdgeSense’s EdgeVision and EdgeNode, L&T revamped its industrial processes, achieving higher efficiency, sustainability, and cost-effectiveness. This case study highlights how innovative IoT dashboards and gateways can tackle complex industrial challenges.</p>
        </section>
    )
}

export default Benifits
