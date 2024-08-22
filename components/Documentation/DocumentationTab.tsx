import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import TroubleShootingTips from './TroubleShootingTips'
import DownloadCard from '../Downloads/DownloadCard'

const DocumentationTab = () => {
    return (
        <div className="container pb-14 md:pb-24">
            <Tabs defaultValue="user-manuals" className="">
                <div className="flex justify-center">
                    <TabsList className="flex flex-wrap justify-around w-[700px] border-[1px] border-[#F3F9FF]">
                        <TabsTrigger className='px-4 py-3 p text-accent-color' value="user-manuals">User Manuals</TabsTrigger>
                        <TabsTrigger className='px-4 py-3 p text-accent-color' value="installation-guides">Installation Guides</TabsTrigger>
                        <TabsTrigger className='px-4 py-3 p text-accent-color' value="troubleshooting-tips">Troubleshooting Tips</TabsTrigger>
                    </TabsList>
                </div>


                <TabsContent value="user-manuals">
                    <p className='text-text-color p text-center mt-14'>Our user manuals offer clear, step-by-step instructions on using our IoT products. Each manual covers features, usage tips, and best practices to help you get the most from our IoT solutions.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-8">
                        <DownloadCard
                            imageSrc={'/smart-gateway-integration.png'}
                            altText={'Product Overview - Edge Sense '} title={'Product Overview'}
                            description={'Understand the core functionalities and benefits of our IoT solutions.'}
                            link='#'
                            linkClassName={'px-5 py-3 bg-accent-color text-white w-fit rounded-full'}
                            linkName='Download'
                        />

                        <DownloadCard
                            imageSrc={'/case-study-benifits.png'}
                            altText={'Getting Started - Edge Sense '} title={'Getting Started'}
                            description={'Learn how to set up your account, configure devices, and start collecting data.'}
                            link='#'
                            linkClassName={'px-5 py-3 bg-accent-color text-white w-fit rounded-full'}
                            linkName='Download'
                        />

                        <DownloadCard
                            imageSrc={'/iot-dashboard.png'}
                            altText={'Advanced Features - Edge Sense '} title={'Advanced Features'}
                            description={'Advanced capabilities, predictive maintenance, energy optimization, & data analytics.'}
                            link='#'
                            linkClassName={'px-5 py-3 bg-accent-color text-white w-fit rounded-full'}
                            linkName='Download'
                        />
                    </div>
                </TabsContent>

                <TabsContent value="installation-guides">
                    <p className='text-text-color p text-center mt-14'>Our installation guides make setting up and deploying our IoT solutions straightforward. They cover everything from hardware setup and software configuration to integrating with your existing systems.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-8">
                        <DownloadCard
                            imageSrc={'/smart-gateway-integration.png'}
                            altText={'Hardware Installation - Edge Sense '} title={'Hardware Installation'}
                            description={'Step-by-step instructions on installing sensors, gateways, and other hardware components.'}
                            link='#'
                            linkClassName={'px-5 py-3 bg-accent-color text-white w-fit rounded-full'}
                            linkName='Download'
                        />
                        <DownloadCard
                            imageSrc={'/iot-dashboard.png'}
                            altText={'Software Setup - Edge Sense '} title={'Software Setup'}
                            description={'Detailed guidance on installing and configuring our IoT software, including system requirements and compatibility checks.'}
                            link='#'
                            linkClassName={'px-5 py-3 bg-accent-color text-white w-fit rounded-full'}
                            linkName='Download'
                        />
                        <DownloadCard
                            imageSrc={'/iot-dashboard.png'}
                            altText={'Integration Guides - Edge Sense '} title={'Integration Guides'}
                            description={'Learn how to integrate our IoT platform with third-party systems and applications for a unified operational experience.'}
                            link='#'
                            linkClassName={'px-5 py-3 bg-accent-color text-white w-fit rounded-full'}
                            linkName='Download'
                        />
                    </div>
                </TabsContent>

                <TabsContent value="troubleshooting-tips">
                    <p className='text-text-color p text-center mt-6 md:mt-14'>Encountering issues? Our troubleshooting section provides solutions to common problems, helping you resolve issues quickly and efficiently.</p>
                    <TroubleShootingTips />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default DocumentationTab