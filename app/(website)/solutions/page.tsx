import NewsLetters from '@/components/NewsLetters'
import SolutionsCard from '@/components/Solutions/SolutionsCard'
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import SolutionNewsLetter from '@/components/SolutionNewsLetter'

const Solutions = () => {
    return (
        <>
            <section className='container text-center pt-40 pb-14 lg:pt-28 lg:pb-24 flex flex-col gap-2 lg:w-[800px]'>
                <Breadcrumb className='flex justify-center'>
                    <BreadcrumbList className='text-lg'>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/" className='hover:text-text-color'>Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <span className='text-black font-semibold cursor-pointer'>Solutions</span>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className='h2 text-accent-color font-semibold mt-3'>Innovative Industrial IoT Solutions</h1>
                <h2 className='h4 text-text-color font-semibold'>Transform Your Operations with Cutting-Edge Technology</h2>
                <p className='text-text-color'>Our holistic IoT solutions are designed to enhance industrial efficiency, sustainability, and performance. Solutions would enable actionable insights and proactive controls by leveraging real-time data and advanced analytics that optimize your operations.</p>
            </section>

            <section className='container grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6 pb-24'>
                <SolutionsCard
                    imageSrc="/energy-management-system.png"
                    altText="Energy Management System - Edge Sense"
                    title="Energy Management System"
                    description="Our Energy Management System (EMS)  provides comprehensive insights into energy usage patterns, enabling businesses to reduce costs..."
                    link="/solutions/energy-management-system"
                    linkName='Learn More'
                />


                <SolutionsCard
                    imageSrc="/water-management-system.png"
                    altText="Water Management System - Edge Sense"
                    title="Water Management System"
                    description="Our Water Management System is tailored to help industries manage their water resources efficiently. With real-time monitoring..."
                    link="/solutions/water-management-system"
                    linkName='Learn More'
                />


                <SolutionsCard
                    imageSrc="/hvac-optimization.png"
                    altText="HVAC Optimization - Edge Sense"
                    title="HVAC Optimization"
                    description="Our HVAC Optimization solution focuses on enhancing the efficiency and performance of heating, ventilation, & air conditioning systems..."
                    link="/solutions/hvac-optimization"
                    linkName='Learn More'
                />


                <SolutionsCard
                    imageSrc="/predictive-maintenance.png"
                    altText="Predictive Maintenance - Edge Sense"
                    title="Predictive Maintenance"
                    description="Our solution proactively  helps in reducing downtime, minimizing maintenance costs, and extending Machinery lifespan of machinery...."
                    link="/solutions/predictive-maintenance"
                    linkName='Learn More'
                />


                <SolutionsCard
                    imageSrc="/ambient-monitoring.png"
                    altText="Ambient Monitoring - Edge Sense"
                    title="Ambient Monitoring"
                    description="Our Ambient Monitoring solution provides comprehensive monitoring of environmental conditions such as temperature, humidity..."
                    link="/solutions/ambient-monitoring"
                    linkName='Learn More'
                />


                <SolutionsCard
                    imageSrc="/steam-trap-monitoring.png"
                    altText="Steam Trap Monitoring - Edge Sense"
                    title="Steam Trap Monitoring"
                    description="Our Steam Trap Monitoring solution is designed to optimize the performance of steam systems by monitoring steam traps in real-time..."
                    link="/solutions/steam-trap-monitoring"
                    linkName='Learn More'
                />


                <SolutionsCard
                    imageSrc="/busbar-monitoring.png"
                    altText="Busbar Monitoring - Edge Sense"
                    title="Busbar Monitoring"
                    description="Our Busbar Monitoring solution provides real-time insights into the performance and health of busbar systems. It helps in ensuring the..."
                    link="/solutions/busbar-monitoring"
                    linkName='Learn More'
                />


                <SolutionsCard
                    imageSrc="/plant-digitalization.png"
                    altText="Plant Digitalization - Edge Sense"
                    title="Plant Digitalization"
                    description="We transforms traditional industrial operations into smart, connected systems. By integrating IoT technology, it enables comprehensive..."
                    link="/solutions/plant-digitalization"
                    linkName='Learn More'
                />


            </section>

            <SolutionNewsLetter />
        </>
    )
}

export default Solutions
