import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {itemCarType, reducerDataType} from "../configs/types";

const initialState = {
    list: [],
    listModels: [],
    maxPage: 2,
} as reducerDataType
export const reducerSlice = createSlice({
    name: 'base',
    initialState: initialState,
    reducers: {
        setList: (state, action: PayloadAction<{list: itemCarType[], maxPage: number}>) => {
            state.list = action.payload.list;
            state.maxPage = action.payload.maxPage;
        },
        appendList: (state, action: PayloadAction<{list: itemCarType[], maxPage: number}>) => {
            state.list = [...state.list,...action.payload.list];
            state.maxPage = action.payload.maxPage;
        },
        clearList:  (state) => {
            state.list = []
            state.maxPage = 2;
        },
        setModels: (state, action: PayloadAction<{list: string[]}>) => {
            state.listModels = action.payload.list;
        },
    },
});

export const {setList, appendList, clearList, setModels } = reducerSlice.actions

export default reducerSlice.reducer