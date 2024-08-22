"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from "@/components/ui/input";
import { Textarea } from '../ui/textarea';
import Link from 'next/link';
import { toast } from 'sonner';
import axios from 'axios';

// Define validation schema using zod
const formSchema = z.object({
    name: z.string().min(3, 'Name is too short'),
    email: z.string().email('Invalid email address').min(5, 'Email is too short'),
    phone: z.string().min(10, 'Phone number is too short'),
    questions: z.string().min(10, 'Question is too short'),
});

type FormInputs = z.infer<typeof formSchema>;

const FaqForms = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        try {
            const response = await axios.post('/api/faq/submit', data);

            if (response.status === 201) {
                toast.success("Your question has been submitted successfully.");
            } else {
                toast.error("Failed to submit your question. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred while submitting your question.");
            console.error('Submission error:', error);
        }
    };

    return (
        <div className='bg-white border-2 border-tertiary-color px-4 rounded-lg py-2'>
            <div className='bg-accent-color p-6 rounded-xl'>
                <h2 className='text-white h3'>Got more Questions?</h2>
                <p className='text-white'>Fill out the form and we’ll answer your question.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-8 flex flex-col gap-4'>
                <div>
                    <Input
                        className='px-2 py-6 border border-accent-color'
                        type="text"
                        placeholder="Name"
                        {...register('name')}
                    />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Input
                            className='px-2 py-6 border-accent-color'
                            type="email"
                            placeholder="Email"
                            {...register('email')}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <Input
                            className='px-2 py-6 border-accent-color'
                            type="tel"
                            placeholder="Phone"
                            {...register('phone')}
                        />
                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                    </div>
                </div>
                <div>
                    <Textarea
                        className='px-2 border-accent-color'
                        rows={5}
                        placeholder="Questions"
                        {...register('questions')}
                    />
                    {errors.questions && <p className='text-red-500'>{errors.questions.message}</p>}
                </div>
                <button type="submit" className='px-4 py-2 bg-accent-color text-white rounded-full w-fit text-lg'>Submit</button>
            </form>
        </div>
    );
}

export default FaqForms;
