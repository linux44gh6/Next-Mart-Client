import { IProduct } from "@/Types/product";
import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
 export interface CartProduct extends IProduct {
  quantity: number;
}
interface initialState {
  products: CartProduct[];
}
const initialState: initialState = {
  products: [],
};
const cartSlice=createSlice({
  name:'cart',
  initialState,
reducers:{
 
    addProduct:(state,action)=>{
      const addToProduct=state.products.find((product)=>product._id===action.payload._id)
      
      if(addToProduct){
        addToProduct.quantity+=1
        return;
      }else{
        state.products.push({...action.payload,quantity:1})
      }
        
    }
}
})
//get the order products from cart
export const orderProductSelector=(state:RootState)=>state.cart.products
//export the reducer
export const {addProduct}=cartSlice.actions
export default cartSlice.reducer