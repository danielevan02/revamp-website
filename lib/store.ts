import { create } from 'zustand'

type NavbarHeight = {
  height: number
  setHeight: (height: number) => void
}

export const useHeight = create<NavbarHeight>((set) => ({
  height: 0,
  setHeight: (newHeight: number) => set(
    {height: newHeight}
  )
}))
