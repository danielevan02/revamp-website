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
import {
  IconCertificate,
  IconClock24,
  IconFreeRights,
  IconQrcode,
  IconReportMedical,
} from "@tabler/icons-react";
import { Cover } from "@/components/ui/Cover";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import Awards from "@/components/Awards";
import { CommunityCard } from "@/components/CommunityCard";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import { StickyScroll } from "@/components/ui/StickyScrollReveal";
import { FooterBanner } from "@/components/FooterBanner";
import Link from "next/link";

export const revalidate = 1;

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

  const content = [
    {
      name: "kuyorderkuy",
      photo: "/testimony/c1.jpg",
      description:
        "moisturizing yg bagus banget karna didalamnya terdapat sunscreen dan uc protection jg, packing sangat aman lembut mudah menyerap dan tidak lengket wajib beli sii ini apa lg busui bumil yg lagi cari skincare yg aman wajib pny ini next bakalan order lagi😍",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/testimony/t1.jpg"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      name: "diahambarwati12",
      photo: "/testimony/c2.jpg",
      description:
        "Ga diragukan lagi sih kalo sama produk GABAG, suka semuanya. Motifnya lucu-lucu, kantong ASInya juga kuat & ga mudah bocor. Langganan akuuu 👍🏻",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/testimony/t2.jpg"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      name: "V****9",
      photo: "/testimony/c3.jpg",
      description:
        "tas asi selalu jadi andalan kado saat ada temen kantor yang lahiran hahahaha, dan selalu belinya gabag, nggak merk lain 🥹 karena gabag emang sebagus ituuu",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/testimony/t3.jpg"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      name: "Anggita",
      photo: "/testimony/c4.jpg",
      description:
        "Tasnya besar, muat banyak, ada tas kuning untuk simpan tas agar tidak kotor. Rekomendasi bgt untuk busui yang kerja. Tali bisa menyamping dan bisa dibuat tas punggung.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/testimony/t4.jpg"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      name: "d*****l",
      photo: "/testimony/c5.jpg",
      description:
        "Saya pertama beli 1, setelah pakai cocok ga sakit dan nyaman digunakan. Suara juga silent. Ga mengganggu. Krn ccok saya beli 1 lg. uda coba merk Sp… dan Mom… . Ttlnya ada 4. Yg ini the best menurut saya",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/testimony/t5.jpg"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      name: "e***l",
      photo: "/testimony/c6.jpg",
      description:
        "Dari semua tas ASI, ini yg paling recomended. Kalau lagi jalan ke mall, memang enak klo tas sandang punggung belakang. Praktis. Nyesal gak beli dari awal.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/testimony/t6.jpg"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
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
          <Link
            href="/product"
            className="shadow-[inset_0_0_0_2px_#616467] backdrop-blur-sm text-white px-12 py-4 mt-10 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-black-100 dark:text-neutral-200 transition duration-200"
          >
            checkout our product
          </Link>
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
        <h1 className="section-title">CATEGORIES</h1>
        <FocusCards cards={category} />
      </section>

      <section id="advantage" className="pt-20 mx-10 md:mx-0">
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
        <Awards />
      </section>

      <section id="community" className="text-center text-black-200">
        <h1 className="section-title">Join Our Community</h1>
        <span className="md:text-xl">Kami memahami kebutuhan Mama untuk mendapatkan produk berkualitas</span>
        <CommunityCard />
      </section>

      <section id="testimoni" className="py-72">
        <TextHoverEffect text="Our Testimony" />
        <StickyScroll content={content} />
      </section>

      <FooterBanner />
      
    </>
  );
};

export default Home;
