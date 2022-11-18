import { receiptTypes } from "../types/receiptTypes"

const initialStateB = []

export const receiptReducer = (state = { initialStateB }, action) => {
    switch (action.type) {
        case receiptTypes.reset:
            return {
                ...state,
                initialStateB: action.payload
            }
        case receiptTypes.addBurger:
            return {
                ...state,
                initialStateB: action.payload
                }
        default:
            return state
    }


}