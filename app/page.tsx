import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import { FocusCards } from "@/components/ui/FocusCard";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import React from "react";
import { ContainerScroll } from "@/components/ui/ContainerScrollAnimation";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { Cover } from "@/components/ui/Cover";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import Awards from "@/components/Awards";
import { CommunityCard } from "@/components/CommunityCard";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import { FooterBanner } from "@/components/FooterBanner";
import Link from "next/link";
import {getAllCategories} from "./action/product.action.ts/productAction";
import { advantage, content } from "@/lib/content";
import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
import { getAllBanners } from "./action/product.action.ts/bannerAction";
import HomeSliderBanner from "@/components/HomeSliderBanner";

export const revalidate = 1;

const Home = async () => {
  const categories = await getAllCategories()
  const banners = await getAllBanners()

  const category =
    categories?.map((data) => {
      return {
        title: data.name,
        src: data.photo ?? "",
      };
    }) || [];

  return (
    <>
      <BackgroundBeamsWithCollision>
        <div
          className="w-screen h-screen bg-center bg-cover flex flex-col gap-4 justify-center items-center bg-fixed"
          style={{
            backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.6) 50%), url(/main-photo.png)",
          }}
        >
          <span className="text-white-200 uppercase">Competitive Quality and Innovative Solutions.</span>
          <TextGenerateEffect words="Breastfeeding Lifestyle Solution By GabaG Indonesia" duration={0.8} />
          <Link
            href="/product"
            className="shadow-[inset_0_0_0_2px_#616467] backdrop-blur-lg text-white px-12 py-4 mt-10 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-black-100 dark:text-neutral-200 transition duration-200 text-2xl"
          >
            browse our product collections
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
              <HomeSliderBanner banners={banners} />
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
              index={item.id}
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
        <AnimatedTestimonials testimonials={content}/>
      </section>

      <FooterBanner />
    </>
  );
};

export default Home;
