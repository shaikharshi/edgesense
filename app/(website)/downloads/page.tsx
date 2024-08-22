import AboutBanner from '@/components/About-page/AboutBanner'
import DocumentationTab from '@/components/Documentation/DocumentationTab';
import React from 'react'

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Downloads" },
];

const page = () => {
    return (
        <>
            <AboutBanner
                breadcrumb={breadcrumbItems}
                heading={'Comprehensive Documentation Hub for IoT Gateways and Dashboards'} pagename={'User Manuals, Installation Guides, and Troubleshooting Tips for Seamless IoT Integration'} imageUrl={'/banner.png'} />
            <section className='container py-10'>
                <p className='text-text-color text-lg text-center'>Welcome to EdgeSense documentation hub. Here, you’ll find everything you need to use and troubleshoot our IoT platform effectively. We offer user manuals, installation guides, and troubleshooting tips to help you get the most out of our IoT dashboards and gateways.</p>
            </section>
            <DocumentationTab />
        </>
    )
}

export default page