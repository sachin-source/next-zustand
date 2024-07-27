import { create } from 'zustand';

// State types
interface States {
    bears: number;
}

// Action types
interface Actions {
    increase: () => void;
    decrease: () => void;
}

const increase = (state:States) => ({ bears : state.bears + 1 })
const decrease = (state:States) => ({ bears : state.bears - 1 })

// create store and actions
export const useBearStore = create<States & Actions>((set) => ({
    bears: 0,
    increase: () => set(increase),
    decrease: () => set(decrease),
}));
