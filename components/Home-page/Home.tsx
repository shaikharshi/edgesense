import React from 'react'
import HomeIndustry from "@/components/Home-page/HomeIndustry";
import HomeInfrastructure from "@/components/Home-page/HomeInfrastructure";
import SmartGatewayHome from "@/components/Home-page/SmartGatewayHome";
import HomeIndustrySoltions from './HomeIndustrySoltions';
import HomeBlog from './HomeBlog';
import HomeTestimonial from './HomeTestimonial';
import ClientSwiper from './ClientSwiper';
import HomeBanner from './HomeBanner';

const Home = () => {
    return (
        <>
            <HomeBanner />
            {/* <ClientSwiper /> */}
            <HomeInfrastructure />
            <HomeIndustry />
            <SmartGatewayHome />
            <HomeIndustrySoltions SectionClassName='bg-tertiary-color lg:py-24 py-14' />
            <HomeBlog />
            {/* <HomeTestimonial /> */}
        </>
    )
}

export default Home
