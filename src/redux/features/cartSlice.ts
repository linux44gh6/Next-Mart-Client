import { IProduct } from "@/Types/product";
import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
 export interface CartProduct extends IProduct {
  quantity: number;
}
interface initialState {
  products: CartProduct[];
  city: string;
  shippingAddress: string;
}
const initialState: initialState = {
  products: [],
  city: "",
  shippingAddress: "",
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
        
    },
    incrementQunatity:(state,action)=>{
      const product=state.products.find((product)=>product._id===action.payload)
      if(product){
        product.quantity+=1 
        return
      }  
    },
    decrementQunatity:(state,action)=>{
      const product=state.products.find((product)=>product._id===action.payload)
      if(product&&product.quantity>1){
        product.quantity-=1 
        return
      }  
    },
    removeProduct:(state,action)=>{
      state.products=state.products.filter((product)=>product._id!==action.payload)
    },
    updateCity:(state,action)=>{
      state.city=action.payload
    },
    updateShippingAddress:(state,action)=>{
      state.shippingAddress=action.payload
    }
}
})

//*for order selection products with address
export const orderSelection=(state:RootState)=>{
  return{ 
    products:state.cart.products.map((product)=>({
      productId:product._id,
      quantity:product.quantity
    })),
    shippingAddress:`${state.cart.shippingAddress}-${state.cart.city}`,
    paymentMethod:"online"
}
}
//payment details
export const calculateSubtotal=(state:RootState)=>{
  return state.cart.products.reduce((acc,product)=>{
    if(product.offerPrice){
      return acc+product.offerPrice*product.quantity
    }
    return acc+product.price*product.quantity
  },0)
}

export const shippingCostSelector=(state:RootState)=>{
  if(state.cart.city&&state.cart.city==="Dhaka"){
    return 50
  }else if(state.cart.city&&state.cart.city!=="Dhaka"){
    return 120
  }
  return 0
}

export const grandTotalSelector=(state:RootState)=>{
  return calculateSubtotal(state)+shippingCostSelector(state)
}
//get the city
export const citySelector=(state:RootState)=>state.cart.city
//get the shipping address
export const shippingAddressSelector=(state:RootState)=>state.cart.shippingAddress

//get the order products from cart
export const orderProductSelector=(state:RootState)=>state.cart.products
//export the reducer
export const {addProduct,incrementQunatity,decrementQunatity,removeProduct,updateCity,updateShippingAddress}=cartSlice.actions
export default cartSlice.reducer