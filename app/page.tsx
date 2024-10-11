import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import { FocusCards } from "@/components/ui/FocusCard";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { createClient } from "@/supabase/client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/ContainerScrollAnimation";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { IconCertificate, IconClock24, IconFreeRights, IconQrcode, IconReportMedical } from "@tabler/icons-react";
import { Cover } from "@/components/ui/Cover";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import Awards from "@/components/Awards";

export const revalidate = 0;

const Home = async () => {
  const supabase = createClient();
  const { data: categories } = await supabase.from("sub_categories").select("sub_name, photo");
  const { data: slider } = await supabase.from("slider").select();

  const advantage = [
    {
      id: 1,
      title: "Kantong asi QR Code pertama di dunia",
      desc: "Produk kantong asi kami sudah dilengkapi dengan QR Code yang terintegrasi dengan aplikasi kami",
      header: "/advantage/a4.png",
      icon: <IconQrcode className="h-4 w-4 text-neutral-500" />,
      classname: "md:col-span-2",
    },
    {
      id: 2,
      title: "Garansi tas 6 bulan dan breastpump 3 tahun",
      desc: "Kami menyediakan garansi untuk tas kami selama 6 bulan dan breastpump 3 tahun",
      header: "/advantage/a2.png",
      icon: <IconCertificate className="h-4 w-4 text-neutral-500" />,
      classname: "md:col-span-1",
    },
    {
      id: 3,
      title: "Beli tas gratis ice gel",
      desc: "Setiap pembelian tas kami, anda mendapatkan ice gel secara langsung",
      header: "/advantage/a3.jpeg",
      icon: <IconFreeRights className="h-4 w-4 text-neutral-500" />,
      classname: "md:col-span-1",
    },
    {
      id: 4,
      title: "Cooler Bag Tahan Dingin 24 Jam",
      desc: "Kami menjamin cooler bag kami tahan 24 jam dalam menjaga suhu asi tetap dingin.",
      header: "/advantage/a1.jpg",
      icon: <IconClock24 className="h-4 w-4 text-neutral-500" />,
      classname: "md:col-span-1",
    },
    {
      id: 5,
      title: "Skincare aman untuk ibu hamil dan menyusui",
      desc: "Produk skincare kami aman untuk ibu hamil dan menyusui dan sudah terbukti oleh BPOM",
      header: "/advantage/a5.png",
      icon: <IconReportMedical className="h-4 w-4 text-neutral-500" />,
      classname: "md:col-span-1",
    },
  ];
  const category =
    categories?.map((data) => {
      return {
        title: data.sub_name,
        src: data.photo ?? "",
      };
    }) || [];
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div
          className="w-screen h-screen bg-center bg-cover flex flex-col gap-4 justify-center items-center bg-fixed"
          style={{
            backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.8) 50%), url(/main-photo.png)",
          }}
        >
          <span className="text-white-200 uppercase">Competitive Quality and Innovative Solutions.</span>
          <TextGenerateEffect words="Breastfeeding Lifestyle Solution By GabaG Indonesia" duration={0.8} />
          <a
            href="#promo"
            className="shadow-[inset_0_0_0_2px_#616467] backdrop-blur-sm text-white px-12 py-4 mt-10 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-black-100 dark:text-neutral-200 transition duration-200"
          >
            Explore
          </a>
        </div>
      </BackgroundBeamsWithCollision>

      <section id="promo">
        <AuroraBackground>
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  Checkout our latest <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">Promo and Offers 🔥</span>
                </h1>
              </>
            }
          >
            <section id="promo" className="w-full flex justify-center items-center">
              <Carousel className="max-w-full">
                <CarouselContent className="w-full">
                  {slider?.map((item) => (
                    <CarouselItem key={item.id} className="w-full">
                      <Card className=" w-full overflow-hidden flex p-0 items-center justify-center object-cover">
                        <Image
                          src={item.image}
                          width={1000}
                          height={1000}
                          alt={item.banner!}
                          className="object-cover w-full"
                        />
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </section>
          </ContainerScroll>
        </AuroraBackground>
      </section>

      <section id="categories" className="mx-10">
        <h1 className="w-full text-center md:mt-28 mt-16 mb-10 md:text-5xl text-4xl font-thin">CATEGORIES</h1>
        <FocusCards cards={category} />
      </section>

      <section id="advantage" className="pt-20">
        <h1 className="text-4xl pb-20 md:text-4xl lg:text-6xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Kenapa memilih produk <br /> <Cover>Gabag Indonesia</Cover> ?
        </h1>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {advantage.map((item) => (
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.desc}
              header={item.header}
              className={item.classname}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </section>

      <section
        id="awards"
        className="h-[40rem] mt-40 rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      >
        <Awards/>
      </section>
    </>
  );
};

export default Home;
