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


const breadcrumbItems = [
    { label: "Home" },
    { label: "Solutions", href: "/solutions" },
    { label: "Ambient Monitoring" },
];

const energyManagementContent = [
    {
        heading: 'Why Choose Our Ambient Air Monitoring System?',
        paragraphs: [
            'Stay ahead of the curve with our Ambient Air Monitoring System, unique accuracy and reliability in tracking air quality. Our IIoT technology combines IoT gateways, cloud-based analytics, and advanced algorithms to provide real-time monitoring and predictive insights.',
            'With our system, you\'ll gain a complete understanding of air quality trends and patterns, enabling data-driven decision-making and proactive pollution mitigation. Plus, our user-friendly dashboard and automated alert system ensure seamless communication and swift response to air quality issues. Trust our Ambient Air Monitoring System to safeguard public health and the environment, while driving sustainable development and growth.'
        ],
        imageSrc: '/iot-dashboard.png',
        imageAlt: 'Connecting the World with EdgeNode - Edge Sense'
    },
];

const featureSets = [
    {
        title: 'Features of Ambient Air Monitoring System',
        features: [
            { title: 'Predictive Analytics', description: 'The system\'s advanced analytics engine uses machine learning algorithms to predict future air quality trends, enabling proactive decision-making and prevention of pollution.' },
            { title: 'Automated Alert System', description: 'The system sends automated alerts to authorities and citizens when air quality levels exceed safety thresholds, ensuring timely response to pollution events.' },
            { title: 'Historical Data Analysis', description: 'The system stores and analyzes historical data on air quality, enabling users to identify patterns and trends, and develop targeted strategies to improve air quality.' },
            { title: 'Integration with Weather Forecast', description: 'The system integrates with weather forecasting data to provide a more accurate picture of air quality, taking into account weather conditions that can impact pollutant levels.' },
            { title: 'Wireless Data Transmission', description: 'IoT enabled sensors transmit data to a gateway, eliminating the need for cables and ensuring seamless communication.' }
        ],
        imageSrc: '/key-features.png'
    },
];

const SolutionsDetails = () => {
    return (
        <>
            <section>
                <AboutBanner
                    breadcrumb={breadcrumbItems}
                    heading="Ambient Monitoring"
                    pagename="Protect what you breathe, monitor the air."
                    imageUrl="/solution-banner.png" />
                <div className="container py-10">
                    <p className=''>The Ambient Air Quality Monitoring System is a cutting-edge technology that tracks and analyzes air quality in real-time. Equipped with sensors that detect pollutants like PM2.5, NO2, and CO, the system captures data on air quality. This data is transmitted wirelessly to a gateway, where it is processed and uploaded to a cloud-based dashboard. The dashboard provides an easy-to-use interface for monitoring and analyzing air quality data, allowing users to visualize trends and identify areas for improvement</p>
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
                    <h2 className='text-accent-color h2 font-semibold text-center'>Benefits of Ambient Air Quality Monitoring System</h2>

                    <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-2 mt-10 ">
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Improved Public Health"
                            description="Real-time air quality data empowers individuals to make informed decisions about outdoor activities and protect their health."
                        />
                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Enhanced Environment Monitoring Management"
                            description="Identifies pollution hotspots, enabling targeted interventions and policy development for cleaner air."
                        />

                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Cost-Effective Monitoring"
                            description="IoT devices offer affordable, scalable solutions for widespread air quality surveillance."
                        />

                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Early Warning Systems"
                            description="Detects sudden spikes in pollutants, allowing for timely alerts and emergency response."
                        />

                        <CardComponent
                            icon={<FaRegCircleDot />}
                            heading="Data-Driven Decision Making"
                            description="Provides valuable insights for urban planning, industrial operations, and disaster management."
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
            
            <RecommendedSolution />

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
