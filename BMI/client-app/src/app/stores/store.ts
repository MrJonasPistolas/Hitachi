import { createContext, useContext } from 'react';
import BMIStore from './bmiStore';
import CommonStore from './commonStore';

interface Store {
    bmiStore: BMIStore;
    commonStore: CommonStore;
}

export const store: Store = {
    bmiStore: new BMIStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}