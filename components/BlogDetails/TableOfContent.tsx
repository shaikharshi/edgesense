"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const TableOfContent = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [clickedSection, setClickedSection] = useState<string | null>(null);

    useEffect(() => {
        const sections = document.querySelectorAll('p, h3');
        const observerOptions = {
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.getAttribute('id'));
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    const handleClick = (id: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Prevent default anchor behavior
        setClickedSection(id);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='flex flex-col gap-3 sticky top-[150px]'>
            <h1 className='text-accent-color h4 font-semibold'>Table of Content</h1>
            <Link
                href="#introduction"
                onClick={(e) => handleClick('introduction', e)}
                className={`text-lg ${clickedSection === 'introduction' ? 'text-accent-color underline' : activeSection === 'introduction' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                Introduction
            </Link>
            <Link
                href="#why-industries-adopting-iot"
                onClick={(e) => handleClick('why-industries-adopting-iot', e)}
                className={`text-lg ${clickedSection === 'why-industries-adopting-iot' ? 'text-accent-color underline' : activeSection === 'why-industries-adopting-iot' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                Why industries adopting IoT
            </Link>
            <Link
                href="#iot-Industrial-application"
                onClick={(e) => handleClick('iot-Industrial-application', e)}
                className={`text-lg ${clickedSection === 'iot-Industrial-application' ? 'text-accent-color underline' : activeSection === 'iot-Industrial-application' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                IoT Industrial application
            </Link>
            <Link
                href="#agriculture-industry"
                onClick={(e) => handleClick('agriculture-industry', e)}
                className={`text-lg ${clickedSection === 'agriculture-industry' ? 'text-accent-color underline' : activeSection === 'agriculture-industry' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                Agriculture Industry
            </Link>
            <Link
                href="#retail-industry"
                onClick={(e) => handleClick('retail-industry', e)}
                className={`text-lg ${clickedSection === 'retail-industry' ? 'text-accent-color underline' : activeSection === 'retail-industry' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                Retail Industry
            </Link>
            <Link
                href="#hospitality-industry"
                onClick={(e) => handleClick('hospitality-industry', e)}
                className={`text-lg ${clickedSection === 'hospitality-industry' ? 'text-accent-color underline' : activeSection === 'hospitality-industry' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                Hospitality Industry
            </Link>
            <Link
                href="#education-ndustry"
                onClick={(e) => handleClick('education-ndustry', e)}
                className={`text-lg ${clickedSection === 'education-ndustry' ? 'text-accent-color underline' : activeSection === 'education-ndustry' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                Education Industry
            </Link>
            <Link
                href="#conclusion"
                onClick={(e) => handleClick('conclusion', e)}
                className={`text-lg ${clickedSection === 'conclusion' ? 'text-accent-color underline' : activeSection === 'conclusion' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                Conclusion
            </Link>
        </div>
    );
};

export default TableOfContent;
