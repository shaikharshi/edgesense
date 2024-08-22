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
    { label: "Plant Digitalization" },
];

const featureSets = [
    {
        title: 'Features of Plant Digitalization System',
        features: [
            { title: 'Flexible Growth', description: 'Easily add more sensors and devices as your plant expands, without any hassle or disruption to ongoing operations.' },
            { title: 'Energy Savings', description: 'Track and manage energy use in real-time, helping you cut down on waste and save on energy costs.' },
            { title: 'Personalized Alerts', description: 'Set up custom notifications for specific events, so you’re only alerted when something important needs attention.' },
            { title: 'Asset Monitoring', description: 'AKeep tabs on the location and condition of equipment, making it easier to manage resources and avoid losses.' },
            { title: 'Strong Security', description: 'Adopting this digital transformation will protect your plant’s data with advanced security measures, keeping your digital systems safe from cyber threats.' }
        ],
        imageSrc: '/key-features.png'
    },
];

const energyManagementContent = [
    {
        heading: 'Why Choose Our Plant Digitalization System?',
        paragraphs: [
            'Our Plant Digitalization System offers a practical and efficient way to enhance your operations. With real-time monitoring, issues are detected early, preventing costly downtime. This factory digitalization system automates routine tasks, streamlining processes and allowing your team to focus on more critical work',
            'It also optimizes energy use, leading to significant cost savings. Additionally, you’ll gain better control over equipment and materials, ensuring everything is in place. Scalable and user-friendly, our solution adapts to your growing needs, making it a reliable tool for improving plant performance and safety.'
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
                    heading="IoT Solutions for Plant Digitalization"
                    pagename="Empower your plant with seamless, automated systems."
                    imageUrl="/solution-banner.png" />
                <div className="container py-10">
                    <p className='text-text-color'>IoT-based plant digitalization begins with sensors installed on machinery and equipment to collect real-time data on performance and conditions. This data is sent to an IoT gateway, where it&apos;s processed and transmitted securely to a cloud-based platform. From there, the data is visualized on a user-friendly dashboard, providing insights into operations, enabling remote monitoring, predictive maintenance, and optimizing efficiency across the plant.</p>
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
                    <h2 className='text-accent-color h2 font-semibold text-center'>Benefits of Industrial Plant Digitalization</h2>

                    <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-2 mt-10 ">
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Faster Problem Solving"
                            description="Detect issues early with real-time data, allowing quick fixes before they turn into bigger problems, minimizing disruptions."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Easier Maintenance"
                            description="Plan maintenance more effectively by knowing exactly when equipment needs attention, reducing unexpected breakdowns and extending equipment life."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Lower Energy Bills"
                            description="Monitor energy use closely and find ways to cut down on unnecessary consumption, saving money on energy costs."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Simpler Operations"
                            description="Automate routine tasks, making daily operations smoother and freeing up staff to focus on more important work."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Better Tracking"
                            description="Keep a close eye on equipment and materials, reducing losses and ensuring everything is in the right place when needed."
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
                <h2 className='text-accent-color h2 font-semibold text-center'>Recommended IIoT Solution for Plant Digitalization</h2>
                <p className='text-text-color  text-center text-lg'>EdgeNode - IOT Gateway & Edge Vision – Easy-to-use Dashboard</p>
                <p className='text-text-color  mt-2 text-center text-lg'>For top-tier plant digitalization, our EdgeNode IoT gateway and EdgeVision dashboard provide unmatched real-time monitoring and control. Together, they streamline operations, optimize energy use, and ensure seamless, efficient plant management, making them the ideal solution.</p>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-6">

                    <div className="flex flex-col gap-6 pt-20">
                        <h3 className='text-accent-color font-semibold h3'>Benefits of Edge Vision & EdgeNode</h3>
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Comprehensive Data Collection: EdgeNode captures a wide range of data from across your plant, helping you digitize operations for better control and efficiency."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Centralized Monitoring: EdgeVision brings all your plant’s data into one easy-to-use dashboard, allowing you to monitor and manage everything from a single location."
                        />

                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Improved Efficiency: With real-time data and analytics, you can optimize processes, reduce waste, and increase overall plant efficiency."
                        />

                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Scalable Solution: Whether your plant is small or large, EdgeNode and EdgeVision can scale with your needs, supporting the growth and evolution of your digitalization efforts."
                        />

                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Streamlined Operations: By integrating data from multiple sources into one platform, EdgeVision simplifies workflows and enhances decision-making across your plant."
                        />

                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Enhanced Communication: Share insights easily across teams and departments through EdgeVision, fostering better collaboration and more effective operations."
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
