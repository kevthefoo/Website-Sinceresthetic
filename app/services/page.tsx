import React from "react";
import Image from "next/image";
import banner from "@/public/images/logo/banner_5.png";
import type { Metadata } from "next";

import Link from "next/link";

import "./services.css";

import ceramic_crown from "@/public/images/services/ceramic_crown.png";
import children_dentist from "@/public/images/services/children_dentist.png";
import dental_implant from "@/public/images/services/dental_implant.png";
import family_dentist from "@/public/images/services/family_dentist.png";
import root_canal_treatment from "@/public/images/services/root_canal_treatment.png";
import teeth_whitening from "@/public/images/services/teeth_whitening.png";

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
                <Link
                    href="/services/dental_implant"
                    className="cursor-pointer rounded-2xl  overflow-hidden"
                >
                    <div className="relative">
                        <Image
                            src={ceramic_crown}
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

                <Link
                    href="/services/teeth_whitening"
                    className="cursor-pointer rounded-2xl  overflow-hidden"
                >
                    <div className="relative">
                        <Image
                            src={teeth_whitening}
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

                <Link
                    href="/services/ceramic_crown"
                    className="cursor-pointer rounded-2xl  overflow-hidden"
                >
                    <div className="relative">
                        <Image
                            src={root_canal_treatment}
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

                <Link
                    href="/services/family_dentist"
                    className="cursor-pointer rounded-2xl  overflow-hidden"
                >
                    <div className="relative">
                        <Image
                            src={family_dentist}
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

                <Link
                    href="/services/root_canal_treatment"
                    className="cursor-pointer rounded-2xl  overflow-hidden"
                >
                    <div className="relative">
                        <Image
                            src={dental_implant}
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

                <Link
                    href="/services/children_dentist"
                    className="cursor-pointer rounded-2xl  overflow-hidden"
                >
                    <div className="relative">
                        <Image
                            src={children_dentist}
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
