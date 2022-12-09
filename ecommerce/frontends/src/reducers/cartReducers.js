import { CART_ADD_ITEM } from '../constants/cartConstants'

export const cartReducer = (state={cartItems:[]},action) =>{
    switch(action.type){
        case CART_ADD_ITEM:
            //to check wheter Item exists
            const item = action.payload
            const existItem = state.cartItems.find(x=>x.product === item.product)
            
            if(existItem)
            {
                    return {
                        ...state,
                        cartItems : state.cartItems.map(x=>
                            //if new product then update and replace it with item
                            x.product === existItem.product ? item : x )
                    }
            }
            //if it doesn't exist then just return the state
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }
            
        default:
            return state
    }
}