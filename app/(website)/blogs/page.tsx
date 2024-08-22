"use client"
import { useState } from 'react'
import NewsLetters from '@/components/NewsLetters'
import SolutionsCard from '@/components/Solutions/SolutionsCard'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


// Define the types for the categories
type Category = 'all' | 'information' | 'energy' | 'healthcare' | 'logistics' | 'manufacturing' | 'agriculture' | 'retail' | 'construction' | 'automotive' | 'telecommunications'

// Define the type for the cards
interface Card {
    imageSrc: string
    altText: string
    title: string
    description: string
    link: string
    category?: Category // Optional category if needed
}

const allCards: Card[] = [
    {
        imageSrc: "/industrial-iot-application-various-industries.jpg", altText: "IIoT - Industrial IoT application in various industries - Edge Sense", title: "Industrial IoT(IIoT) applications in various industries - Edge sense", description: "Industrial Internet of Things (IIoT) is the use of Internet of Things (IoT) technology in industrial applications.", link: '/blogs/industrial-iot-application-in-various-industries', category: 'information'
    },
    {
        imageSrc: "/what-is-iot.jpg", altText: "What is IoT- IoT background with drawings of technological devices", title: "What is the Internet of Things?  - Edge sense", description: "The Internet of Things, IoT, is a network of physical devices such as household objects to industrial tools. that can be monitored and sometimes operated remotely. It is like a network of things that are interconnected for instance your phone, computer, vehicle even watch.", link: '/blogs/what-is-internet-of-things', category: 'information'
    },


]

const Page = () => {
    const [visibleCards, setVisibleCards] = useState(6)
    const [activeTab, setActiveTab] = useState<Category>('all')

    const handleLoadMore = () => {
        setVisibleCards(visibleCards + 6)
    }

    const handleShowLess = () => {
        setVisibleCards(Math.max(6, visibleCards - 6))
    }

    const filterCards = (category: Category) => {
        if (category === 'all') {
            return allCards
        }
        return allCards.filter(card => card.category === category)
    }

    const cardsToShow = filterCards(activeTab).slice(0, visibleCards)

    return (
        <>
            <section className='container py-24 flex flex-col gap-2 mt-10'>
                <Breadcrumb className='flex justify-center'>
                    <BreadcrumbList className='text-lg'>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/" className='hover:text-text-color'>Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <span className='font-semibold text-black cursor-pointer'>Blogs</span>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className='h2 text-accent-color font-semibold text-center mt-6'>Insights on the IoT Industry</h1>
                <p className='text-text-color text-center p mt-2'>Exploring Trends, Innovations, and Transformations in the World of IoT</p>
                <Tabs defaultValue="all" className="py-10 " onValueChange={(value: string) => setActiveTab(value as Category)}>
                    <TabsList className="w-full py-4 px-6 flex gap-2 lg:justify-between flex-wrap mb-16 overflow-x-auto">
                        <TabsTrigger className='py-3 px-4 text-md rounded-full text-accent-color md bg-tertiary-color' value="all">All</TabsTrigger>
                        <TabsTrigger className='py-3 px-4 text-md rounded-full text-accent-color md bg-tertiary-color' value="information">Information</TabsTrigger>
                        <TabsTrigger className='py-3 px-4 text-md rounded-full text-accent-color md bg-tertiary-color' value="energy">Energy</TabsTrigger>
                        <TabsTrigger className='py-3 px-4 text-md rounded-full text-accent-color md bg-tertiary-color' value="healthcare">Healthcare</TabsTrigger>
                        <TabsTrigger className='py-3 px-4 text-md rounded-full text-accent-color md bg-tertiary-color' value="logistics">Logistics</TabsTrigger>
                        <TabsTrigger className='py-3 px-4 text-md rounded-full text-accent-color md bg-tertiary-color' value="manufacturing">Manufacturing</TabsTrigger>
                        <TabsTrigger className='py-3 px-4 text-md rounded-full text-accent-color md bg-tertiary-color' value="agriculture">Agriculture</TabsTrigger>
                        <TabsTrigger className='py-3 px-4 text-md rounded-full text-accent-color md bg-tertiary-color' value="retail">Retail</TabsTrigger>
                        <TabsTrigger className='py-3 px-4 text-md rounded-full text-accent-color md bg-tertiary-color' value="construction">Construction</TabsTrigger>
                        <TabsTrigger className='py-3 px-4 text-md rounded-full text-accent-color md bg-tertiary-color' value="automotive">Automotive</TabsTrigger>
                        <TabsTrigger className='py-3 px-4 text-md rounded-full text-accent-color md bg-tertiary-color' value="telecommunications">Telecommunications</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cardsToShow.map((card, index) => (
                                <SolutionsCard
                                    key={index}
                                    imageSrc={card.imageSrc}
                                    altText={card.altText}
                                    title={card.title}
                                    description={card.description}
                                    link={card.link}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center mt-6 gap-4">
                            {visibleCards < filterCards('all').length && (
                                <button
                                    className="text-white font-medium bg-accent-color rounded-[10px] px-4 py-3 w-fit"
                                    onClick={handleLoadMore}
                                >
                                    Load More
                                </button>
                            )}
                            {visibleCards > 6 && (
                                <button
                                    className="text-white font-medium bg-accent-color rounded-[10px] px-4 py-3 w-fit"
                                    onClick={handleShowLess}
                                >
                                    Show Less
                                </button>
                            )}
                        </div>
                    </TabsContent>

                    {/* Repeat the same structure for other categories */}
                    {['energy', 'information', 'healthcare', 'logistics', 'manufacturing', 'agriculture', 'retail', 'construction', 'automotive', 'telecommunications'].map(category => (
                        <TabsContent key={category} value={category}>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filterCards(category as Category).slice(0, visibleCards).map((card, index) => (
                                    <SolutionsCard
                                        key={index}
                                        imageSrc={card.imageSrc}
                                        altText={card.altText}
                                        title={card.title}
                                        description={card.description}
                                        link={card.link}
                                    />
                                ))}
                            </div>
                            <div className="flex justify-center mt-6 gap-4">
                                {visibleCards < filterCards(category as Category).length && (
                                    <button
                                        className="text-white font-medium bg-accent-color rounded-[10px] px-4 py-3 w-fit"
                                        onClick={handleLoadMore}
                                    >
                                        Load More
                                    </button>
                                )}
                                {visibleCards > 6 && (
                                    <button
                                        className="text-white font-medium bg-accent-color rounded-[10px] px-4 py-3 w-fit"
                                        onClick={handleShowLess}
                                    >
                                        Show Less
                                    </button>
                                )}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

            </section>
            <NewsLetters />
        </>
    )
}

export default Page
