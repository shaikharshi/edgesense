import React from 'react'

const ResultCaseStudy = () => {
    return (
        <div className='container flex flex-col gap-5'>
            <h2 className='text-accent-color font-semibold text-center h2'>Result</h2>
            <div className="flex flex-col  sm:grid sm:grid-cols-[1fr_1.3fr_3fr] sm:gap-12 lg:grid-cols-[1fr_2fr_3fr] lg:gap-40 items-center  border-2 border-tertiary-color p-6 rounded-lg">
                <h3 className='h1 font-semibold text-accent-color'>20%</h3>
                <p className='h4 text-accent-color font-semibold text-center'>Boost in Operational Efficiency</p>
                <p className='text-text-color text-lg text-center'>Real-time monitoring and analytics helped L&T cut down on energy and water usage, improving overall efficiency.</p>
            </div>
            <div className="flex flex-col  sm:grid sm:grid-cols-[1fr_1.3fr_3fr] sm:gap-12 lg:grid-cols-[1fr_2fr_3fr] lg:gap-40 items-center  border-2 border-tertiary-color p-6 rounded-lg">
                <h3 className='h1 font-semibold text-accent-color'>15%</h3>
                <p className='h4 text-accent-color font-semibold text-center'>Reduction in Downtime</p>
                <p className='text-text-color text-lg text-center'>Predictive maintenance alerts from EdgeVision minimized unexpected equipment failures, increasing equipment uptime.</p>
            </div>
            <div className="flex flex-col  sm:grid sm:grid-cols-[1fr_1.3fr_3fr] sm:gap-12 lg:grid-cols-[1fr_2fr_3fr] lg:gap-40 items-center  border-2 border-tertiary-color p-6 rounded-lg">
                <h3 className='h1 font-semibold text-accent-color'>10%</h3>
                <p className='h4 text-accent-color font-semibold text-center'>Enhanced Decision-Making</p>
                <p className='text-text-color text-lg text-center'>Customizable IoT dashboards gave L&T actionable insights, improving decision-making and operational planning.</p>
            </div>
        </div>
    )
}

export default ResultCaseStudy
