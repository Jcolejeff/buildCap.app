import { StateCreator } from 'zustand';
import { authDetailsInterface, planTypes } from 'types';

export type mainContractorStateType = {
  mainContractorName: string;
  setmainContractor: (arg: string) => void;
};

const mainContractorStore: StateCreator<
  mainContractorStateType,
  [['zustand/devtools', never]],
  []
> = (set) => ({
  mainContractorName: 'jeff',
  setmainContractor: (arg) => {
    set({ mainContractorName: arg });
  },
});

export default mainContractorStore;
