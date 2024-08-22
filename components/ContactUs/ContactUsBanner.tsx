"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link';
import { BsFacebook } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Textarea } from "../ui/textarea";
import InputField from '../Fields/Input';

const formSchema = z.object({
    firstName: z.string().min(3, 'First Name is too short'),
    lastName: z.string().min(3, 'Last Name is too short'),
    email: z.string().email('Invalid email address').min(5, 'Email is too short'),
    phone: z.string().min(10, 'Phone number is too short'),
    message: z.string().min(10, 'Message is too short'),
    terms: z.boolean().refine((value) => value === true, 'You must accept the terms and conditions'),
});

type FormInputs = z.infer<typeof formSchema>;

const ContactUsBanner = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
        // handle form submission
    };

    return (
        <>
            <section className="bg-[url('/banner.png')] pt-40 pb-24 md:pt-48 md:pb-24 ">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.3fr_2fr] md:gap-10 lg:gap-20 container">
                    <div></div>
                    <div>
                        <h1 className='h3 font-semibold text-white'>Connect with Us for Better IoT Solutions</h1>
                        <p className='text-white '>Here, you&apos;ll find information on how our IoT dashboards and gateways can help you improve efficiency, reduce downtime, and make data-driven decisions. Whether you need support, have questions, or want to explore how our solutions can benefit your business, we&apos;re here to assist. Reach out to us to discover how EdgeSense can drive your success.</p>
                    </div>
                </div>

            </section>
            <section className='py-14'>
                <div className="md:grid lg:grid-cols-[1.3fr_2fr] md:gap-10  lg:gap-20 container ">
                    <div className="bg-white p-2 md:p-6 lg:p-6 rounded-xl left-0 lg:mt-[-270px] cus-box-shadow h-fit">
                        <h2 className="h2 text-accent-color font-semibold">Let’s Talk !</h2>
                        <p className="text-text-color">Go ahead and send us a brief of your project</p>
                        <form onSubmit={handleSubmit(onSubmit)} className='mt-4 grid grid-cols-2 gap-4'>
                            <InputField
                                inputType="text"
                                register={register}
                                required
                                name="firstName"
                                placeholder="First Name"
                                error={errors.firstName?.message}
                                className={'w-full  rounded-xl border-[1px] border-accent-color'}
                            />
                            <InputField
                                inputType="text"
                                register={register}
                                required
                                name="lastName"
                                placeholder="Last Name"
                                error={errors.lastName?.message}
                                className={'w-full  rounded-xl border-[1px] border-accent-color'}
                            />
                            <InputField
                                inputType="email"
                                register={register}
                                required
                                name="email"
                                placeholder="Enter Email"
                                error={errors.email?.message}
                                className={' rounded-xl w-full col-span-2 border-[1px] border-accent-color'}
                            />
                            <InputField
                                inputType="tel"
                                register={register}
                                required
                                name="phone"
                                placeholder="Enter Phone"
                                error={errors.phone?.message}
                                className={' rounded-xl w-full col-span-2 border-[1px] border-accent-color'}
                            />
                            <Textarea
                                className='px-2  w-full col-span-2 border-[1px] border-accent-color'
                                rows={5}
                                placeholder="Questions"

                            />
                            <button type="submit" className='px-4 py-2 bg-accent-color text-white rounded-xl w-fit text-lg'>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="md:grid md:grid-cols-2 items-center gap-6 col-start-1 col-span-3 md:col-auto mt-8 md:mt-0">
                        <div>
                            <h2 className='h3 text-accent-color'>Registered Address: </h2>
                            <p className='text-text-color  text-lg'>602, Virani Business Centre, Opp Bharat Gear Company, Kausa, Mumbra, Thane 400612</p>
                            <Link className='flex gap-3 text-lg text-text-color mt-4' href={{ pathname: "mailto:sales@edgesense.io" }}>
                                <MdOutlineEmail className="text-accent-color text-3xl" /> sales@edgesense.io
                            </Link>
                            <Link className='flex gap-3 text-lg text-text-color mt-2' href={{ pathname: "tel:8655587403" }}>
                                <BiPhone className="text-accent-color text-3xl" /> +91 - 8655587403
                            </Link>
                            <div className="flex gap-4 mt-6">
                                <Link className=" bg-accent-color p-2 rounded-xl flex items-center text-white" rel="nofollow noreferrer noopener" target="_blank" href={{ pathname: "https://www.facebook.com/profile.php?id=61564506058140" }}>
                                    <BsFacebook className="text-xl" />
                                </Link>
                                <Link className=" bg-accent-color p-2 rounded-xl flex items-center text-white" rel="nofollow noreferrer noopener" target="_blank" href={{ pathname: "https://x.com/edgesense_io" }}>
                                    <IoLogoTwitter className="text-xl" />
                                </Link>
                                <Link className=" bg-accent-color p-2 rounded-xl flex items-center text-white" rel="nofollow noreferrer noopener" target="_blank" href={{ pathname: "https://www.linkedin.com/company/edgesense-io/about/" }}>
                                    <FaLinkedinIn className="text-xl" />
                                </Link>
                                <Link className=" bg-accent-color p-2 rounded-xl flex items-center text-white" rel="nofollow noreferrer noopener" target="_blank" href={{ pathname: "https://www.instagram.com/edgesene.io/" }}>
                                    <GrInstagram className="text-xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120604.58376427538!2d72.99539321937095!3d19.156149841133715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf6d15555555%3A0x105ac3abda26c884!2sBurak%20Metering%20Private%20Limited!5e0!3m2!1sen!2sin!4v1721910510297!5m2!1sen!2sin" width="100%" className="rounded-xl" height="350"></iframe>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUsBanner;
