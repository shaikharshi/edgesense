import AboutBanner from '@/components/About-page/AboutBanner'
import React from 'react'
import Image from 'next/image'
import Challenges from '@/components/CaseStudy/Challenges'
import CardComponent from '@/components/CardComponent'
import ResultCaseStudy from '@/components/CaseStudy/Result'
import Benifits from '@/components/CaseStudy/Benifits'
import NewsLetters from '@/components/NewsLetters'

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Case Study" },
    // { label: "L&T" },
];

const page = () => {
    return (
        <>
            <section>
                <AboutBanner
                    breadcrumb={breadcrumbItems}
                    heading={"L&T's Transformation with EdgeSense’s EdgeNode and EdgeVsion Solutions"} pagename={'Transforming Industries Operations with EdgeSen’s Cutting-Edge IoT Technology'} imageUrl={'/banner.png'} />

                <div className="flex flex-col items-center justify-center container py-10 md:py-10">
                    <Image
                        src={'/l&t-logo.png'}
                        alt={'L&T Logo'}
                        width={300}
                        height={100}
                    />
                    <p className='md:text-lg text-center mt-4 md:mt-10 '>Larsen & Toubro (L&T), a leading engineering and construction conglomerate, sought to optimize its industrial operations using advanced IoT solutions. By integrating Edge+&apos;s EdgeVision and EdgeNode, L&T achieved significant improvements in efficiency, productivity, and sustainability.</p>

                    <h2 className='h2 text-accent-color font-semibold mt-4 md:mt-12'>Problem Statement</h2>
                    <p className='md:text-lg text-center mt-2 '>L&T struggled with monitoring and managing their extensive industrial network. They faced issues with inefficient data collection, high maintenance costs from unexpected equipment failures, and difficulties in meeting sustainability standards. The absence of real-time insights and predictive maintenance capabilities worsened these problems, leading to increased downtime and higher operational costs.</p>

                </div>
            </section>

            <Challenges />

            <section className='container pb-24'>
                <h2 className='text-accent-color h2 font-semibold text-center'>Implementation</h2>
                <p className='text-text-color md:text-lg text-center'>Step-by-Step Deployment of EdgeNode and EdgeVision for Seamless Data Integration</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    <CardComponent icon={undefined} heading={'Step 1: Data Integration'} description={'We deployed EdgeNode to collect data from energy meters, PLCs, DCS, flow meters, and vibration sensors, enabling thorough monitoring.'} />

                    <CardComponent icon={undefined} heading={'Step 2: Real-Time Monitoring'} description={'EdgeVision provided L&T with real-time insights into operational performance and resource usage.'} />

                    <CardComponent icon={undefined} heading={'Step 3: Advanced Analytics'} description={'With EdgeVisions advanced analytics, L&T was able to spot inefficiencies, forecast equipment failures, and fine-tune maintenance schedules.'} />
                </div>
            </section>

            <ResultCaseStudy />
            <Benifits />
            <NewsLetters />
        </>
    )
}

export default page
