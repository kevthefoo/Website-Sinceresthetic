import React from "react";
import Image from "next/image";
import banner from "@/public/images/banner/banner_1.png";
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
  title: "澄臻美學牙醫診所 | 診療項目",
  description:
    "澄臻美學牙醫診所 | 澄臻美學牙醫診所提供多元化的口腔護理服務，包括全家人的牙齒保健、兒童牙科、牙齒美白、根管治療、瓷冠、牙科植體等，讓您擁有健康美麗的微笑。",
};

const Services: React.FC = () => {
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

      <h1 className="mb-8 pt-44">診療項目</h1>
      <div className="vgrid-cols-1 grid grid-flow-row auto-rows-[minmax(0,_1fr)] grid-cols-3 grid-rows-2 gap-4 max-rg_tablet:grid-cols-2">
        <Link
          href="/services/dental_implant"
          className="member__card cursor-pointer overflow-hidden rounded-2xl"
        >
          <div className="relative">
            <Image
              src={ceramic_crown}
              alt="澄臻美學牙醫診所 | 全植牙"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={true}
              placeholder="blur"
              className="flash-effect"
            />
            <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
              <h1 className="translate-y-1 text-white max-lg_mobile:translate-y-3">
                全植牙
              </h1>
            </div>
          </div>
        </Link>

        <Link
          href="/services/teeth_whitening"
          className="member__card cursor-pointer overflow-hidden rounded-2xl"
        >
          <div className="relative">
            <Image
              src={teeth_whitening}
              alt="澄臻美學牙醫診所 | 牙齒美白"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={true}
              placeholder="blur"
              className="flash-effect"
            />
            <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
              <h1 className="translate-y-1 text-white max-lg_mobile:translate-y-3">
                牙齒美白
              </h1>
            </div>
          </div>
        </Link>

        <Link
          href="/services/ceramic_crown"
          className="member__card cursor-pointer overflow-hidden rounded-2xl"
        >
          <div className="relative">
            <Image
              src={root_canal_treatment}
              alt="澄臻美學牙醫診所 | 全瓷冠"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={true}
              placeholder="blur"
              className="flash-effect"
            />
            <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
              <h1 className="translate-y-1 text-white max-lg_mobile:translate-y-3">
                全瓷冠
              </h1>
            </div>
          </div>
        </Link>

        <Link
          href="/services/family_dentist"
          className="member__card cursor-pointer overflow-hidden rounded-2xl"
        >
          <div className="relative">
            <Image
              src={family_dentist}
              alt="澄臻美學牙醫診所 | 家庭牙醫"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={true}
              placeholder="blur"
              className="flash-effect"
            />
            <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
              <h1 className="translate-y-1 text-white max-lg_mobile:translate-y-3">
                家庭牙醫
              </h1>
            </div>
          </div>
        </Link>

        <Link
          href="/services/root_canal_treatment"
          className="member__card cursor-pointer overflow-hidden rounded-2xl"
        >
          <div className="relative">
            <Image
              src={dental_implant}
              alt="澄臻美學牙醫診所 | 顯微根管治療"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={true}
              placeholder="blur"
              className="flash-effect"
            />
            <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
              <h1 className="translate-y-1 text-white max-lg_mobile:translate-y-3">
                顯微根管治療
              </h1>
            </div>
          </div>
        </Link>

        <Link
          href="/services/children_dentist"
          className="member__card cursor-pointer overflow-hidden rounded-2xl"
        >
          <div className="relative">
            <Image
              src={children_dentist}
              alt="澄臻美學牙醫診所 | 兒童牙醫"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={true}
              placeholder="blur"
              className="flash-effect"
            />
            <div className="absolute bottom-0 h-12 w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.65)]">
              <h1 className="translate-y-1 text-white max-lg_mobile:translate-y-3">
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
