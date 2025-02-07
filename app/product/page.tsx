
import ProductCard from "@/components/ProductCard";
import React from "react";
import { getAllCategories, getAllProducts } from "../action/product.action.ts/productAction";
import ProductSidebar from "@/components/ProductSidebar";

const Product = async ({
  searchParams
}: {
  searchParams: {
    search: string
    categories: string
    minPrice: string
    maxPrice: string
  }
}) => {
  const categoryList = searchParams.categories?.split(',')
  const minPrice = parseInt(searchParams.minPrice) ?? undefined
  const maxPrice = parseInt(searchParams.maxPrice) ?? undefined
  const categories = await getAllCategories()
  const products = await getAllProducts(searchParams.search, categoryList, minPrice, maxPrice)
  
  return (
    <div className="bg-white relative flex flex-col md:flex-row dark:bg-neutral-800 w-full flex-1 border-r-2 border-neutral-500 dark:border-neutral-700 overflow-scroll">
      <div className="md:fixed left-0 top-0 md:h-screen md:z-50">
        <ProductSidebar categories={categories}/>
      </div>
      <div className="p-5 lg:pt-36 md:pt-28 md:pl-20 flex flex-wrap w-full h-fit min-h-screen gap-2">
        {products?.map((product, idx) => (
          <ProductCard 
            key={idx}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
