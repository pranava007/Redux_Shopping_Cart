import { createSlice } from "@reduxjs/toolkit";

const producteSlice = createSlice({
    name:'cart',
    initialState:{
          products:[]
    },
    reducers:{
           
        setProducts:(state,action)=>{
            state.products = action.payload
        },
        incrementQuantity:(state,action)=>{
            const product = state.products.find(item => item.id === action.payload)
            console.log(product);
            
            if(product){
                product.quantity = (product.quantity || 1) + 1;
            }
        },

        decrementQuantity:(state,action)=>{
            const product = state.products.find(item => item.id === action.payload)
            if(product){
                product.quantity = Math.max((product.quantity || 1) -1,1)
            }
        },
        removeProduct:(state,action)=>{
            state.products = state.products.filter(item => item.id !== action.payload)
        }

    }
})

export const {setProducts, incrementQuantity, decrementQuantity, removeProduct} = producteSlice.actions;
export default producteSlice.reducer;