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
    { label: "Steam trap monitoring" },
];

const featureSets = [
    {
        title: 'Features of IoT based Steam Trap Monitoring',
        features: [
            { title: 'Real-time Monitoring', description: 'Our IoT-based steam trap monitoring system provides real-time data on steam trap performance, enabling prompt detection and correction of potential issues.' },
            { title: 'Wireless Connectivity ', description: 'Our wireless connectivity allows for easy installation and reduced maintenance costs, eliminating the need for costly and time-consuming wiring and cabling.' },
            { title: 'Advanced Analytics', description: 'Our IoT-based steam trap monitoring system leverages advanced analytics to identify trends and patterns, enabling proactive maintenance and predictive maintenance strategies.' },
            { title: 'Remote Alerting', description: 'Receive real-time alerts and notifications via email, SMS, or mobile app, ensuring prompt response to potential issues and reducing downtime and lost productivity.' },
            { title: 'Data Visualization', description: 'Our intuitive dashboard provides easy-to-understand data visualization, allowing operators to quickly identify trends, anomalies, and potential issues, enabling data-driven decision making.' }
        ],
        imageSrc: '/key-features.png'
    },
];

const energyManagementContent = [
    {
        heading: 'Why Choose Our Steam Trap Monitoring Solution?',
        paragraphs: [
            'Choose our steam trap monitoring solution to revolutionize your plants maintenance and operations. Our solution uses advanced IoT technology to provide real-time monitoring and alerting, allowing you to identify and address issues before they become major problems. ',
            'With our solution, you will enjoy increased efficiency, reduced energy consumption, and improved safety. Our solution is easy to install and integrates seamlessly with your existing infrastructure, providing a quick return on investment. Plus, our expert support team is always available to help you get the most out of your solution.'
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
                    heading="Steam Trap Monitoring"
                    pagename="Streamline Steam Trap Operations with Ease"
                    imageUrl="/solution-banner.png" />
                <div className="container py-10">
                    <p className='text-text-color'>Steam trap monitoring using IoT optimizes steam system efficiency. IoT sensors attached to steam traps collect real-time data on temperature, pressure, and vibration. This data is transmitted to a central gateway, which processes information and sends it to a cloud-based platform. Here, data is analyzed to identify trap failures, energy waste, and potential issues. A user-friendly dashboard displays this information, enabling proactive maintenance, energy savings, and improved overall plant performance.</p>
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
                    <h2 className='text-accent-color h2 font-semibold text-center'>Steam Trap Monitoring Benefits </h2>

                    <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-2 mt-10 ">
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Increased Efficiency"
                            description="Steam trap monitoring helps reduce maintenance time and costs, allowing operators to focus on other critical tasks, resulting in increased productivity and efficiency."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Energy Savings "
                            description="Proactive monitoring and maintenance of steam traps reduce energy waste, lowering energy consumption and costs, and minimizing the environmental impact of your facility. "
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Improved Safety "
                            description="Real-time monitoring and alerting enable rapid response to potential issues, reducing the risk of accidents, injuries, and equipment damage, ensuring a safer working environment."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Extended Equipment Lifespan "
                            description="Regular monitoring and maintenance of steam traps help prevent premature wear and tear, extending equipment lifespan and reducing the need for costly repairs and replacements."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Reduced Downtime "
                            description="Steam trap monitoring enables predictive maintenance, reducing downtime and lost productivity, and minimizing the impact of equipment failures on your operations and bottom line."
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
                <p className='text-text-color  mt-2 text-center text-lg'>The EdgeNode is a rugged, industrial-grade IoT gateway that connects to your steam trap sensors, capturing and transmitting critical data to the EdgeVision dashboard. This intuitive dashboard provides real-time monitoring and visualization of your steam trap performance, alerting you to potential issues before they become major problems. With EdgeNode and EdgeVision, you can optimize your steam trap maintenance schedules, reduce downtime, and improve overall plant efficiency.</p>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-6">

                    <div className="flex flex-col gap-6 pt-20">
                        <h3 className='text-accent-color font-semibold h3'>Benefits of Edge Vision & EdgeNode</h3>
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Continuous Monitoring: EdgeNode offers 24/7 monitoring of steam traps, ensuring that you always have real-time data on steam trap performance and efficiency."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Fault Detection: Quickly identify failing or malfunctioning steam traps with EdgeNode’s precise monitoring, helping you prevent energy loss and maintain system efficiency."
                        />
                         <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Reduced Downtime: By catching issues early with data from EdgeVision, you can prevent costly shutdowns and keep your operations running smoothly."
                        />
                         <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Energy Efficiency: Optimize steam usage by addressing issues before they escalate, reducing energy consumption and lowering operational costs."
                        />
                         <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Simple Setup: EdgeNode integrates seamlessly with your existing steam systems, providing a hassle-free solution for enhanced monitoring."
                        />
                         <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Data Visualization: EdgeVision’s intuitive dashboard makes it easy to view, analyze, and act on steam trap performance data, ensuring your system operates at its best."
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
