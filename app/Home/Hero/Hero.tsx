import React from "react";
import "./hero.css";

const Hero: React.FC = () => {
    return (
        <section className="h-screen px-0 pt-20">
            <div className="relative hero__background__container rounded-tl-[500px] h-screen w-full border-4 border-l-[var(--main-theme)] border-t-[var(--main-theme)]">
                <div className="dialog w-1/2 absolute right-12 bottom-32 rounded-[50px] flex flex-col justify-start items-center px-8 py-4">
                    <h1>澄臻美學牙醫診所</h1>
                    <p className="text-wrap">一家專注於提供高品質美學牙醫服務的診所。 無論您是需要修復破損的牙齒、
                    改善牙齒排列或想要美白您的微笑， 他們的專業團隊將為您提供全面的解決方案。</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
