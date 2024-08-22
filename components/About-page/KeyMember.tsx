import React from 'react'
import KeyMemberCard from "./KeyMemberCard";



const KeyMember = (props: any) => {
    return (
        <section className='bg-accent-color md:py-24 py-14'>
            <h2 className='text-3xl text-white text-center font-semibold'>Key Members</h2>
            <p className='text-white text-center text-lg'>The people behind this amazing product and service</p>
            <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

                <KeyMemberCard name={"Saeed Lanjekar"} designation={"Founder & CEO"} description={"As an innovator, he builds transformative solutions to revolutionize IoT industries and inspire future leaders."} imageSrc={'/chairman-ceo.png'} imageAlt={'Key Members - Edge Sense'} linkedinUrl={'https://www.linkedin.com/in/lanjekar-saeed/'} />
                <KeyMemberCard name={"Sajid Sayyed"} designation={"Managing Director"} description={"As Managing Director, he drives a team to create groundbreaking solutions for industries, enhancing automation and efficiency."} imageSrc={'/sajid-sayyed.png'} imageAlt={'Key Members - Edge Sense'} linkedinUrl={'https://www.linkedin.com/in/sayyed-sajid-34b85b144/'} />
                <KeyMemberCard name={"Salman Lanjekar"} designation={"Technical Director"} description={"As Technical Director, he leads a team to develop cutting-edge solutions for IoT devices and industries."} imageSrc={'/salman-lanjekar.png'} imageAlt={'Key Members - Edge Sense'} linkedinUrl={'https://www.linkedin.com/in/salman-lanjekar-70a852171/'} />

            </div>
        </section>
    )
}

export default KeyMember
