"use client";
import React, { useState } from "react";
import { NavigationMenuContent } from "../ui/navigation-menu";
import ListItem from "./ListItem";
import Image from "next/image";

// Define a type for the possible hover items
type HoverItem = 'Case Study' | 'Blogs' | 'FAQs' | null;

const ResourcesLink = () => {
    // Use the HoverItem type in the state definition
    const [hoveredItem, setHoveredItem] = useState<HoverItem>(null);

    // Define the images for each list item
    const images: Record<Exclude<HoverItem, null>, string> = {
        "Case Study": "/burak-iot.png",
        "Blogs": "/ambient-monitoring.png",
        "FAQs": "/benifits.png"
        // "Downloads": "/benifits.png"
    };

    const defaultImageSrc = "/burak-iot.png";

    const getBackgroundColor = (item: HoverItem) => {
        return hoveredItem === item ? '#0A66C2' : 'transparent';
    };

    return (
        <NavigationMenuContent className='md:p-6 md:w-[300px]'>
            <ul className="flex flex-col gap-2">
                <ListItem
                    className='px-6 py-4 rounded-xl'
                    href="/case-study"
                    title="Case Study"
                    onMouseEnter={() => setHoveredItem("Case Study")}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                        backgroundColor: getBackgroundColor("Case Study"),
                        color: hoveredItem === "Case Study" ? 'white' : 'inherit',
                    }}
                >
                </ListItem>
                <ListItem
                    className='px-6 rounded-xl'
                    href="/blogs"
                    title="Blogs"
                    onMouseEnter={() => setHoveredItem("Blogs")}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                        backgroundColor: getBackgroundColor("Blogs"),
                        color: hoveredItem === "Blogs" ? 'white' : 'inherit',
                    }}
                >
                </ListItem>
                <ListItem
                    className='px-6 rounded-xl'
                    href="/faqs"
                    title="FAQs"
                    onMouseEnter={() => setHoveredItem("FAQs")}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                        backgroundColor: getBackgroundColor("FAQs"),
                        color: hoveredItem === "FAQs" ? 'white' : 'inherit',
                    }}
                >
                </ListItem>
            </ul>
        </NavigationMenuContent>
    )
}

export default ResourcesLink;
