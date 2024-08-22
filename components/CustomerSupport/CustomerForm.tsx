"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from '../ui/textarea';
import { Button } from '@/components/ui/button';
import InputField from '../Fields/Input';

const customerFormSchema = z.object({
    firstName: z.string().min(2, 'First Name is too short'),
    lastName: z.string().min(2, 'Last Name is too short'),
    email: z.string().email('Invalid email address').min(5, 'Email is too short'),
    phone: z.string()
        .min(10, 'Phone number is too short')
        .regex(/^\d+$/, 'Phone number must contain only digits'),
    subject: z.string().min(2, 'Subject is too short'),
    product: z.string().min(1, 'Product selection is required'),
    comments: z.string().min(5, 'Comments should be at least 5 characters long')
});

type CustomerFormValues = z.infer<typeof customerFormSchema>;

const CustomerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CustomerFormValues>({
        resolver: zodResolver(customerFormSchema)
    });

    const onSubmit: SubmitHandler<CustomerFormValues> = data => {
        console.log(data);
    };

    return (
        <div className='cus-box-shadow p-6 rounded-xl mt-10 md:mt-0'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                <div className="grid md:grid-cols-2 gap-3">
                    <InputField
                        inputType="text"
                        register={register}
                        name="firstName"
                        className='w-full'
                        placeholder="First Name"
                        error={errors.firstName?.message}
                    />
                    <InputField
                        inputType="text"
                        register={register}
                        name="lastName"
                        className='w-full'
                        placeholder="Last Name"
                        error={errors.lastName?.message}
                    />
                </div>
                <InputField
                    inputType="email"
                    register={register}
                    name="email"
                    placeholder="Email"
                    error={errors.email?.message}
                />
                <InputField
                    inputType="tel"
                    register={register}
                    required
                    name="phone"
                    placeholder="Enter Phone"
                    error={errors.phone?.message}
                    className={' border-0 w-full'}
                />
                <InputField
                    inputType="text"
                    register={register}
                    name="subject"
                    placeholder="Subject"
                    error={errors.subject?.message}
                />
                <Select>
                    <SelectTrigger className="px-2 py-6 text-text-color">
                        <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Products</SelectLabel>
                            <SelectItem value="io-sense">EdgeVision </SelectItem>
                            <SelectItem value="smart-gateway">EdgeNode</SelectItem>
                            <SelectItem value="new-product">New Product</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Textarea
                    className='px-2'
                    rows={5}
                    placeholder="Requirments or Message"
                />

                <Button type="submit" className="w-fit p cursor-pointer py-6 bg-accent-color border-[1px] border-transparent hover:bg-white hover:text-accent-color hover:border-[1px] hover:border-accent-color text-white rounded-fit">
                    Send Message
                </Button>
            </form>
        </div>
    )
}

export default CustomerForm;
