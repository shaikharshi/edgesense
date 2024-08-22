"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeTestimonial = () => {
    return (
        <section className="bg-[url('/client-bg.jpg')] md:py-24 py-14">
            <div className="container">
                <h2 className='text-white text-3xl text-center font-semibold'>Client Testimonials</h2>
                <p className='text-white text-lg text-center mt-2 '>Discover How Our IoT Solutions Transformed Operations and Boosted Efficiency for Various Industries</p>
                <div className="masonry-grid mt-6">
                    <div className="masonry-item">
                        <div className="grid grid-cols-[50px, auto] gap-2 bg-white p-6 rounded-2xl">
                            <div className="flex gap-2">
                                <Image className="rounded-full object-cover w-[60px] h-[60px]"
                                    src="/profile.webp"
                                    alt="Client Picture"
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <h3 className='text-accent-color text-xl font-semibold'>John Smith</h3>
                                    <p className='text-text-color font-semibold text-lg'>Global Ventures</p>
                                </div>
                            </div>
                            <p className='text-md text-text-color '>Working with Edgesense has been an absolute pleasure. Their cutting-edge technology and customer-centric approach have exceeded our expectations. We’ve seen significant improvements in our operational efficiency</p>
                        </div>
                    </div>
                    <div className="masonry-item">
                        <div className="grid grid-cols-[50px, auto] gap-2 bg-white p-6 rounded-2xl">
                            <div className="flex gap-2">
                                <Image className="rounded-full object-cover w-[60px] h-[60px]"
                                    src="/profile.webp"
                                    alt="Client Picture"
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <h3 className='text-accent-color text-xl font-semibold'>Jane Doe</h3>
                                    <p className='text-text-color font-semibold text-lg'>Tech Innovations</p>
                                </div>
                            </div>
                            <p className='text-md text-text-color '>Edgesense has been a game-changer for our business. Their innovative solutions have streamlined our processes, saving us both time and money. The team is professional, responsive, and truly understands our needs.</p>
                        </div>
                    </div>
                    <div className="masonry-item">
                        <div className="grid grid-cols-[50px, auto] gap-2 bg-white p-6 rounded-2xl">
                            <div className="flex gap-2">
                                <Image className="rounded-full object-cover w-[60px] h-[60px]"
                                    src="/profile.webp"
                                    alt="Client Picture"
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <h3 className='text-accent-color text-xl font-semibold'>Emily Johnson</h3>
                                    <p className='text-text-color font-semibold text-lg'>NextGen Solutions</p>
                                </div>
                            </div>
                            <p className='text-md text-text-color '>The expertise and dedication of the Edgesense team are unparalleled. They took the time to understand our challenges and provided customized solutions that have transformed our business. I highly recommend their services.</p>
                        </div>
                    </div>
                    <div className="masonry-item">
                        <div className="grid grid-cols-[50px, auto] gap-2 bg-white p-6 rounded-2xl">
                            <div className="flex gap-2">
                                <Image className="rounded-full object-cover w-[60px] h-[60px]"
                                    src="/profile.webp"
                                    alt="Client Picture"
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <h3 className='text-accent-color text-xl font-semibold'>Michael Brown</h3>
                                    <p className='text-text-color font-semibold text-lg'>Innovate Corp</p>
                                </div>
                            </div>
                            <p className='text-md text-text-color '>Edgesense’s solutions have been instrumental in our growth. Their ability to integrate seamlessly with our existing systems has given us a competitive edge in the market. The team is knowledgeable, supportive, and always ready to help.</p>
                        </div>
                    </div>
                    <div className="masonry-item">
                        <div className="grid grid-cols-[50px, auto] gap-2 bg-white p-6 rounded-2xl">
                            <div className="flex gap-2">
                                <Image className="rounded-full object-cover w-[60px] h-[60px]"
                                    src="/profile.webp"
                                    alt="Client Picture"
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <h3 className='text-accent-color text-xl font-semibold'>Lisa Green</h3>
                                    <p className='text-text-color font-semibold text-lg'>Bright Future</p>
                                </div>
                            </div>
                            <p className='text-md text-text-color '>I’m incredibly impressed with the results we’ve achieved since partnering with Edgesense. Their innovative approach has not only improved our efficiency but also enhanced our customer experience. The team’s expertise is evident in everything they do.</p>
                        </div>
                    </div>
                    <div className="masonry-item">
                        <div className="grid grid-cols-[50px, auto] gap-2 bg-white p-6 rounded-2xl">
                            <div className="flex gap-2">
                                <Image className="rounded-full object-cover w-[60px] h-[60px]"
                                    src="/profile.webp"
                                    alt="Client Picture"
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <h3 className='text-accent-color text-xl font-semibold'>David Wilson</h3>
                                    <p className='text-text-color font-semibold text-lg'>Forward Thinking</p>
                                </div>
                            </div>
                            <p className='text-md text-text-color '>Edgesense has provided us with the tools and insights we needed to take our business to the next level. Their solutions are intuitive, effective, and have delivered tangible results. We couldn’t be happier with the partnership</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-6">
                    <Link className="text-white font-semibold underline" href={{ pathname: '#' }}>See All Reviews</Link>
                </div>
            </div>
        </section>
    );
};

export default HomeTestimonial;
