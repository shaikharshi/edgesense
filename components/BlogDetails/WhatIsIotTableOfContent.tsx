"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const WhatIsIotTableOfContent = () => {
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
                href="#how-is-iot-beneficial"
                onClick={(e) => handleClick('how-is-iot-beneficial', e)}
                className={`text-lg ${clickedSection === 'how-is-iot-beneficial' ? 'text-accent-color underline' : activeSection === 'how-is-iot-beneficial' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                Why industries adopting IoT
            </Link>
            <Link
                href="#history-of-iot"
                onClick={(e) => handleClick('history-of-iot', e)}
                className={`text-lg ${clickedSection === 'history-of-iot' ? 'text-accent-color underline' : activeSection === 'history-of-iot' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                History of IoT
            </Link>
            <Link
                href="#components-of-iot"
                onClick={(e) => handleClick('components-of-iot', e)}
                className={`text-lg ${clickedSection === 'components-of-iot' ? 'text-accent-color underline' : activeSection === 'components-of-iot' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                Components of IoT
            </Link>
            <Link
                href="#advantages-of-iot"
                onClick={(e) => handleClick('advantages-of-iot', e)}
                className={`text-lg ${clickedSection === 'advantages-of-iot' ? 'text-accent-color underline' : activeSection === 'advantages-of-iot' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                Advantages of IoT
            </Link>
            <Link
                href="#disadvantages-of-iot"
                onClick={(e) => handleClick('disadvantages-of-iot', e)}
                className={`text-lg ${clickedSection === 'disadvantages-of-iot' ? 'text-accent-color underline' : activeSection === 'disadvantages-of-iot' ? 'text-accent-color underline' : 'text-text-color'}`}
            >
                Disadvantages of IoT
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

export default WhatIsIotTableOfContent;
