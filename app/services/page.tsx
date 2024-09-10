import React from "react";
import Image from "next/image";
import banner from "@/public/images/logo/banner_5.png";
import type { Metadata } from "next";

import Link from "next/link";

import "./services.css";

import service_1 from "@/public/images/services/service_1.png";
import service_2 from "@/public/images/services/service_2.png";
import service_3 from "@/public/images/services/service_3.png";
import service_4 from "@/public/images/services/service_4.png";
import service_5 from "@/public/images/services/service_5.png";
import service_6 from "@/public/images/services/service_6.png";

export const metadata: Metadata = {
    title: "診療項目",
    description: "",
};

const Services: React.FC = () => {
    return (
        <section className="pb-8">
            <div className="banner__container absolute w-full overflow-hidden left-0 h-40">
                <Image
                    src={banner}
                    alt="banner"
                    fill={true}
                    objectFit="cover"
                    objectPosition="0 -10px"
                    priority={true}
                    placeholder="blur"
                />
            </div>

            <h1 className="pt-44 mb-8">診療項目</h1>
            <div className="grid grid-cols-3 grid-flow-row grid-rows-2 auto-rows-[100px_100px] gap-4">
                <Link href="/services/flash" className="cursor-pointer rounded-2xl  overflow-hidden">
                    <div className="relative">
                        <Image
                            src={service_1}
                            alt="service_1"
                            objectFit="cover"
                            objectPosition="center"
                            priority={true}
                            placeholder="blur"
                            className="flash-effect"
                        />
                        <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                            <h1 className="text-white translate-y-1">全植牙</h1>
                        </div>
                    </div>
                </Link>

                <Link href="/services/flash" className="cursor-pointer rounded-2xl  overflow-hidden">
                    <div className="relative">
                        <Image
                            src={service_2}
                            alt="service_3"
                            objectFit="cover"
                            objectPosition="center"
                            priority={true}
                            placeholder="blur"
                            className="flash-effect"
                        />
                        <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                            <h1 className="text-white translate-y-1">
                                牙齒美白
                            </h1>
                        </div>
                    </div>
                </Link>

                <Link href="/services/flash" className="cursor-pointer rounded-2xl  overflow-hidden">
                    <div className="relative">
                        <Image
                            src={service_3}
                            alt="service_4"
                            objectFit="cover"
                            objectPosition="center"
                            priority={true}
                            placeholder="blur"
                            className="flash-effect"
                        />
                        <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                            <h1 className="text-white translate-y-1">全瓷冠</h1>
                        </div>
                    </div>
                </Link>

                <Link href="/services/flash" className="cursor-pointer rounded-2xl  overflow-hidden">
                    <div className="relative">
                        <Image
                            src={service_4}
                            alt="service_5"
                            objectFit="cover"
                            objectPosition="center"
                            priority={true}
                            placeholder="blur"
                            className="flash-effect"
                        />
                        <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                            <h1 className="text-white translate-y-1">
                                家庭牙醫
                            </h1>
                        </div>
                    </div>
                </Link>

                <Link href="/services/flash" className="cursor-pointer rounded-2xl  overflow-hidden">
                    <div className="relative">
                        <Image
                            src={service_5}
                            alt="service_5"
                            objectFit="cover"
                            objectPosition="center"
                            priority={true}
                            placeholder="blur"
                            className="flash-effect"
                        />
                        <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                            <h1 className="text-white translate-y-1">
                                顯微根管治療
                            </h1>
                        </div>
                    </div>
                </Link>

                <Link href="/services/flash" className="cursor-pointer rounded-2xl  overflow-hidden">
                    <div className="relative">
                        <Image
                            src={service_6}
                            alt="service_6"
                            objectFit="cover"
                            objectPosition="center"
                            priority={true}
                            placeholder="blur"
                            className="flash-effect"
                        />
                        <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                            <h1 className="text-white translate-y-1">
                                兒童牙醫
                            </h1>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Services;
