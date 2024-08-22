import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

type CustomListProps = {
  items: string[];
};

const CustomList: React.FC<CustomListProps> = ({ items }) => {
  return (
    <ul className="list-none pl-0 mt-6">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2 mb-2 ">
          <FaRegDotCircle className="text-accent-color mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const IotGateway: React.FC = () => {
  const listItemsModbus2G = [
    "Variants - ST-50, ST-51",
    "Digital Input - Modbus RS 485",
    "Analog Inputs - 1x 4-20mA, 2x 0-24V",
    "Connects Multiple Slaves",
    "Communication - 2G, TCP / MQTT",
    "Local Storage for Backup",
    "Operating Voltage - 12V - 24V DC",
    "FOTA"
  ];

  const listItemsModbus4G = [
    "Variants - ST-60, ST-61",
    "Digital Input - Modbus RS 485",
    "Analog Inputs - 2x 4-20mA, 3x 0-24V",
    "Connects Multiple Slaves",
    "Communication - 4G, TCP / MQTT",
    "Local Storage for Backup",
    "Operating Voltage - 12V - 24V DC",
    "FOTA"
  ];

  const listItemsModbusEthernet = [
    "Variants - ST-70, ST-71",
    "Digital Input - Modbus RS 485",
    "Analog Inputs - 3x 4-20mA, 4x 0-24V",
    "Connects Multiple Slaves",
    "Communication - Ethernet, TCP / MQTT",
    "Local Storage for Backup",
    "Operating Voltage - 12V - 24V DC",
    "FOTA"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="Modbus 2G">
        <div className="flex justify-center mb-8">
          <TabsList className="flex gap-4">
            <TabsTrigger
              className="text-accent-color p-3 text-md rounded-md transition-all duration-300 ease-in-out hover:bg-accent-color hover:text-white"
              value="Modbus 2G"
            >
              Modbus 2G
            </TabsTrigger>
            <TabsTrigger
              className="text-accent-color p-3 text-md rounded-md transition-all duration-300 ease-in-out hover:bg-accent-color hover:text-white"
              value="Modbus 4G"
            >
              Modbus 4G
            </TabsTrigger>
            <TabsTrigger
              className="text-accent-color p-3 text-md rounded-md transition-all duration-300 ease-in-out hover:bg-accent-color hover:text-white"
              value="Modbus Ethernet"
            >
              Modbus Ethernet
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="Modbus 2G">
          <div className="flex flex-col-reverse md:flex-row gap-10 justify-center lg:gap-24">
            <div className="text-center sm:text-left">
              <h2 className="text-accent-color font-semibold text-2xl mb-4">Modbus 2G IoT Gateway</h2>
              <CustomList items={listItemsModbus2G} />
              <Link href="#" className="bg-accent-color border-[1px] border-transparent text-white rounded-2xl px-4 py-2 mt-4 inline-block hover:bg-white hover:text-accent-color hover:border-[1px] hover:border-accent-color">Download Datasheet</Link>
            </div>
            <Image
              className="mt-8"
              src="/modbus-2g.png"
              alt="Modbus 2G IoT Gateway"
              width={450}
              height={450}
            />
          </div>
        </TabsContent>
        <TabsContent value="Modbus 4G">
          <div className="flex flex-col-reverse md:flex-row gap-10 justify-center lg:gap-24">
            <div className="text-center sm:text-left">
              <h2 className="text-accent-color font-semibold text-2xl mb-4">Modbus 4G IoT Gateway</h2>
              <CustomList items={listItemsModbus4G} />
              <Link href="#" className="bg-accent-color border-[1px] border-transparent text-white rounded-2xl px-4 py-2 mt-4 inline-block hover:bg-white hover:text-accent-color hover:border-[1px] hover:border-accent-color">Download Datasheet</Link>
            </div>
            <Image
              className="mt-8"
              src="/smart-gateway.png"
              alt="Modbus 4G IoT Gateway"
              width={450}
              height={450}
            />
          </div>
        </TabsContent>
        <TabsContent value="Modbus Ethernet">
          <div className="flex flex-col-reverse md:flex-row gap-10 justify-center lg:gap-24">
            <div className="text-center sm:text-left">
              <h2 className="text-accent-color font-semibold text-2xl mb-4">Modbus Ethernet</h2>
              <CustomList items={listItemsModbusEthernet} />
              <Link href="#" className="bg-accent-color border-[1px] border-transparent text-white rounded-2xl px-4 py-2 mt-4 inline-block hover:bg-white hover:text-accent-color hover:border-[1px] hover:border-accent-color">Download Datasheet</Link>
            </div>
            <Image
              className="mt-8"
              src="/smart-gateway.png"
              alt="Modbus Ethernet Gateway"
              width={450}
              height={450}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IotGateway;
