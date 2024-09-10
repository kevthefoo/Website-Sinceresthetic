import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import banner from "@/public/images/logo/banner_2.png";

export const metadata: Metadata = {
    title: "關於澄臻",
    description: "",
};

const About: React.FC = () => {
    return (
        <section>
            <div className="banner__container absolute w-full overflow-hidden left-0 h-32">
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
        </section>
    );
};

export default About;
