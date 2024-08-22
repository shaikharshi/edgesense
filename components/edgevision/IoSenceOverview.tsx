import React from 'react';
import CardComponent from '../CardComponent';
import { FaRegCircleDot } from 'react-icons/fa6';
import Image from 'next/image';

const IoSenceOverview = () => {
    return (
        <div className='container py-14 lg:py-24'>
            <Image className="mx-auto md:mt-[-120px] lg:mt-[-240px] rounded-3xl"
                src="/iot-dashboard.png"
                alt="Picture of the author"
                width={1050}
                height={700}
            />
            <h2 className='h2 text-accent-color text-center font-semibold mt-14'>Overview of EdgeSense</h2>
            <p className='text-center mt-2'>
            EdgeVision is a state-of-the-art IoT dashboard that revolutionizes industrial operations. It delivers real-time insights and monitoring, helping you boost performance, streamline efficiency, and make informed, data-driven decisions.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <CardComponent
                    containerClassName="hover:bg-accent-color"
                    iconClassName="group-hover:text-white"
                    headingclassName="group-hover:text-white"
                    descriptionClassName="group-hover:text-white"
                    icon={<FaRegCircleDot />}
                    heading="Real-Time Data Monitoring"
                    description="EdgeSense offers continuous monitoring of your IoT devices, offering instant access to critical data."
                />
                <CardComponent
                    containerClassName="hover:bg-accent-color"
                    iconClassName="group-hover:text-white"
                    headingclassName="group-hover:text-white"
                    descriptionClassName="group-hover:text-white"
                    icon={<FaRegCircleDot />}
                    heading="Advanced Analytics"
                    description="EdgeSense uses advanced algorithms to analyze your data, revealing trends, pinpointing inefficiencies, and providing actionable insights."
                />
                <CardComponent
                    containerClassName="hover:bg-accent-color"
                    iconClassName="group-hover:text-white"
                    headingclassName="group-hover:text-white"
                    descriptionClassName="group-hover:text-white"
                    icon={<FaRegCircleDot />}
                    heading="Predictive Maintenance Alerts"
                    description="Analyzing historical and real-time data from sensors makes it possible to anticipate equipment failures and schedule maintenance proactively, reducing downtime and costs."
                />
                <CardComponent
                    containerClassName="hover:bg-accent-color"
                    iconClassName="group-hover:text-white"
                    headingclassName="group-hover:text-white"
                    descriptionClassName="group-hover:text-white"
                    icon={<FaRegCircleDot />}
                    heading="Energy Management"
                    description="Monitor and analyze energy usage across your operations to uncover cost-saving opportunities and boost system efficiency."
                />
                <CardComponent
                    containerClassName="hover:bg-accent-color"
                    iconClassName="group-hover:text-white"
                    headingclassName="group-hover:text-white"
                    descriptionClassName="group-hover:text-white"
                    icon={<FaRegCircleDot />}
                    heading="Environmental Monitoring"
                    description="Track real-time environmental conditions to ensure regulatory compliance and optimal operations."
                />
                <CardComponent
                    containerClassName="hover:bg-accent-color"
                    iconClassName="group-hover:text-white"
                    headingclassName="group-hover:text-white"
                    descriptionClassName="group-hover:text-white"
                    icon={<FaRegCircleDot />}
                    heading="Customizable Dashboards"
                    description="Track real-time environmental conditions to ensure regulatory compliance and optimal operations."
                />
            </div>
        </div>
    );
}

export default IoSenceOverview;
