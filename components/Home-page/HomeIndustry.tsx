import { BiGitMerge } from "react-icons/bi";
import { GrMultiple } from "react-icons/gr";
import { LuSunrise } from "react-icons/lu";
import { FaRegCircleDot } from "react-icons/fa6";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RequestDemo from "../RequestDemo.tsx/RequestDemo";

type CardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
}


type IndustryCardProp = {
    icon: React.ReactNode;
    description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
    return (
        <div className="group flex flex-col gap-2 text-center items-center hover:bg-accent-color hover:text-white p-4 md:p-6 rounded-lg">
            <div className="h1 text-accent-color group-hover:text-white">
                {icon}
            </div>
            <h3 className="text-accent-color h4 font-semibold group-hover:text-white">{title}</h3>
            <p className="p text-text-color group-hover:text-white">{description}</p>
        </div>
    )
}

const IndustryCard = ({ icon, description }: IndustryCardProp) => {
    return (
        <div className="group flex flex-col gap-2 text-center items-center hover:bg-white border-2 border-white hover:text-white p-6 rounded-lg">
            <FaRegCircleDot className="text-3xl text-white group-hover:text-accent-color" />
            <p className="text-white text-lg group-hover:text-accent-color">{description}</p>
        </div>
    )
}

const HomeIndustry = () => {
    return (
        <>
            <section className='pt-14 pb-60 container'>
                <h2 className="h2 font-semibold text-center  text-accent-color">Human-Centric, Tech-Driven: Industry 5.0</h2>
                <p className="text-center p mt-2.5 font-semibold text-text-color">We&apos;ll create a powerful IoT platform packed with features to transform your business. Get the insights you need to make smarter decisions.</p>

                <div className="grid sm:grid-col-2 md:grid-cols-3 mt-6 gap-4">
                    <Card
                        icon={<BiGitMerge />}
                        title="Connect Anything"
                        description="Integrate different devices and sensors with ease into our IoT Platform. Collect data in real-time and monitor them to keep every little aspect of your operations interlinked."
                    />
                    <Card
                        icon={<GrMultiple />}
                        title="Access Multiple Applications"
                        description="It supports a wide spectrum of applications, such as predictive maintenance, energy optimization, asset tracking, and environmental monitoring. Streamline your workflow into a single powerful system."
                    />
                    <Card
                        icon={<LuSunrise />}
                        title="Grow with IoT"
                        description="Leverage data-driven insights and scale your operations effortlessly with our robust and flexible IoT solutions. Adapt to changing business needs and expand your capabilities without disruption."
                    />
                </div>

                <Link href={{ pathname: '/faqs' }} className="text-center font-semibold text-lg text-accent-color mt-8 flex justify-center">See our FAQs to learn More</Link>
            </section>

            <section className="bg-accent-color md:py-24 py-14">
                <div className="container">
                    <Image className="mx-auto mt-[-240px] rounded-3xl border-[2px] border-white"
                        src="/iot-dashboard.png"
                        alt="Picture of the author"
                        width={1050}
                        height={600}
                    />
                    <h2 className="text-3xl text-white text-center mt-14">See More, Do More with EdgeVision</h2>
                    <p className="mt-2 text-lg text-white text-center ">: EdgeVision is a user-friendly dashboard that simplifies IoT device management, providing real-time visibility and control. Gain valuable insights, optimize performance, and make data-driven decisions to elevate your operations.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-14 mt-12">
                        <IndustryCard
                            icon={<FaRegCircleDot />}
                            description="Our dashboard effortlessly connects with your existing systems and devices, creating a unified view of your operations. No more data silos or complex integrations."
                        />
                        <IndustryCard
                            icon={<FaRegCircleDot />}
                            description="EdgeVision is designed with user-friendliness in mind. We've made it simple to navigate and understand, even if you're not a tech expert. You'll be up and running in no time, focusing on what matters most - your business."
                        />
                        <IndustryCard
                            icon={<FaRegCircleDot />}
                            description="This dashboard is built with the latest technology to make it super reliable, fast, and adaptable. It can handle a lot of work without slowing down and can be set up to run right in your own facility."
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center gap-6 pt-14">
                    <Link className="text-white underline hover:no-underline" href={{ pathname: '/products/edgevision' }}>Learn more</Link>
                    <RequestDemo ButtonClass="bg-white text-accent-color px-4 py-2 font-semibold hover:bg-accent-color border-[1px] border-transparent hover:text-white hover:border-[1px] hover:border-white" buttonName="Request Demo" />
                </div>
            </section>

        </>

    )
}

export default HomeIndustry
