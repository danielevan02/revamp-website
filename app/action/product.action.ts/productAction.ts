'use server'

import prisma from "@/lib/prismadb"

export const getAllCategories = async () => {
  const categories = await prisma.category.findMany()

  return categories
}

export const getAllProducts = async () => {
  const products = await prisma.product.findMany({
    include: {
      categories: true,
      variants: true
    }
  })

  return products
}