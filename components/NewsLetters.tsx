"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import axios from 'axios';
import { Input } from './ui/input';


// Define validation schema
const formSchema = z.object({
    email: z.string().email('Invalid email address').min(5, 'Email is too short'),
});
type FormInputs = z.infer<typeof formSchema>;

const NewsLetters = () => {

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
        reset()
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
        <section className='bg-accent-color py-14'>
            <div className="flex justify-between container items-center">
                <h2 className='text-white h3'>Let’s upgrade your Industrial Operations</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col overflow-hidden">
                    <div className="flex  items-center border-b-[1px] border-white rounded-xl overflow-hidden">
                        <Input
                            type="email"
                            placeholder="Enter Email"
                            {...register("email")}
                            className={` border-0 lg:w-[300px] flex-grow text-white placeholder:text-white ${errors.email ? "border-red-500" : ""}`}
                            style={{ boxShadow: 'none', border: 'none', height: 'auto' }}
                        />
                        <Button
                            className='border-0 bg-white text-accent-color py-3 shadow-none hover:bg-white'
                            style={{ boxShadow: 'none', border: 'none' }}
                            type="submit"
                        >
                            Request Demo
                        </Button>
                    </div>
                    {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
                </form>

            </div>
        </section>

    )
}

export default NewsLetters
