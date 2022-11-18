import { builderTypes } from "../types/builderTypes"

const cuenta =[]

export const userReducer = (state = { cuenta }, action) => {
    switch (action.type) {
        case builderTypes.CONFIM_BUILD:
            return {
                ...state,
                cuenta: action.payload,
            }
        default:
            return state
    }


}