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