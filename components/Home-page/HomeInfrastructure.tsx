import { FaHands } from "react-icons/fa";
import { RiSettings4Line } from "react-icons/ri";
import { GiSpeedBoat } from "react-icons/gi";
import { PiStopCircleFill, PiStopCircleLight } from "react-icons/pi";
import React from 'react'

const HomeInfrastructure = () => {
    return (
        <section className='md:py-24 py-14 bg-tertiary-color'>
            <div className="container">
                <h2 className=' text-center h2 font-semibold text-accent-color'>Industrial Benefits of IoT Integration</h2>
                <p className=' text-center p text-text-color mt-2.5 font-semibold '>Seize the Future of Industry 5.0: Leverage the Benefits of IIoT for Real-Time Insights and Decision-Making.</p>
                <div className="relative  grid md:grid-cols-2 mt-4 ">
                    <div className="bg-[url('/infrastructure-bg.png')] bg-contain bg-no-repeat bg-right-bottom bg-transparent transition-transform duration-300 ease-in-out hover:text-white hover:bg-accent-color p-4 md:p-6 rounded-2xl group">
                        <div className="flex items-center gap-2">
                            <RiSettings4Line className="text-3xl group-hover:text-white text-accent-color" />
                            <h3 className="text-lg text-text-color font-semibold group-hover:text-white">Real-Time Control and Optimization</h3>
                        </div>
                        <p className="mt-2 p  text-text-color group-hover:text-white">IoT integration allows for real-time monitoring and automated control of industrial processes, leading to streamlined operations and reduced manual intervention, ultimately improving productivity and efficiency.</p>
                    </div>
                    <div className="bg-[url('/enhance-asset-uptime.png')] bg-contain bg-no-repeat bg-left-bottom transition-transform duration-300 ease-in-out hover:text-white hover:bg-accent-color p-4 md:p-6 rounded-2xl group">
                        <div className="flex items-center gap-2">
                            <FaHands className="text-3xl group-hover:text-white text-accent-color" />
                            <h3 className="text-lg text-text-color font-semibold group-hover:text-white">Predictive Maintenance</h3>
                        </div>
                        <p className="mt-2 p  text-text-color group-hover:text-white">IoT sensors and data analytics provide early detection of potential equipment failures, enabling predictive maintenance strategies that minimize downtime, extend equipment lifespan, and reduce maintenance costs.</p>
                    </div>
                    <div className="bg-[url('/infrastructure-bg.png')] bg-contain bg-no-repeat bg-right-top transition-transform duration-300 ease-in-out hover:text-white hover:bg-accent-color p-4 md:p-6 rounded-2xl group">
                        <div className="flex items-center gap-2">
                            <GiSpeedBoat className="text-3xl group-hover:text-white text-accent-color" />
                            <h3 className="text-lg text-text-color font-semibold group-hover:text-white">Cost Management & Optimization</h3>
                        </div>
                        <p className="mt-2 p  text-text-color group-hover:text-white">With IoT, industries can track and manage resources like energy, water, and materials more effectively. This leads to significant cost savings and a lower environmental impact by minimizing waste and optimizing resource use.</p>
                    </div>
                    <div className="bg-[url('/infrastructure-bg.png')] bg-contain bg-no-repeat bg-left-bottom transition-transform duration-300 ease-in-out hover:text-white hover:bg-accent-color p-4 md:p-6 rounded-2xl group">
                        <div className="flex items-center gap-2">
                            <PiStopCircleFill className="text-3xl group-hover:text-white text-accent-color" />
                            <h3 className="text-lg text-text-color font-semibold group-hover:text-white">Improved Safety</h3>
                        </div>
                        <p className="mt-2 p  text-text-color group-hover:text-white">IoT systems enhance workplace safety through continuous monitoring of environmental conditions and equipment status. They also support compliance with regulatory standards by providing accurate data and reporting capabilities for environmental and safety regulations.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeInfrastructure
