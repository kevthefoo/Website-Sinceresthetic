import Image from "next/image";

import doctor_0 from "@/public/images/doctor/doctor_0.png";
import doctor_1 from "@/public/images/doctor/doctor_1.png";
import doctor_2 from "@/public/images/doctor/doctor_2.png";
import doctor_3 from "@/public/images/doctor/doctor_3.png";
import doctor_4 from "@/public/images/doctor/doctor_4.png";
import doctor_5 from "@/public/images/doctor/doctor_5.png";
import doctor_6 from "@/public/images/doctor/doctor_6.png";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Team: React.FC = () => {
    return (
        <section className="" id="team">
            <h1 className="aaa">專業醫療團隊</h1>
            <Carousel className="w-full h-full flex flex-col justify-center">
                <CarouselContent className="">
                    <CarouselItem className="basis-1/4 h-full ">
                        <div className="">
                            <Card className="rounded-[50px]">
                                <CardContent className="p-0 rounded-[50px] overflow-hidden flex flex-col aspect-square items-center justify-start ">
                                    <Image
                                        src={doctor_0}
                                        alt="doctor_0"
                                        objectFit="cover"
                                        objectPosition="center"
                                        placeholder="blur"
                                        className=" mb-4"
                                    />
                                    <h1>林昌言</h1>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};

export default Team;
