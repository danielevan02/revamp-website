import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { createClient } from "@/supabase/client";
import React from "react";

export const revalidate = 0;

const Home = async () => {
  const supabase = createClient();

  const { data: categories } = await supabase.from("sub_categories").select("sub_name");
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
          <a href="#categories" className="shadow-[inset_0_0_0_2px_#616467] backdrop-blur-sm text-white px-12 py-4 mt-10 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-black-100 dark:text-neutral-200 transition duration-200">
            Explore
          </a>
        </div>
      </BackgroundBeamsWithCollision>
      <div id="categories" className="h-96">d</div>
    </>
  );
};

export default Home;
