import BlogContent from '@/components/BlogDetails/BlogContent'
import BlogForm from '@/components/BlogDetails/BlogForm'
import RelatedBlogs from '@/components/BlogDetails/RelatedBlogs'
import TableOfContent from '@/components/BlogDetails/TableOfContent'
import React from 'react'
import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import NewsLetters from '@/components/NewsLetters'
import SolutionsCard from '@/components/Solutions/SolutionsCard'

const Page = () => {
    return (
        <>
            <div className="container pb-10 pt-20  md:py-24">
                <Breadcrumb className='flex justify-center py-6'>
                    <BreadcrumbList className='text-lg'>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/blogs">Blogs</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className='font-semibold'>IIoT - Industrial IoT application in various industries</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="grid md:grid-cols-[0.7fr_2fr_1fr] md:gap-4 lg:grid-cols-[0.8fr_2fr_1fr] lg:gap-14">

                    <div className="lg:sticky top-0">
                        <TableOfContent />
                    </div>

                    <div className='mt-4 md:mt-0 blog-box-shadow p-4'>
                        <BlogContent />
                    </div>

                    <div className="lg:sticky top-0 mt-4 md:mt-0">
                        <BlogForm />
                    </div>

                </div>
                <section className='pt-14 lg:pt-24'>
                    <h2 className='text-accent-color h2 font-semibold'>Related Blog</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        <SolutionsCard link='/blogs/what-is-internet-of-things' imageSrc={'/what-is-iot.jpg'} altText={'What is IoT- IoT background with drawings of technological devices'} title={'What is the Internet of Things?  - Edge sense'} description={'The Internet of Things, IoT, is a network of physical devices such as household objects to industrial tools. that can be monitored and sometimes operated remotely. It is like a network of things that are interconnected for instance your phone, computer, vehicle even watch.'} />
                    </div>
                </section>
            </div>
            <NewsLetters />
        </>
    )
}

export default Page
