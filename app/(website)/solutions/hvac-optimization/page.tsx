import AboutBanner from '@/components/About-page/AboutBanner'
import CardComponent from '@/components/CardComponent'
import NewsLetters from '@/components/NewsLetters'
import EnergyManagementSystem from '@/components/solutions-l2/EngergyManagementSystem'
import KeyFeatures from '@/components/solutions-l2/KeyFeatures'
import SolutionsCard from '@/components/Solutions/SolutionsCard'
import React from 'react'
import { FaRegCircleDot } from 'react-icons/fa6'
import Image from 'next/image'

type SmartGatewayListProp = {
    icon: React.ReactNode;
    description: string;
}


const SmartGatewayList = ({ description }: SmartGatewayListProp) => {
    return (

        <div className="grid grid-cols-[40px_auto] items-center">
            <FaRegCircleDot className='text-2xl text-accent-color' />
            <p className='text-md text-text-color '>{description}</p>
        </div>
    )
}

const breadcrumbItems = [
    { label: "Home" },
    { label: "Solutions", href: "/solutions" },
    { label: "HVAC Optimization" },
];

const featureSets = [
    {
        title: 'Features of HVAC Monitoring Solution ',
        features: [
            { title: 'Real-time Monitoring', description: 'Survey your HVAC systems performance in real-time, with instantaneous updates on temperature, humidity, and pressure levels, ensuring proactive maintenance and improved efficiency.' },
            { title: 'Data Analytics', description: 'Gain valuable insights into your HVAC systems performance with our cloud-based analytics platform, providing detailed reports on energy consumption, usage patterns, and equipment lifespan.' },
            { title: 'Automated Maintenance Alerts', description: 'Receive automated alerts and notifications for maintenance needs, reducing downtime and ensuring your HVAC system runs at optimal levels, minimizing energy waste and costs.' },
            { title: 'Remote Access', description: 'Access your HVAC systems performance data remotely, from anywhere, at any time, enabling you to remotely monitor and control your system from a single platform, reducing the need for on-site visits.' },
            { title: 'Predictive Maintenance', description: 'Our advanced predictive maintenance capabilities analyze data to identify potential issues before they occur, enabling you to schedule maintenance proactively, reducing downtime and extending the lifespan of your HVAC equipment.' }
        ],
        imageSrc: '/key-features.png'
    },
];

const energyManagementContent = [
    {
        heading: 'Why Choose Our HVAC Monitoring System?',
        paragraphs: [
            'Our IoT-based HVAC monitoring solution provides exceptional efficiency, comfort, and sustainability. Our complete solution provides real-time monitoring and control, ensuring optimal indoor conditions while reducing energy consumption by up to 30%',
            'With our remotely monitored dashboard and customizable gateway, you will gain visibility into system performance, receive alerts for potential issues, and make data-driven decisions. Our solution also enables predictive maintenance, extends equipment lifespan, and supports environmental initiatives. By choosing our HVAC optimization solution, you will enjoy improved employee productivity, reduced costs, and enhanced building comfort - all while minimizing your environmental footprint'
        ],
        imageSrc: '/iot-dashboard.png',
        imageAlt: 'Connecting the World with EdgeNode - Edge Sense'
    },
];

