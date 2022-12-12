import { configureStore } from '@reduxjs/toolkit'

import RestaurantReducer from '../components/Restaurant.Slice'

 import MenuReducer from '../components/Menu.Slice'
 import ToppingReducer from '../components/Topping.Slice'
import cartReducer from  '../components/cart.slice'
const store =  configureStore({

    reducer: {
        Restaurant: RestaurantReducer,
        Menu: MenuReducer,
        Topping:ToppingReducer,
        Cart:cartReducer
        
    },

})



export default store;