"use client";

import "./team.css";

import Image from "next/image";

import dentist_0 from "@/public/images/dentist/johnny.png";
import popo from "@/public/images/dentist/jerry.png";
import dentist_2 from "@/public/images/dentist/david.png";
import dentist_3 from "@/public/images/dentist/tom.png";
import dentist_4 from "@/public/images/dentist/mary.png";
import dentist_5 from "@/public/images/dentist/linda.png";
import dentist_6 from "@/public/images/dentist/jennifer.png";

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
                      src={dentist_0}
                      alt="澄臻美學牙醫診所 | 林昌言院長"
                      style={{ objectFit: "cover", objectPosition: "center" }}
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
                      alt="澄臻美學牙醫診所 | 江逆鱗醫師"
                      style={{ objectFit: "cover", objectPosition: "center" }}
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
                      src={dentist_2}
                      alt="澄臻美學牙醫診所 | 林強尼醫師"
                      style={{ objectFit: "cover", objectPosition: "center" }}
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
                      src={dentist_3}
                      alt="澄臻美學牙醫診所 | 林安海醫師"
                      style={{ objectFit: "cover", objectPosition: "center" }}
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
                      src={dentist_4}
                      alt="澄臻美學牙醫診所 | 林波波醫師"
                      style={{ objectFit: "cover", objectPosition: "center" }}
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
                      src={dentist_5}
                      alt="澄臻美學牙醫診所 | 林波奇醫師"
                      style={{ objectFit: "cover", objectPosition: "center" }}
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
                      src={dentist_6}
                      alt="澄臻美學牙醫診所 | 林森林醫師"
                      style={{ objectFit: "cover", objectPosition: "center" }}
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
