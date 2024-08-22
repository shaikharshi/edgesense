import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const HomeBlog = () => {
    return (
        <section className='container md:py-24 py-14'>
            <h2 className='text-2xl text-accent-color font-semibold text-center'>Insights of the IoT Industry</h2>
            <p className='text-lg text-text-color text-center mt-2'>Exploring Trends, Innovations, and Transformations in the World of IoT</p>
            <div className="grid  lg:grid-cols-[1.5fr_1fr] gap-8 mt-8">
                <Link href={'/blogs/industrial-iot-application-in-various-industries'}>
                    <Image className="w-full h-[350px] object-cover rounded-[20px]"
                        src="/industrial-iot-application-various-industries.jpg"
                        alt="IIoT - Industrial IoT application in various industries - Edge Sense"
                        width={660}
                        height={340}
                    />
                    <h3 className='text-accent-color text-xl font-semibold mt-6 px-6 text-center sm:text-left'>Industrial IoT(IIoT) applications in various industries - Edge sense</h3>
                    <p className='text-text-color text-lg mt-2 px-6 text-center sm:text-left'>Industrial Internet of Things (IIoT) is the use of Internet of Things (IoT) technology in industrial applications.</p>
                </Link>
                <div className="flex flex-col gap-y-4 justify-between">
                    <Link className="flex flex-col sm:flex-row items-center gap-4" href={'/blogs/what-is-internet-of-things'}>
                        <Image className="rounded-2xl w-[220px] h-[120px]"
                            src="/what-is-iot.jpg"
                            alt="What is IoT- IoT background with drawings of technological devices"
                            width={220}
                            height={120}
                        />
                        <div className="flex flex-col">
                            <h3 className="h4 text-accent-color font-semibold text-center sm:text-left">What is the Internet of Things?  - Edge sense</h3>
                            <p className='text-text-color p text-center sm:text-left line-clamp-2'>The Internet of Things, IoT, is a network of physical devices such as household objects to industrial tools. that can be monitored and sometimes operated remotely. It is like a network of things that are interconnected for instance your phone, computer, vehicle even watch.</p>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default HomeBlog
