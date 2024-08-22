"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { isEmail } from 'validator';
import { z } from 'zod';
import InputField from './Fields/Input';
import { Textarea } from './ui/textarea';
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
    firstName: z.string().min(2, 'First Name is too short'),
    email: z.string().email('Invalid email address').refine(isEmail, { message: 'Invalid Email Address' }),
    phone: z.string().min(10, 'Phone number is too short').regex(/^\d+$/, 'Phone number must contain only digits'),
});

type FormInputs = z.infer<typeof formSchema>;

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
        toast.success('Form submitted successfully!');
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col gap-4">
            <InputField
                inputType="text"
                register={register}
                required
                name="firstName"
                placeholder="First Name"
                error={errors.firstName?.message}
                className={'border-0 w-full'}
            />
            <InputField
                inputType="email"
                register={register}
                required
                name="email"
                placeholder="Enter Email"
                error={errors.email?.message}
                className={'border-0 w-full'}
            />
            <InputField
                inputType="tel"
                register={register}
                required
                name="phone"
                placeholder="Enter Phone"
                error={errors.phone?.message}
                className={'border-0 w-full'}
            />
            <Textarea
                className='px-2 w-full col-span-2 placeholder:text-[16px]'
                rows={5}
                placeholder="How can we Help ?"

            />
            {/* <div className="flex items-center space-x-3">
                <Checkbox id="terms" className='rounded-[4px]' />
                <label
                    htmlFor="terms"
                    className="p font-medium text-text-color   peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    I’d like to get news & insights from Burak IoT
                </label>
            </div> */}
            <Button
                type="submit"
                className="w-fit px-6 py-6 cursor-pointer p bg-accent-color text-white rounded-full"
            >
                Submit
            </Button>
        </form>
    );
};

export default RegisterForm;
