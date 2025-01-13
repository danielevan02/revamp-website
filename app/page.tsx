import { FocusCards } from "@/components/ui/FocusCard";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import React from "react";
import { ContainerScroll } from "@/components/ui/ContainerScrollAnimation";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { Cover } from "@/components/ui/Cover";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import Awards from "@/components/home-components/Awards";
import { CommunityCard } from "@/components/home-components/CommunityCard";
import { FooterBanner } from "@/components/home-components/FooterBanner";
import Link from "next/link";
import {getAllCategories, getCategory} from "./action/product.action.ts/productAction";
import { advantage, content } from "@/lib/content";
import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
import { getAllBanners } from "./action/product.action.ts/bannerAction";
import HomeSliderBanner from "@/components/home-components/HomeSliderBanner";
import FlashSaleSection from "@/components/home-components/FlashSaleSection";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { FlipWords } from "@/components/ui/FlipWords";
import Image from "next/image";

export const revalidate = 1;

const Home = async () => {
  const categories = await getAllCategories()
  const banners = await getAllBanners()
  const flashSale = await getCategory('67778fad3bebf3edd93370cb')

  const words = ['Testimonials', 'Happy Customers', 'Reviews and Ratings']

  const category =
    categories?.map((data) => {
      return {
        title: data.name,
        src: data.photo ?? "",
        id: data.id
      };
    }) || [];

  return (
    <>
      <div
        className="relative w-screen h-screen flex flex-col gap-4 justify-center items-center"
      >
        <Image
          src='/main-photo.png'
          height={1000}
          width={1000}
          className="w-full h-full object-cover absolute"
          alt="main-banner"
          priority
        />
        <div className="absolute w-full h-full bg-gradient-to-b opacity-80 from-blue-950 via-black"/>
        <span className="text-white-200 uppercase text-center">Competitive Quality and Innovative Solutions.</span>
        <TextGenerateEffect words="Breastfeeding Lifestyle Solution By GabaG Indonesia" duration={0.8} />
        <Link
          href="/product"
          className="shadow-[inset_0_0_0_2px_#616467] backdrop-blur-lg text-white px-4 md:px-12 py-4 mt-10 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-black-100 dark:text-neutral-200 transition duration-200 text-sm md:text-2xl text-center"
        >
          browse our product collections
        </Link>
      </div>

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
              <HomeSliderBanner banners={banners} />
            </section>
          </ContainerScroll>
        </AuroraBackground>
      </section>

      <section id="flashSale" className="relative mx-2 md:mx-10 rounded-xl p-5 bg-red-900">
        <BackgroundBeams/>
        <FlashSaleSection 
          data={flashSale!}
          prevBtnStyle="-left-5"
          nextBtnStyle="-right-5" 
        />
      </section>
      
      <section id="categories" className="mx-10 mt-36">
        <h1 className="section-title">CATEGORIES</h1>
        <FocusCards cards={category} />
      </section>

      <section id="advantage" className="mt-44 mx-10 md:mx-0">
        <h1 className="text-4xl pb-20 md:text-4xl lg:text-6xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Kenapa memilih produk <br /> <Cover>Gabag Indonesia</Cover> ?
        </h1>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {advantage.map((item) => (
            <BentoGridItem
              key={item.id}
              index={item.id}
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

      <section id="community" className="text-center mt-36">
        <h1 className="section-title">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-300 to-red-700">Join Our Community</span>
        </h1>
        <span className="md:text-xl">Kami memahami kebutuhan Mama untuk mendapatkan produk berkualitas</span>
        <CommunityCard />
      </section>

      <section id="testimoni" className="py-60">
        <div className="flex flex-col md:flex-row items-center w-full justify-center text-4xl md:text-7xl font-bold">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-blue-500 to-purple flex gap-3">
            <span>Our</span>
            <span className="lg:hidden">Testimony</span>
          </h1>
          <FlipWords words={words} className="hidden lg:flex"/>
        </div>
        <AnimatedTestimonials testimonials={content}/>
      </section>

      <FooterBanner />
    </>
  );
};

export default Home;
