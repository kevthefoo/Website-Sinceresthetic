import React from "react";
import Image from "next/image";
import banner from "@/public/images/logo/banner_5.png";
import type { Metadata } from "next";
import Link from "next/link";
import "./team.css";

import doctor_0 from "@/public/images/doctor/johnny.png";
import doctor_1 from "@/public/images/doctor/tom.png";
import doctor_2 from "@/public/images/doctor/david.png";
import doctor_3 from "@/public/images/doctor/jerry.png";
import doctor_4 from "@/public/images/doctor/linda.png";
import doctor_5 from "@/public/images/doctor/mary.png";
import doctor_6 from "@/public/images/doctor/jennifer.png";

export const metadata: Metadata = {
    title: "醫療團隊",
    description: "",
};

const Team: React.FC = () => {
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

            <h1 className="pt-44 mb-8">團隊成員</h1>
            <div className="members__container">
                <Link
                    href="/team/johnny"
                    className="relative hover:scale-105 hover:z-10 cursor-pointer overflow-hidden border-2 border-black main__dentist flex flex-col"
                >
                    <Image src={doctor_0} alt="doctor_0" />
                    <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                        <h1 className="text-white translate-y-1">
                            林昌言 院長
                        </h1>
                    </div>
                </Link>

                <Link
                    href="/team/mary"
                    className="relative hover:scale-105 hover:z-10 cursor-pointer overflow-hidden border-2 border-black flex flex-col"
                >
                    <Image src={doctor_1} alt="doctor_1" />

                    <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                        <h1 className="text-white translate-y-1">
                            江逆鱗 醫師
                        </h1>
                    </div>
                </Link>

                <Link
                    href="/team/tom"
                    className="relative hover:scale-105 hover:z-10 cursor-pointer overflow-hidden border-2 border-black flex flex-col"
                >
                    <Image src={doctor_2} alt="doctor_1" />
                    <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                        <h1 className="text-white translate-y-1">
                            林強尼 醫師
                        </h1>
                    </div>
                </Link>

                <Link
                    href="/team/jerry"
                    className="relative hover:scale-105 hover:z-10 cursor-pointer overflow-hidden border-2 border-black flex flex-col"
                >
                    <Image src={doctor_3} alt="doctor_1" />
                    <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                        <h1 className="text-white translate-y-1">
                            林安海 醫師
                        </h1>
                    </div>
                </Link>

                <Link
                    href="/team/linda"
                    className="relative hover:scale-105 hover:z-10 cursor-pointer overflow-hidden border-2 border-black flex flex-col"
                >
                    <Image src={doctor_4} alt="doctor_1" />
                    <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                        <h1 className="text-white translate-y-1">
                            林波波 醫師
                        </h1>
                    </div>
                </Link>

                <Link
                    href="/team/david"
                    className="relative hover:scale-105 hover:z-10 cursor-pointer overflow-hidden border-2 border-black flex flex-col"
                >
                    <Image src={doctor_5} alt="doctor_1" />
                    <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                        <h1 className="text-white translate-y-1">
                            林波奇 醫師
                        </h1>
                    </div>
                </Link>

                <Link
                    href="/team/jennifer"
                    className="relative hover:scale-105 hover:z-10 cursor-pointer overflow-hidden border-2 border-black flex flex-col"
                >
                    <Image src={doctor_6} alt="doctor_1" />
                    <div className="absolute w-full h-12 bg-[rgba(0,0,0,0.65)] bottom-0 flex-col  justify-center items-center">
                        <h1 className="text-white translate-y-1">
                            林森林 醫師
                        </h1>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Team;
