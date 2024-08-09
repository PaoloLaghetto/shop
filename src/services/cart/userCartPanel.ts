import { create } from "zustand";

export interface CartStateOverlay {
  open: boolean;
  toggle: () => void;
  openOverlay: () => void;
  closeOverlay: () => void;
}
export const useCartPanel = create((set, get) => ({
  open: false,
  toggle: () => set((state) => ({ open: !get().open })),
  openOverlay: () => set((state) => ({ open: true })),
  closeOverlay: () => set((state) => ({ open: false })),
}));
