import { combineReducers } from "redux";
import { facilitiesReducer } from "./facilities_reducer";
import { productReducer } from "./product.reducer";
import { reviewReducer } from "./review.reducer";
import cartSlice from "../../admin/component/cart/cart.slice";
import couponSlice from "../slice/coupon.slice";

export const rootReducer = combineReducers({    
    facilities :facilitiesReducer,
    product:productReducer,
    review:reviewReducer,
    cart:cartSlice,
    cartinToolkit: cartSlice,
    coupon: couponSlice
})