import { create, StateCreator } from 'zustand';

type Store = {
  number: number;
  setNumber: (value: number) => void;
};

const createState: StateCreator<Store> = ((set) => ({
  number: 0,
  setNumber: (value) => set({ number: value }),
}));

const useStore = create(createState);

export default useStore;