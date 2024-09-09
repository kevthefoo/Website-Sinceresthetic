import React from "react";
import Image from "next/image";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Link from "next/link";
import smiling_girl from "@/public/images/appointment/appointment_image_0.png";
const Introduction: React.FC = () => {
    return (
        <section
            className="relative flex flex-col justify-start items-center"
            id="introduction"
        >
            <h1>微笑的藝術</h1>
            <Image
                src={smiling_girl}
                alt="smiling_art"
                height={200}
                className="rounded-full border-4 border-[var(--main-theme)]	 mb-8"
            />
            <div className="dialog flex flex-col w-fit items-center justify-center rounded-3xl py-12 px-8">
                <h2 className="mb-4 ">動人笑容，源於齒間散發的自信</h2>

                <p className="w-[500px]  mb-8">
                    微笑的魅力如同一幅藝術傑作，笑容設計更被視為藝術創作的絕佳體現
                    我們致力於追求完美的美學設計工藝，為你打造一個迷人且獨一無二的笑容。
                </p>
                <Link
                    href="https://page.line.me/920oaogn?openQrModal=true"
                    target="_blank"
                    className="border-2 border-[var(--main-theme)] rounded-[50px] px-4 py-2 hover:bg-slate-300"
                >
                    立即預約
                </Link>
            </div>

            <div className="absolute bottom-2 left-[50%] translate-x-[-50%] float-animation ">
                <Link href="#services" title="介紹">
                    <i>
                        <FaArrowAltCircleDown className=" text-[2.5rem] text-blue-500 bg-white rounded-full border-2 border-white" />
                    </i>
                </Link>
            </div>
        </section>
    );
};

export default Introduction;
