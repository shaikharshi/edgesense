import React from 'react'
import RequestDemo from '../RequestDemo.tsx/RequestDemo'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'

const IoSenceBanner = () => {
    return (
        <div className="w-full bg-[url('/io-sence-banner.png')] pt-32 pb-10 md:pb-24 lg:h-[660px]">
            <Breadcrumb className='flex justify-center'>
                <BreadcrumbList className='text-lg'>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link href="/" className='text-white'>Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='text-white' />
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <span className='text-white'>Products</span>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='text-white' />
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <span className='text-white font-semibold'>EdgeVision</span>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex items-center justify-center text-center bg-cover bg-center mt-4'>
                <div className="container lg:w-[850px]">
                    <h1 className='h1 text-white leading-tight font-semibold'>Transforming Real-Time IoT Data into Actionable Insights</h1>
                    <p className='text-white text-lg mt-4 pb-8'>EdgeVision transforms complex IoT data into clear, actionable insights with real-time monitoring, alerts, and automated actions, enabling enterprises to quickly realize their Industry 5.0 vision.</p>
                    <RequestDemo ButtonClass="text-accent-color bg-white px-5 py-5 border-[1px] border-transparent rounded-xl font-semibold hover:bg-accent-color hover:text-white hover:border-[1px] hover:border-white" buttonName="Request Demo" />
                </div>
            </div>
        </div>
    )
}

export default IoSenceBanner
