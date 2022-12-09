import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'

//since we want to update it so we require it's id
//getState will fetch the states from store.js
export const addToCart = (id,qty) => async(dispatch,getSetate) =>{
           const{data} = await axios.get(`\api\products\${id}`)

        dispatch({
            type : CART_ADD_ITEM,
            payload : {
                product:data._id,
                name:data.name,
                image:data.image,
                price:data.price,
                countInStock : data.countInStock,
                qty
            }
        })

        localStorage.setItem('cartItems',JSON.stringify(getSetate().cart.cartItems))
}