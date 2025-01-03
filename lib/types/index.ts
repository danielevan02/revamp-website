import { Category, Product, Variant } from "@prisma/client";

export type FullProductType = Product & {
  categories: Category[]
  variants: Variant[]
}

export type CategoriesWithProduct = Category & {
  products: (Product & {
    variants: Variant[];
  })[];
}