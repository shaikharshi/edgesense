import React from 'react';
import { Button } from '@/components/ui/button';

interface RequestDemoButtonProps {
    className?: string;
}

const RequestDemoButton: React.FC<RequestDemoButtonProps> = ({ className }) => {
    return (
        <Button className={className}>Request Demo</Button>
    );
};

export default RequestDemoButton;
