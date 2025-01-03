'use server'

import prisma from "@/lib/prismadb"

export const getCategory = async (categoryId: string) => {
  const category = await prisma.category.findUnique({
    where: {
      id: categoryId
    },
    include: {
      products: {
        include: {
          categories: true,
          variants: true
        }
      }
    }
  })

  return category
}

export const getAllCategories = async () => {
  const categories = await prisma.category.findMany()

  return categories
}

export const getAllProducts = async (productName?: string, categories?: string[]) => {
  let products
  
  if(productName || categories){
    products = await prisma.product.findMany({
      where: {
        name: {
          contains: productName
        },
        categories: {
          some: {
            id: {
              in: categories
            }
          }
        }
      },
      include: {
        variants: true,
        categories: true
      }
    })
  } else {
    products = await prisma.product.findMany({
      include: {
        categories: true,
        variants: true
      }
    })
  }

  return products
}