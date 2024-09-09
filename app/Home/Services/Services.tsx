import React from "react";
import ServicesCarousel from "./ServicesCarousel";
const Services: React.FC = () => {
    return (
        <section
            className="relative flex flex-col justify-start items-center h-screen"
            id="services"
        >
            <h1>全方位醫療項目</h1>
            <ServicesCarousel />
        </section>
    );
};

export default Services;
