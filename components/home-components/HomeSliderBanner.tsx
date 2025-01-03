'use client'

import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "../ui/card";
import Image from "next/image";
import { Banner } from "@prisma/client";
import Autoplay from "embla-carousel-autoplay"

const HomeSliderBanner = ({banners}: {banners: Banner[]}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel className="max-w-full" plugins={[plugin.current]}>
      <CarouselContent className="w-full">
        {banners?.map((item) => (
          <CarouselItem key={item.id} className="w-full">
            <Card className=" w-full overflow-hidden flex p-0 items-center justify-center object-cover">
              <Image src={item.photo} width={1000} height={1000} alt={item.name} className="object-cover w-full" />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HomeSliderBanner;
