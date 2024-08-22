import React from 'react'
import SolutionsCard from '../Solutions/SolutionsCard'

const RelatedBlogs = () => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <SolutionsCard imageSrc={'/ambient-monitoring.png'} altText={'Maximizing Efficiency with Predictive Maintenance'} title={'Maximizing Efficiency with Predictive Maintenance'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
            <SolutionsCard imageSrc={'/ambient-monitoring.png'} altText={'Sustainable Industrial Practices through IoT'} title={'Sustainable Industrial Practices through IoT'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
            <SolutionsCard imageSrc={'/ambient-monitoring.png'} altText={'Digital Transformation in Manufacturing: The Role of IoT'} title={'Digital Transformation in Manufacturing: The Role of IoT'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
        </div>
    )
}

export default RelatedBlogs