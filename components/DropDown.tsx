// components/DropdownMenu.tsx
import { useState } from 'react';

interface Sublink {
    href: string;
    text: string;
}

interface DropdownMenuProps {
    title: string;
    sublinks: Sublink[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, sublinks }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-500 hover:text-blue-700"
            >
                {title}
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                <li >

                </li>
            </div>
        </div>
    );
};

export default DropdownMenu;
