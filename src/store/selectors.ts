import type { RootState } from './store'
import {itemCarType} from "../configs/types";

export const listSelector = (state: RootState) => state.base.list;
export const listModelsSelector = (state: RootState) => state.base.listModels;
export const carInfoSelector = (state: RootState, id: string) => {
    if (!!state.base.list.length) {
        return state.base.list.find((data: itemCarType) => data?.id === id);
    }

    return null;
};
export const maxPageSelector = (state: RootState) => state.base.maxPage;