import React from "react";
import Image from "next/image";
import banner from "@/public/images/banner/banner_1.png";
import type { Metadata } from "next";
import Link from "next/link";
import "./team.css";

import dentist_0 from "@/public/images/dentist/johnny.png";
import popo from "@/public/images/dentist/tom.png";
import dentist_2 from "@/public/images/dentist/david.png";
import dentist_3 from "@/public/images/dentist/jerry.png";
import dentist_4 from "@/public/images/dentist/linda.png";
import dentist_5 from "@/public/images/dentist/mary.png";
import dentist_6 from "@/public/images/dentist/jennifer.png";

export const metadata: Metadata = {
  title: "澄臻美學牙醫診所 | 醫療團隊",
  description:
    "澄臻美學牙醫診所 | 澄臻美學牙醫診所擁有一支專業的醫療團隊，包括、牙醫師、牙助等，致力於為每一位患者提供最優質的口腔護理服務。",
};

const Team: React.FC = () => {
  return (
    <section className="pb-8">
      <div className="banner__container absolute left-0 h-40 w-full overflow-hidden">
        <Image
          src={banner}
          alt="澄臻美學牙醫診所 | Banner"
          fill={true}
          style={{ objectFit: "cover", objectPosition: "0 -10px" }}
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
          <Image src={dentist_0} alt="澄臻美學牙醫診所 | 林昌言院長" />
          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">林昌言 院長</h1>
          </div>
        </Link>

        <Link
          href="/team/mary"
          className="relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={popo} alt="澄臻美學牙醫診所 | 江逆鱗醫師" />

          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">江逆鱗 醫師</h1>
          </div>
        </Link>

        <Link
          href="/team/tom"
          className="relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={dentist_2} alt="澄臻美學牙醫診所 | 林強尼醫師" />
          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">林強尼 醫師</h1>
          </div>
        </Link>

        <Link
          href="/team/jerry"
          className="relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={dentist_3} alt="澄臻美學牙醫診所 | 林安海醫師" />
          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">林安海 醫師</h1>
          </div>
        </Link>

        <Link
          href="/team/linda"
          className="relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={dentist_4} alt="澄臻美學牙醫診所 | 林波波醫師" />
          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">林波波 醫師</h1>
          </div>
        </Link>

        <Link
          href="/team/david"
          className="relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={dentist_5} alt="澄臻美學牙醫診所 | 林波奇醫師" />
          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">林波奇 醫師</h1>
          </div>
        </Link>

        <Link
          href="/team/jennifer"
          className="relative flex cursor-pointer flex-col overflow-hidden border-2 border-black hover:z-10 hover:scale-105"
        >
          <Image src={dentist_6} alt="澄臻美學牙醫診所 | 林森林醫師" />
          <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
            <h1 className="translate-y-[50%] text-white">林森林 醫師</h1>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Team;
