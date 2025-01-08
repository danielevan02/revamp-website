'use client'

import React from "react";
import { Highlight } from "../ui/HeroHighlight";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { motion } from "framer-motion";

const Awards = () => {
  const award = [
    {
      photo: "/award/r1.png",
      desc: "Mendapatkan penghargaan Best of the Best Cooler Bag untuk GabaG di Ajang Mother & Beyond RCA 2023",
      title: "Best of the Best In Pregnant and Nursing",
    },
    {
      photo: "/award/r2.png",
      desc: "Mendapatkan penghargaan ReBi ke-14 dalam klaim Cooler Bag kami yang dijamin garansi tahan dingin minimal 16 jam",
      title: "Cooler Bag Dengan Garansi Tahan Dingin Minimal 16 Jam",
    },
    {
      photo: "/award/r3.png",
      desc: "Di tahun 2020 GabaG meluncurkan Aplikasi GabaG Managemen ASI dan Kantong ASI Kolibri Smart sebagai partner digital ibu masa kini",
      title: "Rekor Muri Sebagai Aplikasi Kantong ASI Pertama",
    },
    {
      photo: "/award/r4.png",
      desc: "Produk skincare kami yaitu GabaG Beauty sudah mendapatkan sertifikasi dari BPOM dan sudah teruji",
      title: "Gabag Beauty Sudah Tersertifikasi BPOM",
    },
    {
      photo: "/award/r5.png",
      desc: "Produk skincare kami yaitu GabaG Beauty sudah mendapatkan sertifikasi dari BPOM dan sudah teruji",
      title: "Reader's Choice Award",
    },
    {
      photo: "/award/r6.png",
      desc: "Melalui inovasi, kualitas produk, dan pelayanan yang konsisten, Gabag telah mendapatkan pengakuan sebagai salah satu merek terdepan di industri ini.",
      title: "Outstanding Achievement in Building Top Brand",
    },
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{once: true}}
    >
      <h1 className="section-title flex gap-4 justify-center">
        <span className="text-5xl md:text-7xl">Our</span> 
        <Highlight className="dark:text-white text-5xl md:text-7xl">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-yellow-300 via-yellow-100 to-yellow-700">Awards</span>
        </Highlight>
      </h1>
      <InfiniteMovingCards direction="right" speed="slow" items={award} />
    </motion.div>
  );
};

export default Awards;
