import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import banner from "@/public/images/banner/banner_1.png";
import reception from "@/public/images/clinic/reception.png";
import second_floor from "@/public/images/clinic/second_floor.png";
import sincece from "@/public/images/clinic/treatment_area_2.png";

export const metadata: Metadata = {
  title: "關於澄臻",
  description: "",
};

const About: React.FC = () => {
  return (
    <section className="pb-8">
      <div className="banner__container absolute left-0 h-40 w-full overflow-hidden">
        <Image
          src={banner}
          alt="banner"
          fill={true}
          
          objectPosition="0 -10px"
          priority={true}
          placeholder="blur"
          style={{objectFit: "cover"}}
        />
      </div>
      <h1 className="mb-8 pt-44">診所介紹</h1>

      <div className="mx-auto mb-32 flex items-center justify-around overflow-hidden max-lg_tablet:flex-col">
        <p className="w-[400px] text-wrap max-rg_desktop:w-[350px] max-lg_tablet:order-1 max-lg_tablet:w-full">
          我們的理念是結合專業與關懷，為每一位患者提供最優質、個人化的口腔護理體驗。我們相信，健康與美麗應該是相輔相成的，因此我們專注於不僅提升您的口腔健康，更致力於打造自然、自信的笑容。診所秉持細緻的醫療品質，並注重每一個診療細節，確保患者在舒適的環境中，享受最先進的技術與貼心的服務。我們的目標是讓每一位患者都能擁有澄澈的微笑，臻於完美的美學境界。
        </p>

        <div className="max-lg_tablet:order-0 relative aspect-video w-[500px] overflow-hidden rounded-2xl max-rg_desktop:w-[400px] max-lg_tablet:mb-4 max-lg_mobile:w-[350px] max-rg_mobile:w-[300px]">
          <Image src={reception} fill={true} alt="reception" />
          <h1 className="dialog absolute bottom-3 left-3 mb-0 select-none rounded-3xl !border-0 px-2 py-1 text-sm text-slate-700">
            一樓接待區
          </h1>
        </div>
      </div>

      <div className="mx-auto mb-32 flex items-center justify-around overflow-hidden max-lg_tablet:flex-col">
        <div className="max-lg_tablet:order-0 relative aspect-video w-[500px] overflow-hidden rounded-2xl max-rg_desktop:w-[400px] max-lg_tablet:mb-4 max-lg_mobile:w-[350px] max-rg_mobile:w-[300px]">
          <Image src={second_floor} fill={true} alt="reception" />
          <h1 className="dialog absolute bottom-3 left-3 mb-0 select-none rounded-3xl !border-0 px-2 py-1 text-sm text-slate-700">
            二樓候診區
          </h1>
        </div>
        <p className="w-[400px] text-wrap max-rg_desktop:w-[350px] max-lg_tablet:order-1 max-lg_tablet:w-full">
          澄臻美學牙醫診所以打造舒適且安心的診療環境為核心，讓每一位走進診所的患者都能感受到如家般的溫馨氛圍。我們的空間設計以簡約且充滿現代感的風格為主，搭配柔和的燈光和舒緩的音樂，幫助患者在診療過程中放鬆身心。此外，我們特別注重衛生管理，確保每一個診療設備與空間都經過嚴格的消毒程序，為患者提供最高標準的安全防護。無論是等待區還是診療室，我們都致力於創造一個安心、愉悅的環境，讓您在享受專業醫療服務的同時，也能感受到賓至如歸的舒適。
        </p>
      </div>

      <div className="mx-auto flex items-center justify-around overflow-hidden max-lg_tablet:flex-col">
        <p className="w-[400px] text-wrap max-rg_desktop:w-[350px] max-lg_tablet:order-1 max-lg_tablet:w-full">
          澄臻美學牙醫診所採用最先進的高科技設備，為每一位患者提供精準、快速且高效的診療服務。我們引進數位化3D口腔掃描儀、低輻射X光機和電腦輔助設計及製作(CAD/CAM)系統，讓患者在診療過程中感受到最先進技術的優勢。這些設備不僅縮短了治療時間，還提升了診療精度，減少傳統治療方式帶來的不適。我們的高科技設備結合專業團隊的技術，確保每一次的診療都達到最高的醫療標準，為患者提供最安全、最舒適的診療體驗，實現健康與美學的完美平衡。
        </p>

        <div className="max-lg_tablet:order-0 relative aspect-video w-[500px] overflow-hidden rounded-2xl max-rg_desktop:w-[400px] max-lg_tablet:mb-4 max-lg_mobile:w-[350px] max-rg_mobile:w-[300px]">
          <Image src={sincece} fill={true} alt="reception" />
          <h1 className="dialog absolute bottom-3 left-3 mb-0 select-none rounded-3xl !border-0 px-2 py-1 text-sm text-slate-700">
            二樓診療室
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
