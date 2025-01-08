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

export const getProduct = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId
    },
    include: {
      variants: true,
      categories: {
        include: {
          products: {
            include: {
              categories: true,
              variants: true
            }
          },
        }
      }
    }
  })

  return product
}

export const getAllProducts = async (productName?: string, categories?: string[], minPrice?: number, maxPrice?: number) => {
  
  const newMinPrice = !minPrice ? undefined : isNaN(minPrice) ? undefined : minPrice
  const newMaxPrice = !maxPrice ? undefined : isNaN(maxPrice) ? undefined : maxPrice
  
  const products = await prisma.product.findMany({
    where: {
      AND: [
        // Filter berdasarkan nama produk
        productName
          ? {
              name: {
                contains: productName,
                mode: "insensitive", // Optional: membuat pencarian case-insensitive
              },
            }
          : {},

        // Filter berdasarkan kategori
        categories
          ? {
              categories: {
                some: {
                  id: {
                    in: categories,
                  },
                },
              },
            }
          : {},

        // Filter berdasarkan harga
        {
          OR: [
            // Produk dengan harga langsung
            {
              price: {
                gte: newMinPrice,
                lte: newMaxPrice,
              },
            },

            // Produk dengan harga dari varian
            {
              variants: {
                some: {
                  price: {
                    gte: newMinPrice,
                    lte: newMaxPrice,
                  },
                },
              },
            },
          ],
        },
      ],
    },
    include: {
      categories: true,
      variants: true,
    },
  });

  return products
}