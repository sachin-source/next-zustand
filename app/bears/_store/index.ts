import { create } from 'zustand';

// State types
interface States {
  bears: number;
}

// useBearStore
export const useBearStore = create<States>(() => ({
  bears: 0,
}));
