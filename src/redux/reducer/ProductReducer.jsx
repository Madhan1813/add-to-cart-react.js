import { ActionType } from "../contents/ActionType"

const initialState = {
    products:[]
}
export const productReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return {...state, products:payload};
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }

}

export const selectProductsReducer = (state={}, { type, payload }) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return {...state, ...payload};
    
        default:
           return state;
    }
}

export const addselectProductReducer = (state={}, { type, payload }) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return {...state, ...payload};
    
        default:
           return state;
    }
}