import React from "react";
import Image from "next/image";
import ServicesData from "../ServicesData";

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
        <section className="flex flex-col justify-center  bg-gradient-to-b from-white to-gray-100">
            <div className="flex justify-around items-center">
                <Image
                    src={imagePath}
                    alt={service}
                    width={400}
                    height={400}
                    priority={true}
                    className="rounded-2xl"
                />

                <div className="w-[600px] dialog px-10 py-8 rounded-3xl">
                    <h1>{serviceName}</h1>
                    <p>{serviceDescription}</p>
                </div>
            </div>
        </section>
    );
};

export default Service;
