//after writing this go and include in store.js

import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

 } from "../constants/productConstants"


export const productListReducer = (state={products:[]},action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading : true,products:[]}

        case PRODUCT_LIST_SUCCESS:
            return {loading:false,products:action.payload}

        case PRODUCT_LIST_FAIL:
            return {loading:false,error:action.payload}   

        default:
            return state 
    }
}

// Now saving it in store
//flow--> 1)Constants-->2)Reducers-->3)Store.js-->4)Action.js--->5)ProductScreen.js
export const productDetailsReducer = (state={product:{reviews:[]}},action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading : true,...state}

        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}

        case PRODUCT_DETAILS_FAIL:
            return {loading:false,error:action.payload}   

        default:
            return state 
    }
}