import React from "react";
import Image from "next/image";
import banner from "@/public/images/logo/banner_5.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "診療項目",
    description: "",
};

const Services: React.FC = () => {
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

            <h1 className="pt-44 mb-8">診療項目</h1>
        </section>
    );
};

export default Services;
