import React from "react";
import Image from "next/image";
import ServicesData from "../ServicesData";
import { FaQuestion } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceProps {
  params: {
    service: string;
  };
}

const Service: React.FC<ServiceProps> = ({ params }) => {
  const { service } = params;

  const serviceName = ServicesData[service].chineseName;
  const serviceDescription = ServicesData[service].description;
  const imagePath = `/images/services/${service}.png`;
  return (
    <section className="flex flex-col justify-start bg-gradient-to-b from-white to-gray-100 pt-[200px] max-rg_mobile:pt-24">
      <div className="mb-12 flex items-center justify-around max-sm_desktop:flex-col max-sm_desktop:gap-12">
        <div className="relative aspect-square w-[330px] overflow-hidden rounded-2xl max-sm_desktop:rounded-full max-sm_tablet:w-[250px] max-rg_mobile:w-[200px]">
          <Image
            src={imagePath}
            alt={service}
            fill={true}
            style={{
              objectFit: "cover",
            }}
            priority={true}
          />
        </div>

        <div className="dialog w-[600px] rounded-3xl px-10 py-8 max-sm_desktop:w-auto">
          <h1>{serviceName}</h1>
          <p>{serviceDescription}</p>
        </div>
      </div>

      <div className="pb-12">
        <h1 className="mb-12 flex items-center justify-center">
          問與答
          <FaQuestion className="text-red-500" />
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base">
              牙齒美白安全嗎?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              是的，我們使用的是FDA認證的產品
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base">
              牙齒美白花費需要多少?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              一次治療約$5000
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base">
              治療週期需要多久?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              1年，每個月需要來一次
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base">
              小孩子適合治療嗎?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              可以，但是需要家長陪同
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-base">
              治療期間可以吃麥當勞嗎?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              可以，但是薯條需要加大
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Service;
