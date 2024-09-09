import Link from "next/link";
import React from "react";
import Image from "next/image";
import smiling_girl from "@/public/images/appointment_image_0.png";
const Introduction: React.FC = () => {
    return (
        <section className="flex flex-col justify-start items-center">
            <h1>微笑的藝術</h1>
            <Image
                src={smiling_girl}
                alt="smiling_art"
                height={200}
                className="rounded-full border-4 border-[var(--main-theme)]	 mb-8"
            />
            <div className="dialog flex flex-col w-fit items-center justify-center rounded-3xl py-12 px-8">
                <h2 className="mb-4 ">動人笑容，總源自於雙眸綻放的神韻</h2>

                <p className="w-[500px]  mb-8">
                    微笑的魅力如同一幅藝術傑作，笑容設計更被視為藝術創作的絕佳體現
                    我們致力於追求完美的美學設計工藝，為你打造一個迷人且獨一無二的笑容。
                </p>
                <Link
                    href="https://page.line.me/920oaogn?openQrModal=true"
                    target="_blank"
                >
                    立即預約
                </Link>
            </div>
        </section>
    );
};

export default Introduction;
