import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutUs = () => {
    return (
        <section className='container md:md:py-24 py-14'>
            <div className=" flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] items-center gap-6">
                <div>
                    <p className="text-base">EdgeSense was founded with a clear goal: to transform industrial operations through advanced technology. Our founder, <Link target='blank' href={{ pathname: "https://www.linkedin.com/in/lanjekar-saeed/" }} className='text-accent-color underline'> Saeed Lanjekar</Link>, envisioned a future where IoT dashboards and gateways would revolutionize industry efficiency. From our early days as a tech startup, we’ve been dedicated to crafting IoT solutions that solve real-world problems.</p>
                    <p className='mt-4 text-base'>As we’ve grown, our commitment to innovation has positioned us as leaders in the IoT field. Today, EdgeSense is a go-to partner for businesses looking to enhance operations, increase productivity, and drive sustainable growth through smart technology.</p>
                </div>
                <Image
                    className='rounded-xl w-full h-auto md:w-[500px] md:h-[244px]'
                    src="/about-us.png"
                    width={500}
                    height={244}
                    alt='About Us - Edge Sense'
                />
            </div>
            <div className="flex flex-col md:grid grid-cols-[1fr_2fr] items-center gap-6 mt-8">
                <Image
                    className='rounded-xl w-full h-auto md:w-[500px] md:h-[244px]'
                    src="/our-mission.png"
                    width={500}
                    height={244}
                    alt='About Us - Edge Sense'
                />
                <div>
                    <h2 className='text-accent-color text-2xl font-semibold'>Our Mission</h2>
                    <p className="text-base mt-4  text-text-color">We’re here to empower industries with cutting-edge IoT dashboards and gateways that boost efficiency and sustainability. By leveraging state-of-the-art technology, we aim to modernize operational processes, optimize resource management, and reduce environmental impact. Our focus is on delivering scalable IoT platforms that support better decision-making and proactive management.</p>
                </div>
            </div>
            <div className="flex flex-col-reverse md:grid grid-cols-[2fr_1fr] items-center gap-6 mt-8">
                <div>
                    <h2 className='text-accent-color text-2xl font-semibold'>Our Vision</h2>
                    <p className="text-base mt-4  text-text-color">We imagine a future where smart technology is seamlessly integrated into every part of industrial operations, ushering in a new age of productivity and environmental stewardship. Our goal is to build a connected industrial ecosystem where intelligent solutions improve efficiency, foster sustainability, and support ongoing growth and innovation. Through our efforts, we aspire to drive the global shift towards more efficient and sustainable industrial practices.</p>
                </div>
                <Image
                    className='rounded-xl w-full h-auto md:w-[500px] md:h-[244px]'
                    src="/about-us.png"
                    width={500}
                    height={244}
                    alt='About Us - Edge Sense'
                />
            </div>
        </section>
    )
}

export default AboutUs
