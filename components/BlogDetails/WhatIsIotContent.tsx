import { AiOutlineShareAlt } from "react-icons/ai";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WhatIsIotContent = () => {
    return (
        <div>
            <h2 id="introduction" className='h2 text-accent-color font-semibold'>What is the Internet of Things?</h2>
            <span className='text-md text-text-color'>
                Admin | 23 • 04 • 2024
            </span>

            <Image
                className='w-full h-[300px] rounded-lg object-cover mt-6'
                src={'/what-is-iot.jpg'}
                alt={'What is IoT- IoT background with drawings of technological devices'}
                width={300}
                height={100}
                id="why-industries-adopting-iot"
            />
            <p className='mt-6 pb-6 text-text-color '>The Internet of Things, IoT, is a network of physical devices such as household objects to industrial tools. that can be monitored and sometimes operated remotely. It is like a network of things that are interconnected for instance your phone, computer, vehicle even watch.

                With the advent of IoT, these devices became special as they have tiny computers inside them that can connect to the internet and share information with other devices. this means that they could work automatically, like while you enter a room and lights turn on automatically.

                IoT is making our life more convenient, efficient, and connected and it&apos;s changing the way we live and work.</p>
            <hr />


            <h2 id="how-is-iot-beneficial" className='text-text-color h3 font-semibold mt-6'>How is IoT beneficial?</h2>

            <Image
                className='w-full h-[300px] object-cover rounded-lg mt-4'
                src={'/benefits-of-iot.jpg'}
                alt={'What is IoT- Benefits of IoT'}
                width={300}
                height={100}
            />

            <div className="flex flex-col gap-2">
                <h3 className="text-text-color text-lg  mt-6 italic">What is the Benefits of IoT</h3>
                <p className="p text-text-color mt-3">There are many IoT applications used in healthcare and making a big impact by connecting devices and systems to improve patient care. </p>
                <p className="text-text-color p"><strong className="text-text-color italic">Efficiency:</strong> IoT  devices automate tasks, which reduces manual labor minimizes errors, and increases efficiency.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">Safety:</strong> IoT sensors detect potential hazards like gas leaks, fires, or equipment failure. which helps to take quick action and prevent accidents.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">Cost saving:</strong>  It reduces wastage for instance smart sensors detect water leaks and prevent water wastage which could help to save water bills.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">Smart homes and cities:</strong> IoT creates a better environment which increases quality of life. For instance, India is planning to build smart cities to promote sustainable and inclusive cities that provide core infrastructure and give a decent quality of living.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">Environmental benefits:</strong> It helps to prevent waste as It monitors overall energy consumption and pollution.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">Increased productivity:</strong> IoT streamlines the processes by automating routine tasks and saves time so that we can focus more on core activities.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">:</strong> </p>
            </div>

            <h2 id="history-of-iot" className='text-text-color h4 font-semibold mt-6'>History of IoT</h2>

            <div className="flex flex-col gap-2">
                <h3 className="text-text-color text-lg  mt-6 italic">IIoT -  IoT in the agriculture industry</h3>
                <p className="p text-text-color mt-3">Agriculture which was once seen as a backward sector has now become the backbone of our country. It&apos;s one of the biggest contributors to our economy. Among all the reasons behind its success one is, The Internet of Things (IoT) because it&apos;s changing the way farmers work.</p>

                <p className="text-text-color p"><strong className="text-text-color italic">1982:</strong> Carnegie Mellon researchers connected a vending machine to the internet to remotely check for cold sodas.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">1990:</strong> The first toaster was operated.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">1999:</strong> For the first time the term Internet of Things was coined by Kevin Ashton.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">2000:</strong> LG Introduced the first smart fridge.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">2004:</strong> Fist smartwatch was introduced.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">2007:</strong> Apple smart iPhone and wearable Fitbit launched.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">2009:</strong> Google started testing self-driving cars.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">2011:</strong> Smart TV was introduced.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">2013:</strong> Google Lens released.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">2015:</strong> Tesla comes out with autopilot drive i.e. self-driving car.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">2017:</strong> The IoT Cybersecurity Improvement Act  was introduced in the U.S. to establish cybersecurity standards for IoT devices.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">2019:</strong> At the time of the Covid-19 pandemic, IoT-supported remote work, healthcare, and education.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">2022:</strong> The rise of 5G technology impacted IoT by providing faster speeds and more reliable connections, expanding the possibilities for connected devices.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">2023:</strong> Artificial intelligence and machine learning. IoT allowed more sophisticated data analysis and automation.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">2024:</strong> The IoT ecosystem continues to grow with developments in areas such as smart infrastructure, autonomous vehicles, and advanced smart home systems. </p>


            </div>

            <h2 id="retail-industry" className='text-text-color h4 font-semibold mt-6'>Components of IoT</h2>

            <Image
                className='w-full h-[400px] object-contain rounded-lg mt-4'
                src={'/components-of-iot.jpg'}
                alt={'Components of IoT'}
                width={300}
                height={100}
            />

            <div className="flex flex-col gap-2" id="components-of-iot">
                <h3 className="text-text-color text-lg  mt-6 italic">Components of IoT</h3>
                <p className="p text-text-color mt-3">The Internet of Things (IoT) is transforming retail. IoT in retail helps stores run more smoothly, offers a better shopping experience, and makes it easier to manage inventory and operations.</p>

                <p className="text-text-color p"><strong className="text-text-color italic">Sensor:</strong> An IoT sensor is a small device that detects and measures things like temperature, Motion, Light, Humidity, Sound, and many more things and sends this information to other devices.</p>
                <p className="text-text-color p"><strong className="text-text-color italic">Actuators:</strong> An accurator is a device that makes changes based on information received from sensors. For example, if a sensor detects that a room is too hot, the actuators might turn on the air conditioner to cool the room down. </p>
                <p className="text-text-color p"><strong className="text-text-color italic">Gateway:</strong>An <Link href={'https://edgesense.io/products/edgenode'} className='underline text-[#0000EE]'>IoT gateway</Link>  is like a bridge that connects different iot networks or devices so they can communicate with each other. Imagine you have smart devices in your house like a light bulb and a security camera, the gateway helps them talk to each other on the internet.So, the gateway’s main purpose is to ensure that all your smart devices can work together smoothly and share information effectively.</p>
            </div>



            <h2 id="advantages-of-iot" className='text-text-color h4 font-semibold mt-6'>Advantages of IoT</h2>

            <ul className="pl-6">
                <li className="text-text-color p list-disc"> IoT devices automate routine tasks and minimise human efforts, leading to improved efficiency. </li>
                <li className="text-text-color p list-disc">It helps in real-time data collection and monitoring. This is useful in various sectors such as healthcare (for patient monitoring), agriculture (for soil and crop management), and logistics (for tracking shipments). Learn more about <Link href={'/blogs/industrial-iot-application-in-various-industries'} className='underline text-[#0000EE]'>IoT applications in industries.</Link> </li>

                <li className="text-text-color p list-disc">It can improve everyday life through smart home devices, such as voice assistants, smart lighting, and security systems, which offer convenience, security, and energy savings.</li>
            </ul>

            <div className="flex flex-col gap-2" id="disadvantages-of-iot">
                <h3 className="text-text-color text-lg  mt-6 italic">Disadvantages of IoT</h3>
                <ul className="pl-6">
                    <li className="text-text-color p list-disc">IoT devices can lead to cyber-attacks and poorly secured devices could be exploited by hackers which will cause breaches of personal and sensitive information.</li>
                    <li className="text-text-color p list-disc">The initial setup and installation of IoT platforms and systems can be expensive. This includes the cost of devices, infrastructure, and integration with existing systems.</li>
                    <li className="text-text-color p list-disc">Many IoT devices are made by different manufacturers and may not always work seamlessly together.</li>
                </ul>
            </div>



            <h2 id="conclusion" className="text-text-color h4 font-semibold mt-6">Conclusion</h2>
            <p className="p text-text-color">The Internet of Things is reshaping how we interact with the world around us, It offers a blend of convenience, efficiency, and innovation. From smart homes that adjust to our preferences to industries optimizing their operations, IoT is making everyday tasks simpler and more connected. If you want to stay ahead of the competition explore our IoT services and stay in the lead.

                However, it&apos;s important to keep an eye on challenges caused by IoT, such as security concerns and Overdependence.  Balancing IoT&apos;s potential with thoughtful management is important for maximizing its benefits and minimizing risks. </p>


            <Link className='bg-accent-color text-white px-4 py-2 flex items-center gap-2 w-fit rounded-lg mt-2' href={{ pathname: "" }}><AiOutlineShareAlt className="text-xl" />Share this post</Link>

        </div >
    )
}

export default WhatIsIotContent
