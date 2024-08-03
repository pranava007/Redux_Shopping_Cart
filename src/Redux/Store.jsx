import { configureStore } from "@reduxjs/toolkit";
import cartRaducer from "./CartSlice";

const store = configureStore({
    devTools:true,
    reducer:{
        
        cart:cartRaducer

        
    }
})

export default store;