import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import authSlice, { AuthStateType } from './auth';
import supplierStore, { SupplierStateType } from './supplier';
import subContractorStore, { subContractorStateType } from './subContractor';
import adminStore, { adminStateType } from './admin';
import mainContractorStore, { mainContractorStateType } from './mainContractor';

// export type StoreType = StoreStateType;

// const useStore = create<StoreType>()(
//   persist(
//     devtools((...a) => ({
//       ...storeSlice(...a),
//     })),
//     {
//       name: 'store',
//     },
//   ),
// );

export type StoreType = AuthStateType &
  SupplierStateType &
  subContractorStateType &
  adminStateType &
  mainContractorStateType;

const useStore = create<StoreType>()(
  persist(
    devtools((set, get, api) => ({
      ...authSlice(set, get, api),
      ...supplierStore(set, get, api),
      ...subContractorStore(set, get, api),
      ...adminStore(set, get, api),
      ...mainContractorStore(set, get, api),
    })),
    {
      name: 'store',
    },
  ),
);

export default useStore;

// export default useStore;
