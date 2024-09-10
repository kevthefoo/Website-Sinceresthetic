"use client";

import "./team.css";

import Image from "next/image";

import doctor_0 from "@/public/images/doctor/doctor_0.png";
import doctor_1 from "@/public/images/doctor/doctor_1.png";
import doctor_2 from "@/public/images/doctor/doctor_2.png";
import doctor_3 from "@/public/images/doctor/doctor_3.png";
import doctor_4 from "@/public/images/doctor/doctor_4.png";
import doctor_5 from "@/public/images/doctor/doctor_5.png";
import doctor_6 from "@/public/images/doctor/doctor_6.png";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const TeamCarousel: React.FC = () => {
    return (
        <>
            <Carousel
                className="w-full h-full flex flex-col justify-start"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent className=" h-full">
                    <CarouselItem className="basis-1/3 h-full ">
                        <div className="">
                            <Card className="rounded-[50px] ">
                                <CardContent className="border-2 bg-[#1EA8B012] border-slate-700 p-0 rounded-[50px] overflow-hidden  flex flex-col items-center justify-start ">
                                    <div className="h-[400px]  w-full overflow-hidden mb-4">
                                        <Image
                                            src={doctor_0}
                                            alt="doctor_0"
                                            objectFit="cover"
                                            objectPosition="center"
                                            placeholder="blur"
                                        />
                                    </div>

                                    <h1>林昌言</h1>
                                    <div>
                                        <table className="styled-table">
                                            <thead>
                                                <tr>
                                                    <th>時間</th>
                                                    <th>一</th>
                                                    <th>二</th>
                                                    <th>三</th>
                                                    <th>四</th>
                                                    <th>五</th>
                                                    <th>六</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>09:00-12:00</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td>✓</td>
                                                </tr>
                                                <tr>
                                                    <td>15:00-18:00</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                </tr>
                                                <tr>
                                                    <td>18:00-21:00</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 h-full ">
                        <div className="h-full">
                            <Card className="rounded-[50px] ">
                                <CardContent className="border-2 bg-[#1EA8B012] border-slate-700  p-0 rounded-[50px] overflow-hidden  flex flex-col items-center justify-start ">
                                    <div className="h-[400px]  w-full overflow-hidden mb-4">
                                        <Image
                                            src={doctor_1}
                                            alt="doctor_1"
                                            objectFit="cover"
                                            objectPosition="center"
                                            placeholder="blur"
                                        />
                                    </div>

                                    <h1>江逆鱗</h1>
                                    <div>
                                        <table className="styled-table">
                                            <thead>
                                                <tr>
                                                    <th>時間</th>
                                                    <th>一</th>
                                                    <th>二</th>
                                                    <th>三</th>
                                                    <th>四</th>
                                                    <th>五</th>
                                                    <th>六</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>09:00-12:00</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                </tr>
                                                <tr>
                                                    <td>15:00-18:00</td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>18:00-21:00</td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 h-full ">
                        <div className="">
                            <Card className="rounded-[50px] ">
                                <CardContent className="border-2 bg-[#1EA8B012] border-slate-700  p-0 rounded-[50px] overflow-hidden  flex flex-col items-center justify-start ">
                                    <div className="h-[400px]  w-full overflow-hidden mb-4">
                                        <Image
                                            src={doctor_2}
                                            alt="doctor_2"
                                            objectFit="cover"
                                            objectPosition="center"
                                            placeholder="blur"
                                        />
                                    </div>

                                    <h1>林強尼</h1>
                                    <div>
                                        <table className="styled-table">
                                            <thead>
                                                <tr>
                                                    <th>時間</th>
                                                    <th>一</th>
                                                    <th>二</th>
                                                    <th>三</th>
                                                    <th>四</th>
                                                    <th>五</th>
                                                    <th>六</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>09:00-12:00</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>15:00-18:00</td>
                                                    <td>✓</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>18:00-21:00</td>
                                                    <td>✓</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 h-full ">
                        <div className="">
                            <Card className="rounded-[50px] ">
                                <CardContent className="border-2 bg-[#1EA8B012] border-slate-700  p-0 rounded-[50px] overflow-hidden  flex flex-col items-center justify-start ">
                                    <div className="h-[400px]  w-full overflow-hidden mb-4">
                                        <Image
                                            src={doctor_3}
                                            alt="doctor_3"
                                            objectFit="cover"
                                            objectPosition="center"
                                            placeholder="blur"
                                        />
                                    </div>
                                    <h1>林安海</h1>
                                    <div>
                                        <table className="styled-table">
                                            <thead>
                                                <tr>
                                                    <th>時間</th>
                                                    <th>一</th>
                                                    <th>二</th>
                                                    <th>三</th>
                                                    <th>四</th>
                                                    <th>五</th>
                                                    <th>六</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>09:00-12:00</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td>✓</td>
                                                </tr>
                                                <tr>
                                                    <td>15:00-18:00</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                </tr>
                                                <tr>
                                                    <td>18:00-21:00</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 h-full ">
                        <div className="">
                            <Card className="rounded-[50px] ">
                                <CardContent className="border-2 bg-[#1EA8B012] border-slate-700  p-0 rounded-[50px] overflow-hidden  flex flex-col items-center justify-start ">
                                    <div className="h-[400px]  w-full overflow-hidden mb-4">
                                        <Image
                                            src={doctor_4}
                                            alt="doctor_4"
                                            objectFit="cover"
                                            objectPosition="center"
                                            placeholder="blur"
                                        />
                                    </div>
                                    <h1>林波波</h1>
                                    <div>
                                        <table className="styled-table">
                                            <thead>
                                                <tr>
                                                    <th>時間</th>
                                                    <th>一</th>
                                                    <th>二</th>
                                                    <th>三</th>
                                                    <th>四</th>
                                                    <th>五</th>
                                                    <th>六</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>09:00-12:00</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td>✓</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>15:00-18:00</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>18:00-21:00</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 h-full ">
                        <div className="">
                            <Card className="rounded-[50px] ">
                                <CardContent className="border-2 bg-[#1EA8B012] border-slate-700  p-0 rounded-[50px] overflow-hidden  flex flex-col items-center justify-start ">
                                    <div className="h-[400px]  w-full overflow-hidden mb-4">
                                        <Image
                                            src={doctor_5}
                                            alt="doctor_5"
                                            objectFit="cover"
                                            objectPosition="center"
                                            placeholder="blur"
                                        />
                                    </div>

                                    <h1>林波奇</h1>
                                    <div>
                                        <table className="styled-table">
                                            <thead>
                                                <tr>
                                                    <th>時間</th>
                                                    <th>一</th>
                                                    <th>二</th>
                                                    <th>三</th>
                                                    <th>四</th>
                                                    <th>五</th>
                                                    <th>六</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>09:00-12:00</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td>✓</td>
                                                </tr>
                                                <tr>
                                                    <td>15:00-18:00</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                </tr>
                                                <tr>
                                                    <td>18:00-21:00</td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 h-full ">
                        <div className="">
                            <Card className="rounded-[50px] ">
                                <CardContent className="border-2 bg-[#1EA8B012] border-slate-700  p-0 rounded-[50px] overflow-hidden  flex flex-col items-center justify-start ">
                                    <div className="h-[400px]  w-full overflow-hidden mb-4">
                                        <Image
                                            src={doctor_6}
                                            alt="doctor_6"
                                            objectFit="cover"
                                            objectPosition="center"
                                            placeholder="blur"
                                        />
                                    </div>

                                    <h1>林森林</h1>
                                    <div>
                                        <table className="styled-table">
                                            <thead>
                                                <tr>
                                                    <th>時間</th>
                                                    <th>一</th>
                                                    <th>二</th>
                                                    <th>三</th>
                                                    <th>四</th>
                                                    <th>五</th>
                                                    <th>六</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>09:00-12:00</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>15:00-18:00</td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                </tr>
                                                <tr>
                                                    <td>18:00-21:00</td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>✓</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
};

export default TeamCarousel;
