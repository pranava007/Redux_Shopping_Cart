import { configureStore } from "@reduxjs/toolkit";
import cartRaducer from "./CartSlice";

const store = configureStore({
    devTools:false,
    reducer:{
        
        cart:cartRaducer

        
    }
})

export default store;