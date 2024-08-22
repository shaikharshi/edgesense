"use client";
import { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
}

const Accordian = () => {
    const [activeIndex, setActiveIndex] = useState<string | null>("item-0");

    const faq: FAQItem[] = [
        {
            question: "What is an EdgeNode IoT gateway?",
            answer: "EdgeNote IoT gateway acts as a central hub for connecting and managing IoT devices and sensors.",
        },
        {
            question: "How does an IoT gateway work?",
            answer: "An IoT gateway connects devices to the cloud using various protocols, bridging short-range and long-range communication technologies.",
        },
        {
            question: "What types of devices can an IoT gateway connect to?",
            answer: "EdgeNode can connect to a wide array of devices, including sensors, actuators, smart meters, cameras, environmental monitors, and more.",
        },
    ];

    return (
        <div className="flex justify-center items-center h-full">
            <main className="w-[1500px] mt-[20px]">
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-0"
                    onValueChange={(value) => setActiveIndex(value)}
                >
                    {faq.map((item, index) => {
                        const itemValue = `item-${index}`;
                        const isActive = activeIndex === itemValue;

                        return (
                            <AccordionItem
                                key={itemValue}
                                value={itemValue}
                                className={`border-tertiary-color border-[1px] mt-4 bg-white ${isActive ? 'rounded-t-[14px]' : 'rounded-[20px]'} `}
                            >
                                <AccordionTrigger
                                    className={`relative p border-tertiary-color px-[10px] py-[10px] md:px-[30px] md:py-[20px] hover:no-underline text-start ${isActive ? 'md:py-[20px] bg-tertiary-color text-accent-color rounded-t-[14px] rounded-b-[0px]' : 'text-[#434343] rounded-[14px]'}`}
                                >
                                    {`${index + 1}. ${item.question}`}
                                    {isActive && (
                                        <hr className="absolute bottom-0 left-0 hidden md:block md:w-[90%] lg:w-[95%] md:mx-8 border-t-2 border-text-color" />
                                    )}
                                </AccordionTrigger>
                                <AccordionContent className={`p  py-[10px] md:py-[20px] px-[30px] text-text-color ${isActive ? 'md:py-[20px] bg-tertiary-color rounded-b-[14px]' : 'rounded-bl-[14px] rounded-br-[14px]'}`}>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </main>
        </div>
    );
};

export default Accordian;
