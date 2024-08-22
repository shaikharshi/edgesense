"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
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

const NewsLetter = () => {
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
        reset(); // Reset form data after successful submission
        try {
            const response = await axios.post('/api/subscribe', { email: data.email });
            if (response.status === 200) {
                toast.success('Subscribed successfully!');
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
        <section className='py-14 container grid gap-4 justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col overflow-hidden rounded-2xl news-letter-shadow">
                <div className="flex justify-center items-center w-full md:w-[400px] border-[1px] news-letter-shadow border-accent-color rounded-2xl overflow-hidden">
                    <Input
                        type="email"
                        placeholder="Enter Email"
                        {...register("email")}
                        className={`border-0 w-full ${errors.email ? "border-red-500" : ""}`}
                        style={{ boxShadow: 'none', border: 'none', height: 'auto' }}
                    />
                    <Button
                        className='border-0 bg-accent-color text-white px-4 md:px-8 py-6 shadow-none hover:bg-accent-color'
                        style={{ boxShadow: 'none', border: 'none' }}
                        type="submit"
                    >
                        Request Demo
                    </Button>
                </div>
            </form>
            {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
            <p className='text-text-color text-center mt-2'>Let’s upgrade your Industrial Operations</p>
        </section>
    );
};

export default NewsLetter;
