import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer,productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducers = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart:cartReducer,
})

//to get the item from local storage and again converting it back from string to JS object
//if the items exist then get the item else return empty array
const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart : {cartItemsFromStorage}
};
const middleware = [thunk] //Thunk is to establish asynchronous communication from the externally present API into fetching and saving data.
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store