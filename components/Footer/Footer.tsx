import React from 'react'
import FooterLinks from './FooterLinks'
import FooterSocial from './FooterSocial'
import Link from 'next/link'

const footer = () => {
    return (
        <section className='bg-tertiary-color py-[30px] md:py-[50px]'>
            <div className="container">
                <div className="grid lg:grid-cols-[3fr_1.5fr] xl:grid-cols-[3fr_2fr] md:border-2 md:border-[#AED9FF] rounded-lg">
                    <FooterLinks />
                    <FooterSocial />
                </div>
                <div className="flex flex-wrap mt-6 text-lg justify-between">
                    <div className='flex flex-wrap text-sm text-text-color gap-8'>
                        <p>Copyright © 2024 EdgeSense - All Rights Reserved</p>
                        {/* <Link className='underline text-sm' href={{ pathname: "" }}>Privacy Policy</Link>
                        <Link className='underline text-sm' href={{ pathname: "" }}>Terms of Use</Link> */}
                    </div>
                    <p className="text-sm text-accent-color">Developed by <Link href={{ pathname: "https://sovorun.com/" }} title="#1 Website Design and Development Agency in Mumbai" target='blank'>Sovorun</Link></p>
                </div>
            </div>
        </section>
    )
}

export default footer
