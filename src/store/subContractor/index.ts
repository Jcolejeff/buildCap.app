import { StateCreator } from 'zustand';
import { authDetailsInterface, planTypes } from 'types';

export type subContractorStateType = {
  subContractorName: string;
  setsubContractor: (arg: string) => void;
};

const subContractorStore: StateCreator<
  subContractorStateType,
  [['zustand/devtools', never]],
  []
> = (set) => ({
  subContractorName: 'jeff',
  setsubContractor: (arg) => {
    set({ subContractorName: arg });
  },
});

export default subContractorStore;