const SolutionsDetails = () => {

    return (
        <>
            <section>
                <AboutBanner
                    breadcrumb={breadcrumbItems}
                    heading="HVAC Monitoring System"
                    pagename="Real-Time Monitoring for Best HVAC Performance"
                    imageUrl="/solution-banner.png" />
                <div className="container py-10">
                    <p className='text-text-color'>Monitor your HVAC system&abos;s performance with our IoT-based system. Sensors installed in the equipment detect temperature, humidity, and pressure levels. Data is transmitted to a gateway, which aggregates and processes the information. The gateway then sends the data to our cloud-based dashboard, where you can view real-time performance metrics, identify trends, and receive alerts for maintenance needs.</p>
                </div>

            </section>

            {featureSets.map((featureSet, index) => (
                <KeyFeatures
                    key={index}
                    title={featureSet.title}
                    features={featureSet.features}
                    imageSrc={featureSet.imageSrc}
                />
            ))}

            <section className='bg-tertiary-color py-14 lg:py-24'>
                <div className="container">
                    <h2 className='text-accent-color h2 font-semibold text-center'>HVAC Optimization Benefits</h2>

                    <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-2 mt-10 ">
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Improved Energy Efficiency"
                            description="IoT-based HVAC optimization reduces energy consumption by up to 30% by automatically adjusting temperature and humidity levels, leading to significant cost savings."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Enhanced Predictive Maintenance"
                            description="IoT sensors detect potential issues before they become major problems, reducing downtime and extending the lifespan of HVAC equipment, ensuring minimal disruption to business operations."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Increased Comfort and Productivity"
                            description="IoT-enabled HVAC systems provide precise temperature control, resulting in a more comfortable working environment, boosting employee productivity and overall job satisfaction."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Reduced Carbon Footprint"
                            description="By optimizing HVAC performance, IoT technology helps reduce greenhouse gas emissions, contributing to a more sustainable future and supporting environmental initiatives."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Smooth Monitoring and Control"
                            description="IoT-based HVAC monitoring systems provide real-time data and alerts, enabling facility managers to quickly respond to issues, making it easier to maintain optimal indoor conditions and reduce stress."
                        />
                    </div>


                </div>
            </section>

            {energyManagementContent.map((content, index) => (
                <EnergyManagementSystem
                    key={index}
                    heading={content.heading}
                    paragraphs={content.paragraphs}
                    imageSrc={content.imageSrc}
                    imageAlt={content.imageAlt}
                />
            ))}


            <section className='container  py-14 md:py-24'>
                <h2 className='text-accent-color h2 font-semibold text-center'>Recommended Solution</h2>
                <p className='text-text-color  text-center text-lg'>EdgeNode - IOT Gateway & Edge Vision – Easy-to-use Dashboard</p>
                <p className='text-text-color  mt-2 text-center text-lg'>Introducing EdgeNode, our cutting-edge IoT gateway, and EdgeVision, our intuitive dashboard. Together, they form the ultimate HVAC optimization solution, providing real-time monitoring and control, predictive maintenance, and actionable insights to optimize your buildingz&apos;s performance. </p>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-6">

                    <div className="flex flex-col gap-6 pt-20">
                        <h3 className='text-accent-color font-semibold h3'>Benefits of Edge Vision & EdgeNode</h3>
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Real-Time Performance Tracking: EdgeNode continuously monitors HVAC systems, providing real-time data on performance, energy usage, and conditions to ensure optimal operation."
                        />

                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Energy Savings: Optimize HVAC operations by using data from EdgeVision to reduce energy consumption, lower costs, and improve overall system efficiency."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Comfort Control: Maintain a consistent and comfortable indoor climate by monitoring and adjusting HVAC settings based on precise data from EdgeNode."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Predictive Maintenance: Identify potential issues before they affect comfort levels or system efficiency, ensuring your HVAC system runs smoothly and reliably."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Easy Integration: EdgeNode integrates seamlessly with existing HVAC systems, allowing you to enhance your current setup with advanced monitoring and control capabilities."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="User-Friendly Interface: With EdgeVision’s intuitive dashboard, you can easily adjust and optimize HVAC settings, making it simple to maintain comfort and efficiency."
                        />

                    </div>

                    <Image className="w-full h-auto object-contain hidden md:block"
                        src="/smart-gateway-integration.png"
                        alt="Picture of the author"
                        width={640}
                        height={350}
                    />
                </div>

            </section>

            <section className='pb-20'>
                <div className="container">
                    <h2 className='text-accent-color h2 font-semibold text-center'>Case Studies</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                        <SolutionsCard
                            imageSrc="/l&t-transformation.png"
                            altText="L&T's Transformation with EdgeVision and EdgeNode - Edge Sense"
                            title="L&T's Transformation with EdgeVision and EdgeNode"
                            link='/case-study'
                            description="Optimize its industrial operations with leading-edge IoT solutions." />
                        {/* <SolutionsCard
                            imageSrc="/smart-expansion.png"
                            altText="Smart Expansion of WinMas Technicals with EdgeNode - Edge Sense"
                            title="Smart Expansion of WinMas Technicals with EdgeNode"
                            description="Optimize its industrial operations with leading-edge IoT solutions." />
                        <SolutionsCard
                            imageSrc="/digital-transformation.png"
                            altText="Digital Transformation With EdgeVision for DigiBoard - Edge Sense"
                            title="Digital Transformation With EdgeVision for DigiBoard"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /> */}
                    </div>
                </div>

            </section>

            <NewsLetters />

        </>
    )
}

export default SolutionsDetails
