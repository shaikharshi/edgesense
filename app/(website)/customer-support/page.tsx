import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import AboutBanner from '@/components/About-page/AboutBanner'
import CustomerForm from '@/components/CustomerSupport/CustomerForm'
import React from 'react'
import Link from "next/link";
import { IoLogoTwitter } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";

const breadcrumbItems = [
    { label: "Home" },
    { label: "Customer Support" },
];


const page = () => {
    return (
        <>
            <section>
                <AboutBanner
                    breadcrumb={breadcrumbItems}
                    heading={'Big or Small, We Solve All'} pagename={'Resolving your Industrial Issues Seamlessly'} imageUrl={'/banner.png'} />
            </section>

            <section className='container grid md:grid-cols-2 items-center gap-10 md:gap-20 md:py-10 lg:py-24 xl:w-[1100px]'>
                <CustomerForm />
                <div>
                    <h2 className='text-accent-color h4'>Registered Address: </h2>
                    <p className='text-text-color text-lg mt-2'>602, Virani Business Centre, Opp Bharat Gear Company, Kausa, Mumbra, Thane 400612</p>
                    <Link href={""} className='flex items-center gap-3 mt-5'>
                        <AiOutlineMail className="text-accent-color text-3xl font-semibold" />
                        <div>
                            <h3 className="text-accent-color h5 font-semibold">Email</h3>
                            <Link href={"mailto:sales@edgesense.io"} className="text-lg text-text-color" >sales@edgesense.io</Link>
                        </div>
                    </Link>
                    <Link href={""} className='flex items-center gap-3 mt-5'>
                        <BiPhone className="text-accent-color text-3xl font-semibold" />
                        <div>
                            <h3 className="text-accent-color h5 font-semibold">Phone</h3>
                            <Link href={"tel:8655587403"} className="text-lg text-text-color">+91 - 8655587403</Link>
                        </div>
                    </Link>
                    <div className="flex gap-5">
                        <div className="flex gap-4 mt-6">
                            <Link className=" bg-accent-color p-2 rounded-xl flex items-center text-white" href={{ pathname: "https://www.facebook.com/profile.php?id=61564506058140" }}><BsFacebook className="text-xl" /></Link>
                            <Link className=" bg-accent-color p-2 rounded-xl flex items-center text-white" href={{ pathname: "https://x.com/edgesense_io" }}><IoLogoTwitter className="text-xl" /></Link>
                            <Link className=" bg-accent-color p-2 rounded-xl flex items-center text-white" href={{ pathname: "https://www.linkedin.com/company/edgesense-io/about/" }}><FaLinkedinIn className="text-xl" /></Link>
                            <Link className=" bg-accent-color p-2 rounded-xl flex items-center text-white" href={{ pathname: "https://www.instagram.com/edgesene.io/" }}><GrInstagram className="text-xl" /></Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default page