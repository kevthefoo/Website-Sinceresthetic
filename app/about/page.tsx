import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import banner from "@/public/images/logo/banner_3.png";
import reception from "@/public/images/clinic/reception.png";

export const metadata: Metadata = {
    title: "關於澄臻",
    description: "",
};

const About: React.FC = () => {
    return (
        <section>
            <div className="banner__container absolute w-full overflow-hidden left-0 h-40">
                <Image
                    src={banner}
                    alt="banner"
                    fill={true}
                    objectFit="cover"
                    objectPosition="center"
                    priority={true}
                    placeholder="blur"
                />
            </div>
            <h1 className="pt-40">診所介紹</h1>
            <div className="mx-auto border-2 border-red-500 flex justify-around items-center">
                <p className="text-wrap w-[600px] border-2 border-green-500">
                    澄臻美學牙醫診所，不僅是一個致力於提供優質牙醫照護的診所，更是一個關注您整體口腔健康的夥伴。我們的目標是幫助您實現健康美麗的微笑，從而提升您的生活品質和自信心。
                    讓我們攜手走向一個更加美好的明天，綻放您的璀璨微笑！
                    如果您正在尋找專業、可靠的牙醫診所，澄臻美學牙醫診所定將是您的最佳選擇。立即預約您的就診時間，讓我們一同開啟牙齒健康之旅吧！
                </p>
                <div>
                    <Image src={reception} width={500} alt="reception" />
                </div>
            </div>
        </section>
    );
};

export default About;
