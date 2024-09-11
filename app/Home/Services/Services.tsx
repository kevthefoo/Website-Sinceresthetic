import React from "react";
import ServicesCarousel from "./ServicesCarousel";
const Services: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-start bg-gradient-to-t from-white to-gray-100"
      id="services"
    >
      <h1>全方位醫療項目</h1>
      <ServicesCarousel />
    </section>
  );
};

export default Services;
