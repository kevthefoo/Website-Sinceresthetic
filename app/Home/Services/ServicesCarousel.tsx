"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import ceramic_crown from "@/public/images/services/ceramic_crown.png";
import children_dentist from "@/public/images/services/children_dentist.png";
import dental_implant from "@/public/images/services/dental_implant.png";
// import family_dentist from "@/public/images/services/family_dentist.png";
import root_canal_treatment from "@/public/images/services/root_canal_treatment.png";
import teeth_whitening from "@/public/images/services/teeth_whitening.png";

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
                                        src={ceramic_crown}
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
                                        src={root_canal_treatment}
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
                                        src={dental_implant}
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
                                        src={dental_implant}
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
                                        src={root_canal_treatment}
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
                                        src={children_dentist}
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
                                        src={teeth_whitening}
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
                                        src={teeth_whitening}
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
                                        src={teeth_whitening}
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
