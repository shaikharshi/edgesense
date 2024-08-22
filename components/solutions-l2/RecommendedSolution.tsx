import React from 'react'
import Image from 'next/image'
import { FaRegCircleDot } from 'react-icons/fa6';


type SmartGatewayListProp = {
  icon: React.ReactNode;
  description: string;
}


const SmartGatewayList = ({ description }: SmartGatewayListProp) => {
  return (

    <div className="grid grid-cols-[40px_auto] items-center">
      <FaRegCircleDot className='text-2xl text-accent-color' />
      <p className='text-md text-text-color '>{description}</p>
    </div>
  )
}

const RecommendedSolution = () => {
  return (

    <section className='container  py-14 md:py-24'>
      <h2 className='text-accent-color h2 font-semibold text-center'>Recommended Solution</h2>
      <p className='text-text-color  text-center text-lg'>IOT Gateway - EdgeNode  & Easy-to-use Dashboard - Edge Vision</p>
      <p className='text-text-color  mt-2 text-center text-lg'>Experience the future of air monitoring with our EdgeNode and EdgeVision solution. EdgeNode, our robust IoT gateway, efficiently collects critical air quality data, while EdgeVision&apos;s user-friendly dashboard provides real-time insights and actionable information. This powerful combination ensures you have the tools to protect public health, optimize environmental management, and make data-driven decision</p>

      <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-6">

        <div className="flex flex-col gap-6 pt-20">
          <h3 className='text-accent-color font-semibold h3'>Benefits of Edge Vision & EdgeNode</h3>
          <SmartGatewayList
            icon={<FaRegCircleDot />}
            description="Instant Data: EdgeNode collects air quality data in real time, and EdgeVision shows it to you instantly, so you can respond quickly to any changes."
          />

          <SmartGatewayList
            icon={<FaRegCircleDot />}
            description="Simple Setup: Both products easily connect with your current system, making it simple to start monitoring air quality without complications."
          />

          <SmartGatewayList
            icon={<FaRegCircleDot />}
            description="Accurate Information: EdgeNode gathers precise data, and EdgeVision helps you clearly see and understand this information."
          />

          <SmartGatewayList
            icon={<FaRegCircleDot />}
            description="Grows with You: EdgeNode can expand to cover more areas as your needs grow, while EdgeVision keeps everything organized, no matter how big the system gets."
          />
          <SmartGatewayList
            icon={<FaRegCircleDot />}
            description="Easy to Use: EdgeVision’s dashboard is designed to be simple and user-friendly, so anyone can use it to make informed decisions easily."
          />
          <SmartGatewayList
            icon={<FaRegCircleDot />}
            description="Reliable Monitoring: EdgeNode ensures consistent data collection, and EdgeVision allows you to monitor air quality reliably, helping you maintain a safe and healthy environment."
          />

        </div>

        <Image className="w-full h-auto object-contain hidden md:block"
          src="/smart-gateway-integration.png"
          alt="Picture of the author"
          width={640}
          height={350}
        />
      </div>

    </section>


  )
}

export default RecommendedSolution
