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
    { label: "Predictive Maintenance" },
];

const featureSets = [
    {
        title: 'Predictive Maintenance Features',
        features: [
            { title: 'Energy Consumption Monitoring', description: 'Tracking energy consumption patterns (electricity, gas, thermal imaging) can reveal inefficiencies and potential issues' },
            { title: 'Sensor Data Collection', description: 'Predictive maintenance heavily relies on data collected from various sensors installed on equipment. These sensors monitor parameters like temperature, pressure, vibration, humidity, and sound.' },
            { title: 'Failure Prediction', description: 'Predictive maintenance solutions go beyond merely detecting anomalies; they aim to predict potential failures before they occur. This allows for proactive maintenance, minimizing downtime.' },
            { title: 'Root Cause Analysis', description: 'Some solutions can identify the root causes of potential failures, enabling maintenance teams to address underlying issues rather than just symptoms.' },
            { title: 'Real-time Alerts', description: 'When potential issues are identified, the system triggers real-time alerts (notifications, emails) to notify maintenance teams, enabling prompt action.' }
        ],
        imageSrc: '/key-features.png'
    },
];

const energyManagementContent = [
    {
        heading: 'Why Choose Our Predictive Maintenance System?',
        paragraphs: [
            'Tired of unexpected equipment breakdowns? Optimize your maintenance routine with our cutting-edge predictive maintenance system. Our solution uses advanced IoT technology to monitor your equipments performance, detecting potential issues before they become major problems. With our system, you will enjoy increased uptime, reduced downtime, and lower maintenance costs. ',
            'Plus, our user-friendly dashboard provides real-time insights and alerts, enabling you to proactively address issues and extend the lifespan of your equipment. By choosing our predictive maintenance system, you will be able to streamline your operations, boost productivity, and achieve greater efficiency - all while reducing the risk of costly repairs and downtime.'
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
                    heading="Predictive Maintenance using IOT"
                    pagename="Predict equipment failures, improve maintenance strategy and save costs."
                    imageUrl="/solution-banner.png" />
                <div className="container py-10">
                    <p className='text-text-color'>IoT predictive maintenance is a smart way to keep your machinery running smoothly. It involves using sensors to collect data about your equipment&apos;s condition. This data is then analyzed to predict when something might break. By knowing this in advance, you can schedule repairs and avoid unexpected downtime, saving you time and money.</p>
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
                    <h2 className='text-accent-color h2 font-semibold text-center'>Benefits of Predictive Maintenance</h2>

                    <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-2 mt-10 ">
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Enhanced Inventory Management"
                            description="Predictive maintenance helps optimize inventory management by reducing the need for holding large quantities of spare parts for emergency repairs. By anticipating maintenance needs, organizations can streamline their inventory and reduce associated costs."
                        />
                       <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Improved Workplace Safety"
                            description="Predictive maintenance helps create a safer work environment by reducing the likelihood of equipment failures that could lead to accidents or injuries. By proactively addressing potential issues, organizations can mitigate risks and ensure a safer workplace for their employees."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Optimized Maintenance Schedules"
                            description="Unlike traditional preventive maintenance that relies on fixed schedules, predictive maintenance tailors maintenance activities based on the actual condition of the equipment. This eliminates unnecessary maintenance tasks, saving time, resources, and costs."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Extended Asset Lifespan"
                            description="By identifying and rectifying issues in their early stages, organizations can prolong the operational life of their assets. This translates to delayed capital expenditures on replacements and better utilization of existing resources."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Valuable Business Insights"
                            description="The data collected and analyzed through predictive maintenance provides valuable insights into equipment performance, maintenance trends, and potential areas for process improvement. These insights can inform strategic decisions related to asset management, resource allocation, and overall operational efficiency."
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
                <p className='text-text-color  mt-2 text-center text-lg'>Our EdgeNode IoT Gateway and EdgeVision Dashboard provide the ultimate Predictive Maintenance solution, offering real-time monitoring, precise data analysis, and early issue detection to maximize equipment lifespan and minimize downtime. Trust in reliability and efficiency.</p>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-6">

                    <div className="flex flex-col gap-6 pt-20">
                        <h3 className='text-accent-color font-semibold h3'>Benefits of Edge Vision & EdgeNode</h3>
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Proactive Monitoring: EdgeNode collects real-time data on equipment conditions, enabling you to anticipate maintenance needs and prevent failures before they happen."
                        />
                       
                       <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Reduce Downtime: With early detection of potential issues, you can schedule maintenance during planned downtime, avoiding unexpected equipment failures and costly disruptions."
                        />
                         <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Lower Maintenance Costs: By addressing issues early, you can save on repair costs and extend the life of your equipment, making maintenance more cost-effective."
                        />
                         <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Extend Equipment Life: Regular monitoring and timely maintenance help keep machinery in optimal condition, prolonging its lifespan and reducing the need for replacements."
                        />
                         <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Data-Driven Decisions: EdgeVision provides clear, actionable insights from the data collected by EdgeNode, helping you make informed decisions about maintenance and repairs."
                        />
                         <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Custom Alerts: Set up specific alerts for critical conditions, so you’re immediately notified when something needs attention, allowing you to act quickly."
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
