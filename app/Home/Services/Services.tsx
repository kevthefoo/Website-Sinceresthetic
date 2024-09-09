import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const Services: React.FC = () => {
    return (
        <section
            className="flex flex-col justify-start items-center"
            id="services"
        >
            <h1>全方位醫療項目</h1>
            {/* <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
            </Carousel> */}
        </section>
    );
};

export default Services;
