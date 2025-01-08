"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Lens } from "../ui/Lens";

interface ProductGalleryProps {
  productPhoto?: string;
  variantPhoto?: (string | null)[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ productPhoto, variantPhoto }) => {
  const [image, setImage] = useState(productPhoto);
  const [hovering, setHovering] = useState(false);
  const imageGallery = [productPhoto, ...variantPhoto!];

  return (
    <div className="sticky items-start w-full md:w-fit lg:top-44 md:top-72 flex flex-col-reverse md:flex-row gap-3">
      {/* Desktop views for photo gallery */}
      <div className="flex md:flex-col gap-3 max-h-[500px] max-w-full w-full md:w-24 overflow-scroll scrollbar pr-1 pb-1 md:pb-0">
        {imageGallery?.map((photo, idx) => (
          <picture
            className="relative min-h-20 min-w-20 rounded-md overflow-hidden group/variant cursor-pointer"
            key={idx}
            onMouseEnter={() => setImage(photo!)}
          >
            <Image alt={photo!} src={photo!} width={200} height={200} className="object-cover h-full w-full" priority loading="eager"/>
            <div className="pointer-events-none absolute inset-0 group-hover/variant:bg-black/50 transition-all z-20" />
          </picture>
        ))}
      </div>

      <picture className="rounded-lg overflow-hidden max-w-[500px] lg:w-[500px] md:w-[400px] w-full border">
        <Lens hovering={hovering} setHovering={setHovering}>
          <Image alt={image!} src={image!} width={1000} height={1000} className="object-cover h-full w-full" />
        </Lens>
      </picture>
    </div>
  );
};

export default ProductGallery;
