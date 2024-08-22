import AboutBanner from '@/components/About-page/AboutBanner'
import CardComponent from '@/components/CardComponent'
import NewsLetters from '@/components/NewsLetters'
import EnergyManagementSystem from '@/components/solutions-l2/EngergyManagementSystem'
import EngergyManagementSystem from '@/components/solutions-l2/EngergyManagementSystem'
import KeyFeatures from '@/components/solutions-l2/KeyFeatures'
import RecommendedSolution from '@/components/solutions-l2/RecommendedSolution'
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
    { label: "Busbar Monitoring System" },
];

const featureSets = [
    {
        title: 'Key Features of Busbar Monitoring System',
        features: [
            { title: 'Dynamic Load Monitoring', description: 'Track and analyze real-time load changes on busbars, helping to balance electrical loads and prevent overload conditions effectively.' },
            { title: 'Predictive Maintenance Insights', description: 'Use advanced analytics to predict potential issues before they occur, allowing for proactive maintenance and reducing unexpected downtime.' },
            { title: 'Power Quality Measurement', description: 'Monitor power quality metrics such as voltage fluctuations and harmonics, ensuring stable and reliable electrical performance.' },
            { title: 'Customizable Dashboards', description: 'Create and customize dashboards to display relevant data and metrics according to specific operational needs and preferences.' },
            { title: 'Integration with Energy Management Systems', description: 'Connect seamlessly with broader energy management systems for comprehensive oversight, enabling better coordination and optimization of energy resources.' }
        ],
        imageSrc: '/key-features.png'
    },
];

const energyManagementContent = [
    {
        heading: 'Why Choose Our Busbar Monitoring System?',
        paragraphs: [
            'Our Wireless Busbar Temperature Monitoring System is designed for simplicity and effectiveness. It provides constant, real-time updates on busbar conditions, helping you catch and address issues before they become serious problems.',
            'With instant notifications and an easy-to-navigate dashboard, you can keep an eye on your system from anywhere and make quick decisions. The system fits seamlessly into your current setup and can expand as your needs change, ensuring you always have reliable protection and optimal performance for your electrical infrastructure. '
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
                    heading="Busbar Monitoring System"
                    pagename="Smart Temperature Monitoring for Optimized Operations"
                    imageUrl="/solution-banner.png" />
                <div className="container py-10">
                    <p className='text-text-color'>A Busbar Monitoring System uses sensors to track temperature and current flow across busbars. These sensors collect real-time data and send it to a central IoT gateway. The gateway processes and transmits the information to a dashboard, where users can view and analyze the data. This system enables proactive maintenance, prevents overheating, and ensures the efficient operation of electrical systems by providing timely alerts and insights.</p>
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
                    <h2 className='text-accent-color h2 font-semibold text-center'>Busbar Monitoring Benefits</h2>

                    <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-2 mt-10 ">
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Enhanced Operational Insights"
                            description="Detailed analytics provide deep insights into bus bar performance and usage patterns, allowing for more informed decision-making and strategic planning."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Optimized Energy Consumption"
                            description="By monitoring real-time data, you can identify inefficiencies and adjust operations to reduce energy waste and lower utility expenses."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Quick Issue Resolution"
                            description="Immediate alerts and diagnostic tools help quickly identify and address issues, reducing the time required to resolve problems and minimizing disruptions."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Regulatory Compliance"
                            description="Automated data logging and reporting assist in meeting regulatory requirements and standards, simplifying compliance and documentation processes."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Scalable Solution"
                            description="Easily expand the bus bar monitoring system as your infrastructure grows, accommodating additional busbars and integrating with other IoT devices for comprehensive oversight."
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
                <p className='text-text-color  text-center text-lg'>IOT Gateway - EdgeNode  & Easy-to-use Dashboard - Edge Vision</p>
                <p className='text-text-color  mt-2 text-center text-lg'>For unmatched busbar monitoring, choose EdgeNode and EdgeVision. EdgeNode (IoT Gateway) offers seamless IoT connectivity, while Edge Vision (Dashboard) provides an intuitive, real-time dashboard for comprehensive data analysis. Together, they ensure optimal performance, safety, and efficiency.</p>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-6">

                    <div className="flex flex-col gap-6 pt-20">
                        <h3 className='text-accent-color font-semibold h3'>Benefits of Edge Vision & EdgeNode</h3>
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Real-Time Data Collection: EdgeNode continuously monitors busbar conditions, providing you with up-to-date information on electrical performance and safety."
                        />

                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Prevent Failures: Detect anomalies and potential failures early with EdgeNode, helping you prevent costly electrical failures and ensure system reliability."
                        />

                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Enhanced Safety: Maintain the safety of your electrical systems with precise, real-time monitoring, reducing the risk of electrical hazards."
                        />

                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Prolong Equipment Life: Keep busbars and related equipment in optimal condition by regularly monitoring performance and addressing issues before they escalate."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Simple Integration: EdgeNode integrates seamlessly with your existing electrical systems, providing a comprehensive monitoring solution without disrupting current operations."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Clear Visualization: EdgeVision’s dashboard offers easy-to-understand visuals of busbar performance and status, enabling quick and informed decision-making."
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
