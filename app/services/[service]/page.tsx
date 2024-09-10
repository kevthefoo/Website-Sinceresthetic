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
            <h1>{serviceName}</h1>
            <div className="">
                <div>
                    <Image
                        src={imagePath}
                        alt={service}
                        width={300}
                        height={300}
                        priority={true}
                    />
                </div>
                <div>
                    <h2>{serviceName}</h2>
                    <p>{serviceDescription}</p>
                </div>
            </div>
        </section>
    );
};

export default Service;
