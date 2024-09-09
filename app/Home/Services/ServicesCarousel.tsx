"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import service_1 from "@/public/images/services/service_1.png";
import service_2 from "@/public/images/services/service_2.png";
import service_3 from "@/public/images/services/service_3.png";
import service_4 from "@/public/images/services/service_4.png";
import service_5 from "@/public/images/services/service_5.png";
import service_6 from "@/public/images/services/service_6.png";
import service_7 from "@/public/images/services/service_7.png";
import service_8 from "@/public/images/services/service_8.png";
import service_9 from "@/public/images/services/service_9.png";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const ServicesCarousel: React.FC = () => {
    return (
        <>
            <Carousel
                className="w-full h-full flex flex-col justify-center"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent className="">
                    <CarouselItem className="basis-1/4 h-full ">
                        <div className="">
                            <Card className="rounded-[50px]">
                                <CardContent className="p-0 rounded-[50px] overflow-hidden flex flex-col aspect-square items-center justify-start ">
                                    <Image
                                        src={service_1}
                                        alt="service_1"
                                        objectFit="cover"
                                        objectPosition="center"
                                        placeholder="blur"
                                        className=" mb-4"
                                    />
                                    <p>牙齒矯正</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/4 h-full">
                        <div className="">
                            <Card className="rounded-[50px]">
                                <CardContent className="p-0 rounded-[50px] overflow-hidden flex flex-col aspect-square items-center justify-start ">
                                    <Image
                                        src={service_2}
                                        alt="service_1"
                                        objectFit="cover"
                                        objectPosition="center"
                                        placeholder="blur"
                                        className=" mb-4"
                                    />
                                    <p>牙齒修護</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/4 h-full">
                        <div className="">
                            <Card className="rounded-[50px]">
                                <CardContent className="p-0 rounded-[50px] overflow-hidden flex flex-col aspect-square items-center justify-start ">
                                    <Image
                                        src={service_3}
                                        alt="service_1"
                                        objectFit="cover"
                                        objectPosition="center"
                                        placeholder="blur"
                                        className=" mb-4"
                                    />
                                    <p>牙齒矯正</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/4 h-full">
                        <div className="">
                            <Card className="rounded-[50px]">
                                <CardContent className="p-0 rounded-[50px] overflow-hidden flex flex-col aspect-square items-center justify-start ">
                                    <Image
                                        src={service_4}
                                        alt="service_1"
                                        objectFit="cover"
                                        objectPosition="center"
                                        placeholder="blur"
                                        className=" mb-4"
                                    />
                                    <p>全植牙</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/4 h-full">
                        <div className="">
                            <Card className="rounded-[50px]">
                                <CardContent className="p-0 rounded-[50px] overflow-hidden flex flex-col aspect-square items-center justify-start ">
                                    <Image
                                        src={service_5}
                                        alt="service_1"
                                        objectFit="cover"
                                        objectPosition="center"
                                        placeholder="blur"
                                        className=" mb-4"
                                    />
                                    <p>全瓷冠</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/4 h-full">
                        <div className="">
                            <Card className="rounded-[50px]">
                                <CardContent className="p-0 rounded-[50px] overflow-hidden flex flex-col aspect-square items-center justify-start ">
                                    <Image
                                        src={service_6}
                                        alt="service_1"
                                        objectFit="cover"
                                        objectPosition="center"
                                        placeholder="blur"
                                        className=" mb-4"
                                    />
                                    <p>牙齒美白</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/4 h-full">
                        <div className="">
                            <Card className="rounded-[50px]">
                                <CardContent className="p-0 rounded-[50px] overflow-hidden flex flex-col aspect-square items-center justify-start ">
                                    <Image
                                        src={service_7}
                                        alt="service_1"
                                        objectFit="cover"
                                        objectPosition="center"
                                        placeholder="blur"
                                        className=" mb-4"
                                    />
                                    <p>兒童牙科</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/4 h-full">
                        <div className="">
                            <Card className="rounded-[50px]">
                                <CardContent className="p-0 rounded-[50px] overflow-hidden flex flex-col aspect-square items-center justify-start ">
                                    <Image
                                        src={service_8}
                                        alt="service_1"
                                        objectFit="cover"
                                        objectPosition="center"
                                        placeholder="blur"
                                        className=" mb-4"
                                    />
                                    <p>家庭牙醫</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/4 h-full">
                        <div className="">
                            <Card className="rounded-[50px]">
                                <CardContent className="p-0 rounded-[50px] overflow-hidden flex flex-col aspect-square items-center justify-start ">
                                    <Image
                                        src={service_9}
                                        alt="service_1"
                                        objectFit="cover"
                                        objectPosition="center"
                                        placeholder="blur"
                                        className=" mb-4"
                                    />
                                    <p>3D齒雕</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
};

export default ServicesCarousel;
