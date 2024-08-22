import AboutBanner from '@/components/About-page/AboutBanner'
import FaqForms from '@/components/Faq/FaqForms'
import FaqTabs from '@/components/Faq/FaqTabs'
import React from 'react'


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Faqs" },
];

const page = () => {
    return (
        <>
            <section>
                <AboutBanner
                    breadcrumb={breadcrumbItems}
                    heading={'Frequently Asked Questions About IoT Gateways and Dashboards'} pagename={'Get Your IoT Questions Answered Here'} imageUrl={'/banner.png'} />
            </section>

            <section className='grid md:grid-cols-[2fr_1.3fr] gap-10 lg:gap-20 container py-10 md:py-24'>
                <FaqTabs />
                <FaqForms />
            </section>




        </>
    )
}

export default page
