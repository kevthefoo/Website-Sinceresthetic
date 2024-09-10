import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import banner from "@/public/images/logo/banner_5.png";
import reception from "@/public/images/clinic/reception.png";
import second_floor from "@/public/images/clinic/second_floor.png";
import sincece from "@/public/images/clinic/Sincere-12.jpg";

export const metadata: Metadata = {
    title: "關於澄臻",
    description: "",
};

const About: React.FC = () => {
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
            <h1 className="pt-44 mb-8">診所介紹</h1>

            <div className="mx-auto  flex justify-around items-center">
                <p className="text-wrap w-[600px] ">
                    我們的理念是結合專業與關懷，為每一位患者提供最優質、個人化的口腔護理體驗。我們相信，健康與美麗應該是相輔相成的，因此我們專注於不僅提升您的口腔健康，更致力於打造自然、自信的笑容。診所秉持細緻的醫療品質，並注重每一個診療細節，確保患者在舒適的環境中，享受最先進的技術與貼心的服務。我們的目標是讓每一位患者都能擁有澄澈的微笑，臻於完美的美學境界。
                </p>
                <div className="relative rounded-2xl overflow-hidden">
                    <Image src={reception} width={500} alt="reception" />
                    <h1 className="absolute bottom-0 left-10 rounded-3xl text-sm text-slate-700 py-1 px-2 select-none dialog">
                        一樓接待區
                    </h1>
                </div>
            </div>

            <div className="mx-auto  flex justify-around items-center mb-8">
                <div className="relative rounded-2xl overflow-hidden">
                    <Image src={second_floor} width={500} alt="reception" />
                    <h1 className="absolute bottom-0 left-10 rounded-3xl text-sm text-slate-700 py-1 px-2 select-none dialog">
                        二樓候診區
                    </h1>
                </div>
                <p className="text-wrap w-[600px] ">
                    澄臻美學牙醫診所以打造舒適且安心的診療環境為核心，讓每一位走進診所的患者都能感受到如家般的溫馨氛圍。我們的空間設計以簡約且充滿現代感的風格為主，搭配柔和的燈光和舒緩的音樂，幫助患者在診療過程中放鬆身心。此外，我們特別注重衛生管理，確保每一個診療設備與空間都經過嚴格的消毒程序，為患者提供最高標準的安全防護。無論是等待區還是診療室，我們都致力於創造一個安心、愉悅的環境，讓您在享受專業醫療服務的同時，也能感受到賓至如歸的舒適。
                </p>
            </div>
            <div className="mx-auto  flex justify-around items-center mb-8">
                <p className="text-wrap w-[600px] ">
                    澄臻美學牙醫診所採用最先進的高科技設備，為每一位患者提供精準、快速且高效的診療服務。我們引進數位化3D口腔掃描儀、低輻射X光機和電腦輔助設計及製作(CAD/CAM)系統，讓患者在診療過程中感受到最先進技術的優勢。這些設備不僅縮短了治療時間，還提升了診療精度，減少傳統治療方式帶來的不適。我們的高科技設備結合專業團隊的技術，確保每一次的診療都達到最高的醫療標準，為患者提供最安全、最舒適的診療體驗，實現健康與美學的完美平衡。
                </p>
                <div className="relative rounded-2xl overflow-hidden">
                    <Image src={sincece} width={500} alt="reception" />
                    <h1 className="absolute bottom-0 left-10 rounded-3xl text-sm text-slate-700 py-1 px-2 select-none dialog">
                        二樓診療室
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default About;
