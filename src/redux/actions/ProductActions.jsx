import { ActionType } from "../contents/ActionType"

export const setProducts = (products) => {
    return{
        type: ActionType.SET_PRODUCTS,
        payload:products,
    }
}

export const selectProducts = (product) => {
    return{
        type: ActionType.SELECTED_PRODUCT,
        payload:product,
    }
}
export const removeselectProduct = () => {
    return{
        type: ActionType.REMOVE_SELECTED_PRODUCT,
    }
}
export const addselectProduct = (singleproduct) => {
    return{
        type: ActionType.ADD_SELECTED_PRODUCT,
        payload:singleproduct,
    }
}