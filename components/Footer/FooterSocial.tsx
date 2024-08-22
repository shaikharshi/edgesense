"use client";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Link from 'next/link';


// Define validation schema
const formSchema = z.object({
    email: z.string().email('Invalid email address').min(5, 'Email is too short'),
});
type FormInputs = z.infer<typeof formSchema>;

const FooterSocial = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        console.log(data); // Check if data is correctly logged
        reset();
        try {
            const response = await axios.post('/api/subscribe', { email: data.email });
            if (response.status === 200) {
                toast.success('Subscribed successfully!');
                reset(); // Reset form data after successful submission
                router.push('/thank-you'); // Navigate to a thank you page or similar
            } else {
                toast.error('Subscription failed.');
            }
        } catch (error) {
            toast.error('An error occurred.');
            console.error('Subscription error:', error);
        }
    };

    return (
        <div className="lg:grid justify-between mt-6">
            <div className="md:px-12 flex flex-col ml-0 md:ml-10 lg:ml-0  lg:items-start  justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col max-w-sm overflow-hidden">
                    <div className="flex w-full border-[1px] bg-white border-accent-color rounded-md">
                        <Input
                            type="email"
                            placeholder="Enter Email"
                            {...register("email")}
                            className={`w-full text-text-color bg-white ${errors.email ? "border-red-500" : ""}`}
                            style={{ boxShadow: 'none', border: 'none', height: 'auto' }}
                        />
                        <Button
                            className='border-0 bg-white text-accent-color py-3 shadow-none hover:bg-white font-semibold'
                            style={{ boxShadow: 'none', border: 'none' }}
                            type="submit"
                        >
                            Subscribe
                        </Button>
                    </div>
                    {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
                </form>
                <p className='text-md text-text-color mt-4'>Get the latest product news and behind the scenes updates. Unsubscribe at any time.</p>
            </div>

            <div className="bg-accent-color mt-6 md:px-12 p-6 custom-rounded flex flex-col md:items-start justify-around lg:justify-center">
                <div className="flex gap-4 flex-wrap">
                    <Link className="flex items-center gap-2 text-white" href="mailto:sales@edgesense.io"><HiOutlineMail />sales@edgesense.io</Link>
                    <Link className="flex items-center gap-2 text-white" href="tel:8655587403"><BsTelephone />+91 - 86555 87403</Link>
                </div>
                <div className="flex gap-4 mt-6">
                    <Link className="bg-white p-2 rounded-xl flex items-center text-accent-color" rel="nofollow noreferrer noopener" target="_blank" href="https://www.facebook.com/profile.php?id=61564506058140"><BsFacebook className="text-xl" /></Link>
                    <Link className="bg-white p-2 rounded-xl flex items-center text-accent-color" rel="nofollow noreferrer noopener" target="_blank" href="https://x.com/edgesense_io"><IoLogoTwitter className="text-xl" /></Link>
                    <Link className="bg-white p-2 rounded-xl flex items-center text-accent-color" rel="nofollow noreferrer noopener" target="_blank" href="https://www.linkedin.com/company/edgesense-io/about/"><FaLinkedinIn className="text-xl" /></Link>
                    <Link className="bg-white p-2 rounded-xl flex items-center text-accent-color" rel="nofollow noreferrer noopener" target="_blank" href="https://www.instagram.com/edgesene.io/"><GrInstagram className="text-xl" /></Link>
                </div>
            </div>


        </div>
    );
};

export default FooterSocial;
