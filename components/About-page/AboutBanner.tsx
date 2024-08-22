import React from 'react';
import BreadCrumb from '../BreadCrumb/BreadCrumb';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface AboutBannerProps {
    breadcrumb: BreadcrumbItem[];
    heading: string;
    pagename: string;
    imageUrl: string;
}

const AboutBanner: React.FC<AboutBannerProps> = ({ breadcrumb, heading, pagename, imageUrl }) => {
    return (
        <section>
            <div className="h-[calc(500px-80px)] flex items-center flex-col pt-32 pb-32  bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}>
                <BreadCrumb items={breadcrumb} />
                <div className="container lg:w-[850px] mt-8">
                    <div className="w-full flex flex-col items-center justify-center text-center">
                        <h1 className='h2 text-white leading-tight font-semibold'>{heading}</h1>
                        <p className='text-white text-lg mt-4'>{pagename}</p>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default AboutBanner;
