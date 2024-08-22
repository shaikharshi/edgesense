"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Textarea } from '../ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import ImageSlider from '../RequestDemoSlider';

// Define the Zod schema for the form
const schema = z.object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(1, 'Phone is required').regex(/^[0-9]+$/, 'Phone must be a number'),
    companyName: z.string().min(3, 'Company Name is required'),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(1, 'Message is required'),
});

interface DotsProps {
    count: number;
    current: number;
}

const RequestDemo = (props: any) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    // Initialize react-hook-form with Zod resolver
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    React.useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap() + 1);
        };

        api.on("select", handleSelect);

        // Auto slide every 3 seconds
        const intervalId = setInterval(() => {
            const nextIndex = (current % count) + 1;
            api.scrollTo(nextIndex - 1);
        }, 3000); // Adjust the interval time as needed

        // Cleanup interval on component unmount
        return () => {
            clearInterval(intervalId);
            api.off("select", handleSelect);
        };
    }, [api, current, count]);

    // Dots component to display below the carousel
    const Dots: React.FC<DotsProps> = ({ count, current }) => {
        return (
            <div className="flex justify-center mt-4">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 mx-1 rounded-full ${current === index + 1 ? 'bg-accent-color' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        );
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={props.ButtonClass}>{props.buttonName}</Button>
            </DialogTrigger>
            <DialogContent className="grid md:grid-cols-2 items-center rounded-lg w-[90%] md:w-[600px] lg:min-w-[800px]">
                <div>
                    <DialogHeader>
                        <Image
                            className='w-[200px] rounded-lg mt-4'
                            src={'/edge-sense-logo.svg'}
                            alt={'Burak Iot Logo'}
                            width={300}
                            height={150}
                        />
                        <DialogTitle className='text-accent-color mt-8'>Reach out to learn about our projects, products & expertise</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex flex-col gap-4'>
                            <div>
                                <Input
                                    className='px-2 py-6 border-0 border-b-[1px] border-b-accent-color rounded-none focus:border-transparent focus:outline-none focus:ring-0'
                                    type="text"
                                    placeholder="Name"
                                    {...register('name')}
                                />
                                {errors.name && <p className="text-red-500">{errors.name.message?.toString()}</p>}
                            </div>
                            <div className="lg:flex gap-4">
                                <div>
                                    <Input
                                        className='px-2 py-6 border-0 border-b-[1px] border-b-accent-color rounded-none focus:border-transparent focus:outline-none focus:ring-0'
                                        type="phone"
                                        placeholder="Phone"
                                        {...register('phone')}
                                    />
                                    {errors.phone && <p className="text-red-500">{errors.phone.message?.toString()}</p>}
                                </div>
                                <div>
                                    <Input
                                        className='px-2 py-6 border-0 border-b-[1px] border-b-accent-color rounded-none focus:border-transparent focus:outline-none focus:ring-0'
                                        type="email"
                                        placeholder="Email"
                                        {...register('email')}
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email.message?.toString()}</p>}
                                </div>
                            </div>
                            <div>
                                <Input
                                    className='px-2 py-6 border-0 border-b-[1px] border-b-accent-color rounded-none focus:border-transparent focus:outline-none focus:ring-0'
                                    type="text"
                                    placeholder="Company Name"
                                    {...register('companyName')}
                                />
                                {errors.companyName && <p className="text-red-500">{errors.companyName.message?.toString()}</p>}
                            </div>
                            {/* <div>
                                <Input
                                    className='px-2 py-6 border-0 border-b-[1px] border-b-accent-color rounded-none focus:border-transparent focus:outline-none focus:ring-0'
                                    type="text"
                                    placeholder="Subject"
                                    {...register('subject')}
                                />
                                {errors.subject && <p className="text-red-500">{errors.subject.message?.toString()}</p>}
                            </div> */}
                            <div>
                                <Textarea
                                    className='px-2 py-6 border-0 border-b-[1px] border-b-accent-color rounded-none focus:border-transparent focus:outline-none focus:ring-0'
                                    rows={3}
                                    placeholder="Message"
                                    {...register('message')}
                                />
                                {errors.message && <p className="text-red-500">{errors.message.message?.toString()}</p>}
                            </div>
                            <Button type="submit" className='bg-accent-color border-[1px] border-transparent w-fit hover:bg-white hover:text-accent-color hover:border-[1px] hover:border-accent-color'>Submit</Button>
                        </form>
                    </DialogDescription>
                </div>
                <div className='hidden md:block h-full pb-6 '>
                    <ImageSlider />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default RequestDemo;
