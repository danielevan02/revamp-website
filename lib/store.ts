import { create } from 'zustand'

type Modal = {
  isOpen: boolean
  close: (newState:boolean) => void 
}

export const useModalState = create<Modal>((set) => ({
  isOpen: false,
  close: (newState) => set({isOpen: newState})
}))
