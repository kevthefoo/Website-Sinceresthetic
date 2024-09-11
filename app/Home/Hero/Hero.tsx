import React from "react";
import "./hero.css";
import Image from "next/image";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Link from "next/link";
import Reveal from "@/app/Components/Reveal/Reveal";
import reception from "@/public/images/clinic/reception.png";

const Hero: React.FC = () => {
    return (
        <section className="h-screen px-0 ">
            <div className="hero__background__container overflow-hidden relative rounded-tl-[500px] h-screen w-full border-4 border-l-[var(--main-theme)] border-t-[var(--main-theme)]">
                <Image
                    src={reception}
                    fill={true}
                    objectFit="cover"
                    objectPosition="center"
                    priority={true}
                    placeholder="blur"
                    alt="reception"
                    className="absolute top-0 left-0 z-1"
                />
                <Reveal yTranslate={0} xTranslate={100}>
                    <div className="dialog w-[600px] max-sm_tablet:w-[400px] max-rg_mobile:w-[300px] absolute right-8 bottom-24 rounded-[50px] flex flex-col justify-start items-center px-8 py-4">
                        <h1 className="max-rg_tablet:text-xl max-rg_mobile:text-base">澄臻美學牙醫診所</h1>
                        <p className="text-wrap max-rg_tablet:text-base max-rg_mobile:text-sm">
                            在澄臻美學牙醫診所，我們以專業的技術與藝術的設計，為您打造專屬於您的完美笑容。無論是牙齒美白、矯正，還是全口設計，我們的專家團隊將細心雕琢每一顆牙齒，讓您的笑容煥發自信光彩。
                        </p>
                    </div>
                </Reveal>
            </div>

            <div className="absolute bottom-2 left-[50%] translate-x-[-50%] float-animation ">
                <Link href="#introduction" title="介紹">
                    <i>
                        <FaArrowAltCircleDown className=" text-[2.5rem] text-blue-500 bg-white rounded-full border-2 border-white" />
                    </i>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
