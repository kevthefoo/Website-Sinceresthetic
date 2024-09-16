import React from "react";
import Image from "next/image";
import Link from "next/link";
import smiling_girl from "@/public/images/appointment/appointment_image_0.webp";
import Reveal from "@/app/Components/Reveal/Reveal";

const Introduction: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 pb-8"
      id="introduction"
    >
      <h1 className="text-gray-800">微笑的藝術</h1>
      <div className="relative mb-8 h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-slate-300 shadow-lg max-rg_mobile:h-[150px] max-rg_mobile:w-[150px]">
        <Image
          src={smiling_girl}
          alt="澄臻美學牙醫診所 | 微笑的藝術"
          fill={true}
          className=""
        />
      </div>

      <Reveal>
        <div className="dialog flex w-full max-w-lg flex-col items-center justify-center rounded-3xl bg-white px-8 py-8 shadow-xl">
          <h1 className="mb-4 text-center font-medium text-gray-700">
            動人笑容，源於齒間散發的自信
          </h1>

          <p className="mb-4 text-center text-gray-600">
            微笑的魅力如同一幅藝術傑作，笑容設計更被視為藝術創作的絕佳體現。
            我們致力於追求完美的美學設計工藝，為你打造一個迷人且獨一無二的笑容。
          </p>
          <Link
            href="https://page.line.me/920oaogn?openQrModal=true"
            target="_blank"
            className="rounded-[50px] border-2 border-[var(--main-theme)] px-6 py-3 transition-colors duration-300 hover:bg-[var(--main-theme)] hover:text-white max-rg_mobile:px-4 max-rg_mobile:py-2"
          >
            立即預約
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default Introduction;
