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
    { label: "Water Management System" },
];

const featureSets = [
    {
        title: 'Features of Water Management System',
        features: [
            { title: 'Real-Time Water Monitoring', description: 'IoT devices provide continuous, real-time data on water levels, usage, and quality, allowing for instant detection of irregularities and efficient management.' },
            { title: 'Automated Water Distribution', description: 'The system automates water distribution, ensuring precise allocation based on real-time demand, reducing waste, and optimizing resource utilization for sustainable water management.' },
            { title: 'Leak Detection and Alerts', description: 'IoT sensors detect leaks early, sending instant alerts to users, preventing water loss and reducing maintenance costs by enabling prompt repairs.' },
            { title: 'Remote Control and Access', description: 'Manage and control water systems remotely through a user-friendly interface, offering convenience and flexibility in overseeing water resources from anywhere.' },
            { title: 'Data Analytics for Optimization', description: 'Analyze collected data to identify usage patterns, predict demand, and optimize water consumption, leading to informed decision-making and sustainable practices.' },
        ],
        imageSrc: '/key-features.png'
    },
];

const energyManagementContent = [
    {
        heading: 'Why Choose Our Water Management System?',
        paragraphs: [
            'Our solution combines the latest IoT technology with advanced data analytics to provide exceptional water management capabilities. With our system, you will enjoy real-time monitoring, automated control, and predictive maintenance, ensuring optimal water usage and reduced waste. Our user-friendly interface and user-friendly dashboards make it easy to track and manage your water usage, while our data-driven insights enable you to make informed decisions',
            'Plus, our system is designed to be scalable and flexible, accommodating your growing needs and adapting to your unique requirements. With our Water Management System, you will experience a seamless and efficient way to manage your water resources, ensuring a sustainable future for your business and the environment.'
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
                    heading="IoT-Based Water Management System"
                    pagename="Transform water usage with real-time monitoring solutions."
                    imageUrl="/solution-banner.png" />
                <div className="container py-10">
                    <p className='text-text-color'>Our Smart Water Management System utilizes IoT devices to monitor and optimize water usage. Sensors are installed at the source, detecting water flow and pressure. Data is transmitted to the IoT gateway, which processes and analyzes the information. The insights are then displayed on our user-friendly dashboard, providing real-time monitoring and alerts for leaks, usage patterns, and other anomalies.</p>
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
                    <h2 className='text-accent-color h2 font-semibold text-center'>IoT-Integrated Water Management System Benefits</h2>

                    <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-2 mt-10 ">
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Reduced Water Loss"
                            description="IoT-enabled sensors detect leaks and water losses in real-time, reducing water waste by up to 30% and saving valuable resources.   "
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Improved Efficiency"
                            description="Automated control and monitoring enable optimal water usage, reducing energy consumption and costs by up to 25% while maintaining quality."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Enhanced Maintenance"
                            description="Predictive maintenance scheduling and automated alerts reduce downtime and maintenance costs by up to 20%, ensuring continuous operations."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Increased Transparency"
                            description="Real-time monitoring and data analytics provide insights into water usage patterns, enabling data-driven decisions to optimize usage and reduce waste."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Increased Sustainability"
                            description="IoT-enabled water management systems promote sustainable practices, reducing the environmental impact of water usage while supporting long-term business goals."
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
                <p className='text-text-color  mt-2 text-center text-lg'>Our Iot-Gateway EdgeNode and dashboard EdgeVision combine to offer the ultimate water management solution. With seamless IoT integration and real-time data visualization, this powerful duo ensures optimal control, efficiency, and sustainability for your water resources.</p>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-6">

                    <div className="flex flex-col gap-6 pt-20">
                        <h3 className='text-accent-color font-semibold h3'>Benefits of Edge Vision & EdgeNode</h3>
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Real-Time Monitoring: EdgeNode continuously tracks water usage, flow rates, and quality, providing instant data that you can easily view and analyze through EdgeVision’s user-friendly dashboard."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Leak Detection: Detect leaks early with EdgeNode’s precise monitoring, helping you quickly address issues and minimize water loss, saving resources and costs."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Efficient Resource Management: With clear insights from EdgeVision, you can manage water resources more effectively, ensuring optimal usage and reducing waste."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Seamless Integration: EdgeNode and EdgeVision easily integrate with your existing water management systems, allowing for smooth operation and enhanced monitoring capabilities."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Cost Savings: By optimizing water usage and detecting issues early, you can significantly reduce water bills and operational costs."
                        />
                        <SmartGatewayList
                            icon={<FaRegCircleDot />}
                            description="Regulatory Compliance: Ensure compliance with water management regulations through accurate and reliable data provided by EdgeNode and easily accessible on EdgeVision."
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
