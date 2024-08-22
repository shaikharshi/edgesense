import AboutBanner from '@/components/About-page/AboutBanner'
import HomeIndustrySoltions from '@/components/Home-page/HomeIndustrySoltions'
import Benifits from '@/components/edgevision/Benifits'
import Accordian from '@/components/edgevision/Faq'
import IoSenceOverview from '@/components/edgevision/IoSenceOverview'
import NewsLetter from '@/components/NewsLetter'
import React from 'react'
import Image from 'next/image'
import IoSenceBanner from '@/components/edgevision/IoSenceBanner'
import EdgeVisionFaq from '@/components/edgevision/EdgeVisionFaq'

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products" },
    { label: "I/O Sence" },
];

const IoSence = () => {
    return (
        <div>
            <IoSenceBanner />

            <IoSenceOverview />

            <Benifits />

            <section className='container pb-14 lg:pb-24'>
                <h2 className='text-accent-color h2 font-semibold text-center'>Frequently Asked Questions</h2>
                <p className='text-text-color text-center'>Your Query Answered</p>
                <EdgeVisionFaq />
            </section>

            <HomeIndustrySoltions SectionClassName='bg-white lg:pb-24 pb-14' />

            <NewsLetter />

        </div>
    )
}

export default IoSence
