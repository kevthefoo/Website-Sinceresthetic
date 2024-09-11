import React from "react";
import "./hero.css";
import Image from "next/image";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Link from "next/link";
import Reveal from "@/app/Components/Reveal/Reveal";
import reception from "@/public/images/clinic/reception.png";

const Hero: React.FC = () => {
  return (
    <section className="h-screen px-0">
      <div className="hero__background__container relative h-screen w-full overflow-hidden rounded-tl-[500px] max-rg_mobile:rounded-none max-rg_mobile:border-0 border-4 border-l-[var(--main-theme)] border-t-[var(--main-theme)]">
        <Image
          src={reception}
          fill={true}
          objectFit="cover"
          objectPosition="center"
          priority={true}
          placeholder="blur"
          alt="reception"
          className="z-1 absolute left-0 top-0"
        />
        <Reveal yTranslate={0} xTranslate={100}>
          <div className="dialog absolute bottom-24 right-8 flex w-[600px] flex-col items-center justify-start rounded-[50px] px-8 py-4 max-sm_tablet:w-[400px] max-rg_mobile:w-[340px] max-rg_mobile:left-[50%]  max-rg_mobile:translate-x-[-50%] max-rg_mobile:bottom-[200px]">
            <h1 className="">澄臻美學牙醫診所</h1>
            <p className="">
              在澄臻美學牙醫診所，我們以專業的技術與藝術的設計，為您打造專屬於您的完美笑容。無論是牙齒美白、矯正，還是全口設計，我們的專家團隊將細心雕琢每一顆牙齒，讓您的笑容煥發自信光彩。
            </p>
          </div>
        </Reveal>
      </div>

      <div className="float-animation absolute bottom-2 left-[50%] translate-x-[-50%]">
        <Link href="#introduction" title="介紹">
          <i>
            <FaArrowAltCircleDown className="rounded-full border-2 border-white bg-white text-[2.5rem] text-blue-500" />
          </i>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
