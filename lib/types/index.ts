import { Category, Product, Variant } from "@prisma/client";

export type FullProductType = Product & {
  categories: Category[]
  variants: Variant[]
}