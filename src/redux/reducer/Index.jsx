import { combineReducers } from "redux"
import { productReducer, selectProductsReducer, addselectProductReducer } from "./ProductReducer";


const redusers = combineReducers({
    allProducts: productReducer,
    product:selectProductsReducer,
    singleproduct:addselectProductReducer,
});

export default redusers