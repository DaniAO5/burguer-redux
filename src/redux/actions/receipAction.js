import { receiptTypes } from "../types/receiptTypes";


export const receiptReset = (initialState) => {
    return {
        type: receiptTypes.reset,
        payload: initialState,
    };
}

export const receiptAddBurger = (initialState) => {
    return {
        type: receiptTypes.addBurger,
        payload: initialState,
    };
}