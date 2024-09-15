"use client";

import "./team.css";

import Image from "next/image";

import doctor_0 from "@/public/images/dentist/johnny.png";
import popo from "@/public/images/dentist/jerry.png";
import doctor_2 from "@/public/images/dentist/david.png";
import doctor_3 from "@/public/images/dentist/tom.png";
import doctor_4 from "@/public/images/dentist/mary.png";
import doctor_5 from "@/public/images/dentist/linda.png";
import doctor_6 from "@/public/images/dentist/jennifer.png";

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
        className="flex h-full w-full flex-col justify-start"
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
        <CarouselContent className="h-full">
          <CarouselItem className="h-full basis-1/3 max-rg_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] border-2 border-slate-700 bg-[#1EA8B012] p-0">
                  <div className="mb-4 h-[400px] w-full overflow-hidden">
                    <Image
                      src={doctor_0}
                      alt="doctor_0"
                      style={{ objectFit: "cover" }}
                      objectPosition="center"
                      placeholder="blur"
                    />
                  </div>

                  <h1>林昌言</h1>
                  <div>
                    <table className="styled-table max-rg_mobile:!text-[12px]">
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

          <CarouselItem className="h-full basis-1/3 max-rg_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="h-full">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] border-2 border-slate-700 bg-[#1EA8B012] p-0">
                  <div className="mb-4 h-[400px] w-full overflow-hidden">
                    <Image
                      src={popo}
                      alt="popo"
                      style={{ objectFit: "cover" }}
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

          <CarouselItem className="h-full basis-1/3 max-rg_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] border-2 border-slate-700 bg-[#1EA8B012] p-0">
                  <div className="mb-4 h-[400px] w-full overflow-hidden">
                    <Image
                      src={doctor_2}
                      alt="doctor_2"
                      style={{ objectFit: "cover" }}
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

          <CarouselItem className="h-full basis-1/3 max-rg_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] border-2 border-slate-700 bg-[#1EA8B012] p-0">
                  <div className="mb-4 h-[400px] w-full overflow-hidden">
                    <Image
                      src={doctor_3}
                      alt="doctor_3"
                      style={{ objectFit: "cover" }}
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

          <CarouselItem className="h-full basis-1/3 max-rg_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] border-2 border-slate-700 bg-[#1EA8B012] p-0">
                  <div className="mb-4 h-[400px] w-full overflow-hidden">
                    <Image
                      src={doctor_4}
                      alt="doctor_4"
                      style={{ objectFit: "cover" }}
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

          <CarouselItem className="h-full basis-1/3 max-rg_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] border-2 border-slate-700 bg-[#1EA8B012] p-0">
                  <div className="mb-4 h-[400px] w-full overflow-hidden">
                    <Image
                      src={doctor_5}
                      alt="doctor_5"
                      style={{ objectFit: "cover" }}
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

          <CarouselItem className="h-full basis-1/3 max-rg_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] border-2 border-slate-700 bg-[#1EA8B012] p-0">
                  <div className="mb-4 h-[400px] w-full overflow-hidden">
                    <Image
                      src={doctor_6}
                      alt="doctor_6"
                      style={{ objectFit: "cover" }}
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
