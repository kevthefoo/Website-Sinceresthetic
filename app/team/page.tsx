import React from "react";
import Image from "next/image";
import banner from "@/public/images/logo/banner_4.png";
import type { Metadata } from "next";

import "./team.css";

import doctor_0 from "@/public/images/doctor/doctor_0.png";
import doctor_1 from "@/public/images/doctor/doctor_1.png";
import doctor_2 from "@/public/images/doctor/doctor_2.png";
import doctor_3 from "@/public/images/doctor/doctor_3.png";
import doctor_4 from "@/public/images/doctor/doctor_4.png";
import doctor_5 from "@/public/images/doctor/doctor_5.png";
import doctor_6 from "@/public/images/doctor/doctor_6.png";

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
                    objectPosition="0 -275px"
                    priority={true}
                    placeholder="blur"
                />
            </div>

            <h1 className="pt-44 mb-8">團隊成員</h1>
            <div className="members__container">
                <div className="hover:scale-105 cursor-pointer overflow-hidden border-2 border-black main__dentist flex flex-col">
                    <Image src={doctor_0} alt="doctor_0" />
                    {/* <div className="text-center">林昌言 院長</div>
                    <div className="text-center">查看資訊</div> */}
                </div>
                <div className="hover:scale-105 cursor-pointer overflow-hidden border-2 border-black flex flex-col">
                    <Image src={doctor_1} alt="doctor_1" />
                </div>
                <div className="hover:scale-105 cursor-pointer overflow-hidden border-2 border-black flex flex-col">
                    <Image src={doctor_2} alt="doctor_1" />
                </div>
                <div className="hover:scale-105 cursor-pointer overflow-hidden border-2 border-black flex flex-col">
                    <Image src={doctor_3} alt="doctor_1" />
                </div>
                <div className="hover:scale-105 cursor-pointer overflow-hidden border-2 border-black flex flex-col">
                    <Image src={doctor_4} alt="doctor_1" />
                </div>
                <div className="hover:scale-105 cursor-pointer overflow-hidden border-2 border-black flex flex-col">
                    <Image src={doctor_5} alt="doctor_1" />
                </div>
                <div className="hover:scale-105 cursor-pointer overflow-hidden border-2 border-black flex flex-col">
                    <Image src={doctor_6} alt="doctor_1" />
                </div>
            </div>
        </section>
    );
};

export default Team;
