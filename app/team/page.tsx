import React from "react";
import Image from "next/image";
import banner from "@/public/images/logo/banner_1.png";
import type { Metadata } from "next";
import Link from "next/link";
import "./team.css";

import doctor_0 from "@/public/images/dentist/johnny.png";
import popo from "@/public/images/dentist/tom.png";
import doctor_2 from "@/public/images/dentist/david.png";
import doctor_3 from "@/public/images/dentist/jerry.png";
import doctor_4 from "@/public/images/dentist/linda.png";
import doctor_5 from "@/public/images/dentist/mary.png";
import doctor_6 from "@/public/images/dentist/jennifer.png";

export const metadata: Metadata = {
  title: "醫療團隊",
  description: "",
};

const Team: React.FC = () => {
  return (
    <section className="pb-8">
      <div className="banner__container absolute left-0 h-40 w-full overflow-hidden">
        <Image
          src={banner}
          alt="banner"
          fill={true}
          style={{ objectFit: "cover" }}
          objectPosition="0 -10px"
          priority={true}
          placeholder="blur"
        />
      </div>

      <h1 className="mb-8 pt-44">團隊成員</h1>
      <div className="members__container">
        <Link
          href="/team/johnny"
          className="main__dentist relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={doctor_0} alt="doctor_0" />
          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">林昌言 院長</h1>
          </div>
        </Link>

        <Link
          href="/team/mary"
          className="relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={popo} alt="popo" />

          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">江逆鱗 醫師</h1>
          </div>
        </Link>

        <Link
          href="/team/tom"
          className="relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={doctor_2} alt="popo" />
          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">林強尼 醫師</h1>
          </div>
        </Link>

        <Link
          href="/team/jerry"
          className="relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={doctor_3} alt="popo" />
          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">林安海 醫師</h1>
          </div>
        </Link>

        <Link
          href="/team/linda"
          className="relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={doctor_4} alt="popo" />
          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">林波波 醫師</h1>
          </div>
        </Link>

        <Link
          href="/team/david"
          className="relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={doctor_5} alt="popo" />
          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">林波奇 醫師</h1>
          </div>
        </Link>

        <Link
          href="/team/jennifer"
          className="relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={doctor_6} alt="popo" />
          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">林森林 醫師</h1>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Team;
