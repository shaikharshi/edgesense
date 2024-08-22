import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage
} from "@/components/ui/breadcrumb";

interface BreadcrumbItemType {
    label: string;
    href?: string;
}

interface BreadCrumbProps {
    items: BreadcrumbItemType[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
    return (
        <Breadcrumb className='flex text-center justify-center mb-4'>
            <BreadcrumbList>
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem>
                            {item.href ? (
                                <BreadcrumbLink className='text-white hover:text-white' href={item.href}>{item.label}</BreadcrumbLink>
                            ) : (
                                <BreadcrumbPage className='text-white hover:text-white font-semibold cursor-pointer'>{item.label}</BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                        {index < items.length - 1 && <BreadcrumbSeparator className='text-white font-semibold' />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BreadCrumb;
