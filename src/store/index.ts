import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import storeSlice, { StoreStateType } from './auth';

export type StoreType = StoreStateType;

const useStore = create<StoreType>()(
  persist(
    devtools((...a) => ({
      ...storeSlice(...a),
    })),
    {
      name: 'store',
    },
  ),
);

export default useStore;
