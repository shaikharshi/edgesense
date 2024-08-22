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
                            <BreadcrumbPage className='font-semibold'>Blog Details</BreadcrumbPage>
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
                    <RelatedBlogs />
                </section>
            </div>
            <NewsLetters />
        </>
    )
}

export default Page
