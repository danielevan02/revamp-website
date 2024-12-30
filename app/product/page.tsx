import FilterButton from "@/components/FilterButton";
import ProductCard from "@/components/ProductCard";
import React from "react";
import { getAllCategories, getAllProducts } from "../action/product.action.ts/productAction";

export const revalidate = 1

const Product = async () => {
  const categories = await getAllCategories()
  const products = await getAllProducts()
  
  return (
    <div className="flex relative">
      <div className="p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full h-fit">
        {products?.map((product, idx) => (
          <ProductCard 
            key={idx}
            {...product}
          />
        ))}
      </div>
      <FilterButton categories={categories}/>
    </div>
  );
};

export default Product;
