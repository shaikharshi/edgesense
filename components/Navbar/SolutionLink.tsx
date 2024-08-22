'use client';
import React, { useState } from 'react'
import { NavigationMenuContent, NavigationMenuLink } from '../ui/navigation-menu'
import ListItem from './ListItem'
import Image from 'next/image';

// Define a type for the possible hover items
type HoverItem = 'Energy Management System' | 'Water Management System' | 'HVAC Optimization' | 'Predictive Maintenance' | 'Ambient Monitoring' | 'Steam trap monitoring' | 'Busbar Monitoring' | 'Plant Digitalization' | null;

const SolutionLink = () => {
    // Use the HoverItem type in the state definition
    const [hoveredItem, setHoveredItem] = useState<HoverItem>(null);

    // Define the images for each list item
    const images: Record<Exclude<HoverItem, null>, string> = {
        "Energy Management System": "/burak-iot.png",
        "Water Management System": "/about-us.png",
        "HVAC Optimization": "/ambient-monitoring.png",
        "Predictive Maintenance": "/benifits.png",
        "Ambient Monitoring": "/busbar-monitoring.png",
        "Steam trap monitoring": "/energy-management-system.png",
        "Busbar Monitoring": "/hvac-optimization.png",
        "Plant Digitalization": "/digital-transformation.png",
    };

    const defaultImageSrc = "/burak-iot.png";

    const getBackgroundColor = (item: HoverItem) => {
        return hoveredItem === item ? '#0A66C2' : 'transparent';
    };

    const getBorderRadius = (item: HoverItem) => {
        return hoveredItem === item ? '10px 0 0 10px' : '10px';
    };

    return (
        <NavigationMenuContent className="grid sm:flex w-[300px] md:w-[660px] md:p-7">
            <ul className="flex flex-col gap-2 md:w-[400px] lg:w-[550px]">
                <ListItem className='w-[103%] py-4 px-6'
                    href="/solutions/solution-l2"
                    title="Energy Management System"
                    onMouseEnter={() => setHoveredItem("Energy Management System")}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ backgroundColor: getBackgroundColor("Energy Management System"), color: hoveredItem === "Energy Management System" ? 'white' : 'inherit', borderRadius: getBorderRadius("Energy Management System") }}
                >

                </ListItem>

                <ListItem className='w-[103%] py-4 px-6'
                    href="/solutions/solution-l2"
                    title="Water Management System"
                    onMouseEnter={() => setHoveredItem("Water Management System")}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ backgroundColor: getBackgroundColor("Water Management System"), color: hoveredItem === "Water Management System" ? 'white' : 'inherit', borderRadius: getBorderRadius("Water Management System") }}
                >
                </ListItem>

                <ListItem className='w-[103%] py-4 px-6'
                    href="/solutions/solution-l2"
                    title="HVAC Optimization"
                    onMouseEnter={() => setHoveredItem("HVAC Optimization")}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ backgroundColor: getBackgroundColor("HVAC Optimization"), color: hoveredItem === "HVAC Optimization" ? 'white' : 'inherit', borderRadius: getBorderRadius("HVAC Optimization") }}
                >
                </ListItem>
                <ListItem className='w-[103%] py-4 px-6'
                    href="/solutions/solution-l2"
                    title="Predictive Maintenance"
                    onMouseEnter={() => setHoveredItem("Predictive Maintenance")}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ backgroundColor: getBackgroundColor("Predictive Maintenance"), color: hoveredItem === "Predictive Maintenance" ? 'white' : 'inherit', borderRadius: getBorderRadius("Predictive Maintenance") }}
                >
                </ListItem>
                <ListItem className='w-[103%] py-4 px-6'
                    href="/solutions/solution-l2"
                    title="Ambient Monitoring"
                    onMouseEnter={() => setHoveredItem("Ambient Monitoring")}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ backgroundColor: getBackgroundColor("Ambient Monitoring"), color: hoveredItem === "Ambient Monitoring" ? 'white' : 'inherit', borderRadius: getBorderRadius("Ambient Monitoring") }}
                >
                </ListItem>
                <ListItem className='w-[103%] py-4 px-6'
                    href="/solutions/solution-l2"
                    title="Steam trap monitoring"
                    onMouseEnter={() => setHoveredItem("Steam trap monitoring")}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ backgroundColor: getBackgroundColor("Steam trap monitoring"), color: hoveredItem === "Steam trap monitoring" ? 'white' : 'inherit', borderRadius: getBorderRadius("Steam trap monitoring") }}
                >
                </ListItem>
                <ListItem className='w-[103%] py-4 px-6'
                    href="/solutions/solution-l2"
                    title="Busbar Monitoring"
                    onMouseEnter={() => setHoveredItem("Busbar Monitoring")}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ backgroundColor: getBackgroundColor("Busbar Monitoring"), color: hoveredItem === "Busbar Monitoring" ? 'white' : 'inherit', borderRadius: getBorderRadius("Busbar Monitoring") }}
                >
                </ListItem>
                <ListItem className='w-[103%] py-4 px-6'
                    href="/solutions/solution-l2"
                    title="Plant Digitalization"
                    onMouseEnter={() => setHoveredItem("Plant Digitalization")}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ backgroundColor: getBackgroundColor("Plant Digitalization"), color: hoveredItem === "Plant Digitalization" ? 'white' : 'inherit', borderRadius: getBorderRadius("Plant Digitalization") }}
                >
                </ListItem>
            </ul>
            <div style={{ backgroundColor: hoveredItem ? '#0A66C2' : 'transparent', padding: '10px', borderRadius: '10px' }}>
                <Image
                    className='w-full h-full object-cover'
                    src={hoveredItem ? images[hoveredItem] : defaultImageSrc}
                    alt="Picture of the author"
                    width={800}
                    height={300}
                    style={{ borderRadius: '10px' }}
                />
            </div>
        </NavigationMenuContent>
    )
}

export default SolutionLink
