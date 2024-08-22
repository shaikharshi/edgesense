"use client";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

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

const FaqTabs = () => {
    const [activeIndex, setActiveIndex] = useState<string | null>("item-0");

    const ioSenseFAQ: FAQItem[] = [
        {
            question: "Which machines are suitable for EdgeVision use?",
            answer: "Answer: How many flats are available for sale in Dosti West County on KarpetArea?",
        },
        {
            question: "How long does my data get stored?",
            answer: "Data from error incidents are stored until you no longer need it. Data that is not associated with any specific error is deleted by default after two weeks. If you need the data longer, this can be set without any problems.",
        },
        {
            question: "Where can I download the floor plan of Dosti West County project from?",
            answer: "Answer: Yes, with Q Auditor, you can fully customize audit templates to suit your specific needs and requirements.",
        },
    ];

    const smartGatewayFAQ: FAQItem[] = [
        {
            question: "What is EdgeNode?",
            answer: "Answer: EdgeNode provides the broad portfolio of industrial protocol connectors, EdgeNodes, and APIs, which gives EdgeNodeivity for perfect capture of any type of data.",
        },
        {
            question: "How does EdgeNode integrate with other systems?",
            answer: "Answer: EdgeNode integrates with other systems through a variety of connectivity options including 4G, GPRS, WiFi, LoRaWAN, Ethernet, etc.",
        },
        {
            question: "What protocols does EdgeNode support?",
            answer: "Answer: EdgeNode supports major industrial protocols such as Profinet, Modbus TCP/RS 485, Bacnet, IEC 61850, HART, OPC UA/DA Ethernet IP, MQTT, etc.",
        },
    ];

    return (
        <div>
            <Tabs defaultValue="io-sense" className="">
                <TabsList className="bg-tertiary-color flex flex-wrap justify-center items-center mx-auto w-fit">
                    <TabsTrigger className="px-5 py-3 w-fit p text-accent-color" value="io-sense">EdgeVision</TabsTrigger>
                    <TabsTrigger className="px-5 py-3 w-fit p text-accent-color" value="smart-gateway">EdgeNode</TabsTrigger>
                </TabsList>
                <TabsContent value="io-sense">
                    <main className="mt-[20px]">
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="item-0"
                            onValueChange={(value) => setActiveIndex(value)}
                        >
                            {ioSenseFAQ.map((item, index) => {
                                const itemValue = `item-${index}`;
                                const isActive = activeIndex === itemValue;

                                return (
                                    <AccordionItem
                                        key={itemValue}
                                        value={itemValue}
                                        className={`rounded-[20px] border-tertiary-color border-2 border-1 bg-white py-3 px-4`}
                                    >
                                        <AccordionTrigger
                                            className={`p  border-tertiary-color rounded-[14px] border-2 px-[10px] md:px-[30px] py-[20px] hover:no-underline text-start ${isActive ? 'md:py-[20px] bg-tertiary-color text-accent-color border-b-2 border-b-transparent rounded-b-none' : 'text-[#434343]'}`}
                                        >
                                            {`${index + 1}. ${item.question}`}
                                        </AccordionTrigger>
                                        <AccordionContent className={`p  px-[30px] pb-[20px] text-text-color ${isActive ? 'text-text-color bg-tertiary-color rounded-bl-[14px] rounded-br-[14px] border-b-2' : 'text-[#434343]'}`}>
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </main>
                </TabsContent>
                <TabsContent value="smart-gateway">
                    <main className="mt-[20px]">
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="item-0"
                            onValueChange={(value) => setActiveIndex(value)}
                        >
                            {smartGatewayFAQ.map((item, index) => {
                                const itemValue = `item-${index}`;
                                const isActive = activeIndex === itemValue;

                                return (
                                    <AccordionItem
                                        key={itemValue}
                                        value={itemValue}
                                        className={`rounded-lg border-tertiary-color border-2 border-1 mt-4 bg-white py-2 px-4`}
                                    >
                                        <AccordionTrigger
                                            className={`p  border-tertiary-color rounded-[14px] border-2 px-[10px] md:px-[30px] py-[20px] hover:no-underline text-start ${isActive ? 'md:py-[20px] bg-tertiary-color text-accent-color border-b-2 border-b-transparent rounded-b-none' : 'text-[#434343]'}`}
                                        >
                                            {`${index + 1}. ${item.question}`}
                                        </AccordionTrigger>
                                        <AccordionContent className={`p  px-[30px] pb-[20px] text-text-color ${isActive ? 'text-text-color bg-tertiary-color rounded-bl-[14px] rounded-br-[14px] border-b-2' : 'text-[#434343]'}`}>
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </main>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default FaqTabs;
