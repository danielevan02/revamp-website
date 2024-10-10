import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import { FocusCards } from "@/components/ui/FocusCard";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { createClient } from "@/supabase/client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const revalidate = 0;

const Home = async () => {
  const supabase = createClient();

  const { data: categories } = await supabase.from("sub_categories").select("sub_name, photo");
  const { data: slider } = await supabase.from("slider").select();
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
          <TextGenerateEffect words="Breastfeeding Lifestyle Solution" duration={0.8} />
          <a
            href="#categories"
            className="shadow-[inset_0_0_0_2px_#616467] backdrop-blur-sm text-white px-12 py-4 mt-10 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-black-100 dark:text-neutral-200 transition duration-200"
          >
            Explore
          </a>
        </div>
      </BackgroundBeamsWithCollision>

      <section className="w-full flex justify-center items-center py-10">
        <Carousel className="max-w-6xl mx-10">
          <CarouselContent className="w-full">
            {slider?.map((item) => (
              <CarouselItem key={item.id} className="w-full">
                <Card className=" w-full overflow-hidden flex p-0 items-center justify-center object-cover">
                  <Image
                    src={item.image}
                    width={1000}
                    height={1000}
                    alt={item.banner!}
                    className="object-contain w-full"
                  />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section id="categories" className="mx-10">
        <h1 className="w-full text-center md:mt-28 mt-16 mb-10 md:text-5xl text-4xl font-thin">CATEGORIES</h1>
        <FocusCards cards={category} />
      </section>
    </>
  );
};

export default Home;
