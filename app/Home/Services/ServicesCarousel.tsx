"use client";

import Image from "next/image";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ceramic_crown from "@/public/images/services/ceramic_crown.png";
import children_dentist from "@/public/images/services/children_dentist.png";
import dental_implant from "@/public/images/services/dental_implant.png";
// import family_dentist from "@/public/images/services/family_dentist.png";
import root_canal_treatment from "@/public/images/services/root_canal_treatment.png";
import teeth_whitening from "@/public/images/services/teeth_whitening.png";

const ServicesCarousel: React.FC = () => {
  return (
    <>
      <Carousel
        className="flex w-full flex-col justify-center"
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
        <CarouselContent className="">
          <CarouselItem className="h-full basis-1/4 max-sm_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] p-0 pb-4">
                  <Image
                    src={ceramic_crown}
                    alt="service_1"
                    style={{ objectFit: "cover" }}
                    objectPosition="center"
                    placeholder="blur"
                    className="mb-4"
                  />
                  <h1 className="mb-4">牙齒矯正</h1>
                  <Link
                    href="/services/teeth_whitening"
                    className="rounded-[50px] border-2 border-[var(--main-theme)] px-6 py-3 transition-colors duration-300 hover:bg-[var(--main-theme)] hover:text-white max-rg_mobile:px-4 max-rg_mobile:py-2"
                  >
                    查看資訊
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="h-full basis-1/4 max-sm_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] p-0 pb-4">
                  <Image
                    src={root_canal_treatment}
                    alt="service_1"
                    style={{ objectFit: "cover" }}
                    objectPosition="center"
                    placeholder="blur"
                    className="mb-4"
                  />
                  <h1 className="mb-4">牙齒修護</h1>
                  <Link
                    href="/services/teeth_whitening"
                    className="rounded-[50px] border-2 border-[var(--main-theme)] px-6 py-3 transition-colors duration-300 hover:bg-[var(--main-theme)] hover:text-white max-rg_mobile:px-4 max-rg_mobile:py-2"
                  >
                    查看資訊
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="h-full basis-1/4 max-sm_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] p-0 pb-4">
                  <Image
                    src={dental_implant}
                    alt="service_1"
                    style={{ objectFit: "cover" }}
                    objectPosition="center"
                    placeholder="blur"
                    className="mb-4"
                  />
                  <h1 className="mb-4">牙齒矯正</h1>
                  <Link
                    href="/services/teeth_whitening"
                    className="rounded-[50px] border-2 border-[var(--main-theme)] px-6 py-3 transition-colors duration-300 hover:bg-[var(--main-theme)] hover:text-white max-rg_mobile:px-4 max-rg_mobile:py-2"
                  >
                    查看資訊
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="h-full basis-1/4 max-sm_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] p-0 pb-4">
                  <Image
                    src={dental_implant}
                    alt="service_1"
                    style={{ objectFit: "cover" }}
                    objectPosition="center"
                    placeholder="blur"
                    className="mb-4"
                  />
                  <h1 className="mb-4">全植牙</h1>
                  <Link
                    href="/services/teeth_whitening"
                    className="rounded-[50px] border-2 border-[var(--main-theme)] px-6 py-3 transition-colors duration-300 hover:bg-[var(--main-theme)] hover:text-white max-rg_mobile:px-4 max-rg_mobile:py-2"
                  >
                    查看資訊
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="h-full basis-1/4 max-sm_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] p-0 pb-4">
                  <Image
                    src={root_canal_treatment}
                    alt="service_1"
                    style={{ objectFit: "cover" }}
                    objectPosition="center"
                    placeholder="blur"
                    className="mb-4"
                  />
                  <h1 className="mb-4">全瓷冠</h1>
                  <Link
                    href="/services/teeth_whitening"
                    className="rounded-[50px] border-2 border-[var(--main-theme)] px-6 py-3 transition-colors duration-300 hover:bg-[var(--main-theme)] hover:text-white max-rg_mobile:px-4 max-rg_mobile:py-2"
                  >
                    查看資訊
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="h-full basis-1/4 max-sm_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] p-0 pb-4">
                  <Image
                    src={children_dentist}
                    alt="service_1"
                    style={{ objectFit: "cover" }}
                    objectPosition="center"
                    placeholder="blur"
                    className="mb-4"
                  />
                  <h1 className="mb-4">牙齒美白</h1>
                  <Link
                    href="/services/teeth_whitening"
                    className="rounded-[50px] border-2 border-[var(--main-theme)] px-6 py-3 transition-colors duration-300 hover:bg-[var(--main-theme)] hover:text-white max-rg_mobile:px-4 max-rg_mobile:py-2"
                  >
                    查看資訊
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="h-full basis-1/4 max-sm_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] p-0 pb-4">
                  <Image
                    src={teeth_whitening}
                    alt="service_1"
                    style={{ objectFit: "cover" }}
                    objectPosition="center"
                    placeholder="blur"
                    className="mb-4"
                  />
                  <h1 className="mb-4">兒童牙科</h1>
                  <Link
                    href="/services/teeth_whitening"
                    className="rounded-[50px] border-2 border-[var(--main-theme)] px-6 py-3 transition-colors duration-300 hover:bg-[var(--main-theme)] hover:text-white max-rg_mobile:px-4 max-rg_mobile:py-2"
                  >
                    查看資訊
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="h-full basis-1/4 max-sm_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] p-0 pb-4">
                  <Image
                    src={teeth_whitening}
                    alt="service_1"
                    style={{ objectFit: "cover" }}
                    objectPosition="center"
                    placeholder="blur"
                    className="mb-4"
                  />
                  <h1 className="mb-4">家庭牙醫</h1>
                  <Link
                    href="/services/teeth_whitening"
                    className="rounded-[50px] border-2 border-[var(--main-theme)] px-6 py-3 transition-colors duration-300 hover:bg-[var(--main-theme)] hover:text-white max-rg_mobile:px-4 max-rg_mobile:py-2"
                  >
                    查看資訊
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="h-full basis-1/4 max-sm_desktop:basis-1/2 max-rg_tablet:basis-full">
            <div className="">
              <Card className="rounded-[50px]">
                <CardContent className="flex flex-col items-center justify-start overflow-hidden rounded-[50px] p-0 pb-4">
                  <Image
                    src={teeth_whitening}
                    alt="service_1"
                    style={{ objectFit: "cover" }}
                    objectPosition="center"
                    placeholder="blur"
                    className="mb-4"
                  />
                  <h1 className="mb-4">3D齒雕</h1>
                  <Link
                    href="/services/teeth_whitening"
                    className="rounded-[50px] border-2 border-[var(--main-theme)] px-6 py-3 transition-colors duration-300 hover:bg-[var(--main-theme)] hover:text-white max-rg_mobile:px-4 max-rg_mobile:py-2"
                  >
                    查看資訊
                  </Link>
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

export default ServicesCarousel;
