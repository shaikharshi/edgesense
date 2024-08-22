"use client";

import React, { useState } from 'react';

const TroubleShootingTips = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const handleScroll = (id: string) => {
        setActiveSection(id); // Set active section
        const section = document.getElementById(id);
        if (section) {
            const top = section.getBoundingClientRect().top + window.pageYOffset - 100; // Adjust offset as needed
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <div className="grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] mt-6 md:mt-20 md:gap-10 lg:gap-20">
            <div className='flex flex-col gap-4'>
                <div
                    className={`flex flex-col px-8 py-4 rounded-lg cursor-pointer ${activeSection === 'common-issues' ? 'bg-tertiary-color' : 'border-2 border-tertiary-color'}`}
                    onClick={() => handleScroll('common-issues')}
                >
                    <h2 className='h4 text-accent-color font-semibold'>Common Issues</h2>
                    <p>Identify and fix frequent problems such as connectivity issues, data discrepancies, and device malfunctions.</p>
                </div>
                <div
                    className={`flex flex-col px-8 py-4 rounded-lg cursor-pointer ${activeSection === 'error-codes' ? 'bg-tertiary-color' : 'border-2 border-tertiary-color'}`}
                    onClick={() => handleScroll('error-codes')}
                >
                    <h2 className='h4 text-accent-color font-semibold'>Error Codes</h2>
                    <p>Understand error codes and their meanings, along with steps to resolve them.</p>
                </div>
                <div
                    className={`flex flex-col px-8 py-4 rounded-lg cursor-pointer ${activeSection === 'support-resources' ? 'bg-tertiary-color' : 'border-2 border-tertiary-color'}`}
                    onClick={() => handleScroll('support-resources')}
                >
                    <h2 className='h4 text-accent-color font-semibold'>Support Resources</h2>
                    <p>Access additional support resources, including FAQs, forums, and contact information for technical support.</p>
                </div>
            </div>
            <div className='flex flex-col gap-8 md:border-l-2 border-text-color md:pl-10 lg:pl-20 mt-6 md:mt-0'>
                <div id="common-issues" className='flex flex-col gap-1 border-b-[1px] pb-4'>
                    <h2 className='h4 text-accent-color font-semibold'>Connectivity Problems:</h2>
                    <p className='text-text-color text-md '><strong className='italic'>Check Network Settings: </strong>Ensure your devices are properly connected to the network and that network settings are correctly configured.</p>
                    <p className='text-text-color text-md '><strong className='italic'>Update Firmware: </strong>Ensure all devices have the latest firmware updates installed.</p>
                    <p className='text-text-color text-md '><strong className='italic'>Restart Devices: </strong>Sometimes a simple restart can resolve connectivity issues.</p>
                </div>
                <div id="data-discrepancies" className='flex flex-col gap-1 border-b-[1px] pb-4'>
                    <h2 className='h4 text-accent-color font-semibold'>Data Discrepancies:</h2>
                    <p className='text-text-color text-md '><strong className='italic'>Verify Sensor Placement: </strong>Incorrect sensor placement can lead to inaccurate data. Make sure sensors are installed as per the guidelines.</p>
                    <p className='text-text-color text-md '><strong className='italic'>Calibrate Sensors: </strong>Regular calibration of sensors can help maintain data accuracy.</p>
                    <p className='text-text-color text-md '><strong className='italic'>Check Data Streams: </strong>Ensure that data streams are properly configured and there are no disruptions.</p>
                </div>
                <div id="device-malfunctions" className='flex flex-col gap-1 border-b-[1px] pb-4'>
                    <h2 className='h4 text-accent-color font-semibold'>Device Malfunctions:</h2>
                    <p className='text-text-color text-md '><strong className='italic'>Inspect Hardware: </strong>Check for any physical damage to the devices.</p>
                    <p className='text-text-color text-md '><strong className='italic'>Replace Batteries: </strong>Low battery levels can cause devices to malfunction. Replace batteries as needed.</p>
                    <p className='text-text-color text-md '><strong className='italic'>Reset Devices: </strong>If a device is unresponsive, try resetting it to factory settings and reconfigure.</p>
                </div>

                <div id="error-codes" className='flex flex-col gap-1 border-b-[1px] pb-4'>
                    <h2 className='h4 text-accent-color font-semibold'>Error Codes:</h2>
                    <p className='text-text-color text-md '><strong className='italic'>Error Code 101: </strong>Network Unreachable</p>
                    <p className='text-text-color text-md '><strong className='italic'>Solution: </strong>Check the network connection and ensure the device is within range of the router.</p>
                    <p className='text-text-color text-md '><strong className='italic'>Error Code 202: </strong>Sensor Malfunction</p>
                    <p className='text-text-color text-md '><strong className='italic'>Solution: </strong>Inspect the sensor for any physical damage and recalibrate if necessary.</p>
                    <p className='text-text-color text-md '><strong className='italic'>Error Code 303: </strong>Data Sync Failure</p>
                    <p className='text-text-color text-md '><strong className='italic'>Solution: </strong>Verify the data sync settings and ensure the device is connected to the cloud server.</p>
                </div>
                <div id="support-resources" className='flex flex-col gap-1 border-b-[1px] pb-4'>
                    <h2 className='h4 text-accent-color font-semibold'>Support Resources</h2>
                    <p className='text-text-color text-md '><strong className='italic'>FAQs: </strong>Browse through frequently asked questions for quick answers to common problems.</p>
                    <p className='text-text-color text-md '><strong className='italic'>Community Forums: </strong>Engage with other users and share solutions on our community forums.</p>
                    <p className='text-text-color text-md '><strong className='italic'>Contact Support: </strong>If you need further assistance, reach out to our technical support team via email or phone.</p>
                </div>
            </div>
        </div >
    )
}

export default TroubleShootingTips;
