import { Product } from '@prisma/client'
import { create } from 'zustand'

type VariantPhoto = {
  photo: string
  setVariantPhoto: (varPhoto: string) => void
}

export const useVariantPhoto = create<VariantPhoto>((set) => ({
  photo: '',
  setVariantPhoto: (varPhoto) => {
    set({photo: varPhoto})
  }
}))

type ShoppingCart = {
  product: Product[]
  setProducts: (product: Product) => void
}

export const useShoppingCart = create<ShoppingCart>((set) => ({
  product: [],
  setProducts: (product) => {
    set((state) => ({product: [...state.product, product]}))
  }
}))