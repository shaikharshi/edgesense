import { FaHandHoldingWater } from "react-icons/fa";
import { MdOutlineElectricMeter } from "react-icons/md";
import React from 'react'
import { MdOutlineHvac } from "react-icons/md";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { TbMessage2Search } from "react-icons/tb";
import { ImSteam } from "react-icons/im";
import Link from "next/link";


type CardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
    return (
        <div className="group flex flex-col gap-2 bg-white hover:bg-accent-color hover:text-white p-6 rounded-lg">
            <div className="grid grid-cols-[30px_auto] gap-6 items-center">
                <div className="text-5xl text-accent-color group-hover:text-white">
                    {icon}
                </div>
                <h3 className="text-text-color h4 font-semibold group-hover:text-white">{title}</h3>
            </div>
            <p className=" ">{description}</p>
        </div>
    )
}

type InfoCardProps = {
    SectionClassName?: string; // New prop for link class name

};

const HomeIndustrySoltions: React.FC<InfoCardProps> = ({ SectionClassName = "bg-tertiary-color lg:py-24 py-14" }) => {
    return (
        <section className={SectionClassName ?? "bg-tertiary-color lg:py-24 py-14"}>
            <div className="container">
                <h2 className='h2 text-accent-color font-semibold text-center'>Transforming Industries with EdgeVision and EdgeNode</h2>
                <p className='text-lg text-text-color text-center mt-2 '>Together, these IoT solutions revolutionize the way businesses operate. By combining powerful data insights with intelligent edge devices, we&apos;re helping companies become more efficient, innovative, and successful.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-7">
                    <Card
                        icon={<MdOutlineElectricMeter />}
                        title="Energy Management System (EMS)"
                        description="By utilizing EdgeNode for real-time energy data collection and EdgeVision for visualization, you can effectively manage energy, cut costs, and ensure compliance."
                    />
                    <Card
                        icon={<FaHandHoldingWater />}
                        title="Water Management Systems (WMS)"
                        description="EdgeNode enables accurate monitoring of water usage, while EdgeVision's insights help optimize distribution, detect leaks early, and promote sustainable water management."
                    />
                    <Card
                        icon={<MdOutlineHvac />}
                        title="HVAC Optimization"
                        description="Leverage EdgeNode to track HVAC metrics and use EdgeVision for real-time visual data, ensuring greater efficiency, reduced energy consumption, and better climate control."
                    />
                    <Card
                        icon={<MdOutlineSettingsSuggest />}
                        title="Predictive Maintenance"
                        description="EdgeNode's equipment monitoring paired with EdgeVision’s data visualization allows you to predict failures, schedule timely maintenance, and reduce downtime effectively."
                    />
                    <Card
                        icon={<TbMessage2Search />}
                        title="Ambient Monitoring"
                        description="Deploy EdgeNode to capture environmental data, with EdgeVision offering trend visualization that supports careful adjustments to maintain ideal ambient conditions."
                    />
                    <Card
                        icon={<ImSteam />}
                        title="Steam Trap Monitoring"
                        description="Monitor steam trap performance using EdgeNode, and let EdgeVision provide real-time analytics, ensuring efficient steam management and preventing costly equipment failures."
                    />
                </div>
                <div className="flex justify-center pt-6">
                    <Link className="text-accent-color underline font-semibold" href={{ pathname: '/solutions' }}>See All Solutions</Link>
                </div>
            </div>
        </section>
    )
}

export default HomeIndustrySoltions
