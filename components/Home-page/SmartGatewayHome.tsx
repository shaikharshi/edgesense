import React from 'react'
import Image from 'next/image'
import { FaRegCircleDot } from 'react-icons/fa6'
import Link from 'next/link';
import RequestDemo from '../RequestDemo.tsx/RequestDemo';


type SmartGatewayListProp = {
    icon: React.ReactNode;
    description: string;
}


const SmartGatewayList = ({ description }: SmartGatewayListProp) => {
    return (

        <div className="grid grid-cols-[40px_auto] items-center">
            <FaRegCircleDot className='text-2xl text-accent-color' />
            <p className='p text-text-color leading-7'>{description}</p>
        </div>
    )
}

const SmartGatewayHome = () => {
    return (
        <section className='container flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-center gap-6 md:py-24 py-14'>
            <div className="flex flex-col gap-6">
                <h2 className="text-accent-color h2 font-semibold">Effortless Integration with EdgeNode</h2>
                <p className='p text-text-color leading-7'>EdgeNode provides the broad portfolio of industrial protocol connectors, EdgeNodes, and APIs, which gives EdgeNodeivity for perfect capture of any type of data. </p>
                <SmartGatewayList
                    icon={<FaRegCircleDot />}
                    description="TheCompliant with major industrial protocols such as Profinet, Modbus TCP/RS 485, Bacnet, IEC 61850, HART, OPC UA/DA Ethernet IP, MQTT, etc."
                />

                <SmartGatewayList
                    icon={<FaRegCircleDot />}
                    description="Portfolio of EdgeNode hardware to enable different connectivity like 4G, GPRS, WiFi, LoRaWAN, Ethernet, etc."
                />

                <SmartGatewayList
                    icon={<FaRegCircleDot />}
                    description="API integration with third party systems"
                />
                <div className="flex items-center gap-6 pt-4">
                    <Link className="text-accent-color underline hover:no-underline" href={{ pathname: '/products/edgenode' }}>Learn more</Link>
                    <RequestDemo ButtonClass="text-white bg-accent-color rounded-2xl py-2 px-4 hover:bg-white border-[1px] border-transparent hover:text-accent-color hover:border-[1px] hover:border-accent-color" buttonName="Request Demo" />
                </div>
            </div>
            <Image className="w-full h-auto object-contain"
                src="/smart-gateway-integration.png"
                alt="Picture of the author"
                width={640}
                height={350}
            />
        </section>

    )
}

export default SmartGatewayHome
