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
    { label: "Energy Management System" },
];

const featureSets = [
    {
        title: 'Features of Energy Management System',
        features: [
            { title: 'Customizable Reporting', description: 'Generate tailored energy reports based on specific metrics and periods, enabling detailed analysis and better understanding of energy consumption trends.' },
            { title: 'Dynamic Load Management', description: 'Automatically balance energy loads across multiple devices, preventing overloads and optimizing the distribution of power to improve overall system efficiency.' },
            { title: 'Energy Usage Forecasting', description: 'Utilize historical data and predictive analytics to forecast future energy needs, allowing for proactive adjustments and better resource planning.' },
            { title: 'Integration with Renewable Sources', description: 'Seamlessly integrate and manage energy from renewable sources, optimizing usage and contributing to sustainability goals by incorporating solar or wind power data.' },
            { title: 'User Behavior Analysis', description: 'Monitor and analyze user behavior patterns to identify opportunities for energy-saving adjustments, offering personalized recommendations for more efficient energy use.' }
        ],
        imageSrc: '/key-features.png'
    },
];

const energyManagementContent = [
    {
        heading: 'Why Choose Our Energy Management System?',
        paragraphs: [
            'Our Energy Management System is the ultimate solution for optimizing energy efficiency in industrial environments. We combine cutting-edge IoT technology with a powerful dashboard to give you real-time insights and control over your energy usage. Our IoT gateway seamlessly integrates with your existing systems, providing accurate data collection and transmission.',
            'The intuitive dashboard allows for easy monitoring and analysis, enabling you to make informed decisions that reduce costs, improve efficiency, and enhance sustainability. With our system, you gain unmatched visibility and control over your energy management, making it the best choice for industries committed to innovation and efficiency.'
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
                    heading="Energy Management System"
                    pagename="Achieve cost savings with advanced energy tracking"
                    imageUrl="/solution-banner.png" />
                <div className="container py-10">
                    <p className='text-text-color'>In an IoT Energy Management System, sensors are installed to monitor energy usage across devices. These sensors collect real-time data, which is then transmitted to the IoT gateway, like EdgeNode, for processing and secure transmission. The gateway sends the data to a centralized dashboard, such as EdgeVision, where users can visualize and analyze energy consumption patterns, optimize usage, and make data-driven decisions to enhance energy efficiency.</p>
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
                    <h2 className='text-accent-color h2 font-semibold text-center'>Benefits of Energy Management System </h2>

                    <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-2 mt-10 ">
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Lower Energy Bills"
                            description="By tracking and managing energy use, the system helps cut down on wasted energy, leading to lower monthly utility bills."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Better Efficiency"
                            description="The system helps make sure that energy is used in the most effective way, so nothing is wasted and everything runs smoothly."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Smarter Choices"
                            description="With detailed energy data, you can make better decisions about how to use energy, leading to improved overall management."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Eco-Friendly"
                            description="The system helps use renewable energy sources and manage resources wisely, reducing the impact on the environment and supporting green goals."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Prevent Problems"
                            description="By spotting issues early, the system helps fix potential problems before they become major, keeping your equipment in good working order. "
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
                <p className='text-text-color  mt-2 text-center text-lg'>For unparalleled Energy management, choose EdgeNode and EdgeVision. EdgeNode provides seamless IoT connectivity, while EdgeVision offers a powerful, integrated dashboard for real-time insights and streamlined management. Together, they ensure flawless energy execution and superior control.
                </p>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-6">

                    <div className="flex flex-col gap-6 pt-20">
                        {/* <h3 className='text-accent-color font-semibold h3'>Key Benefits</h3> */}
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Continuous Energy Monitoring: EdgeNode tracks energy consumption and performance in real time, giving you a comprehensive view of your energy usage across your facility."
                        />

                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Identify Waste: Easily spot inefficiencies and energy waste with precise data from EdgeNode, helping you take corrective actions to optimize energy use."
                        />

                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Cost Reduction: By optimizing energy consumption with insights from EdgeVision, you can significantly reduce energy bills and improve your facility’s overall efficiency."
                        />

                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Sustainability Goals: Support your sustainability initiatives by using accurate energy data to minimize waste and lower your carbon footprint."
                        />

                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Customized Reporting: EdgeVision allows you to generate detailed, customized reports that meet your specific energy management needs, helping you track progress and make informed decisions."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Improved Decision Making: Use clear, actionable data from EdgeVision to make informed decisions about energy management, ensuring optimal performance and cost savings."
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
