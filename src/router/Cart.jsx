import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import {  useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext'

const Cart = () => {
    let navigate=useNavigate()
    let {state: user}=useContext(UserContext)

    let [cart,setCart]=useState([])
   
    let fetchCart=async ()=>{
        try {
          let res=await axios.get(`https://69c29cd47518bf8facbef36f.mockapi.io/cart?userEmail=${user.email}`)
          setCart(res.data)

        } catch (error) {
          if (error.response && error.response.status === 404) {
                setCart([]);
            } else {
            console.log(error);
          }
          
        }
    }
     
     useEffect(()=>{
        if(user)
          fetchCart()
     },[user])
     
    console.log(cart);

    let handleRemove=async (id)=>{
       await axios.delete(`https://69c29cd47518bf8facbef36f.mockapi.io/cart/${id}`)
       fetchCart()
    }
     let convertToINR=(usd)=>{
        return (usd*83).toFixed(2)
    }
    
    if(!user){
         return <div style={{textAlign:"center",marginTop:"50px"}}><h2>Login to your profile to see your cart items</h2>
         <button onClick={()=> navigate("/login")}>Go to Login</button>
         
         </div>

    }

  return (
    <div id='shoes'>{
      cart.length>0 ? ( cart.map((shoe)=>(
        <div key={shoe.id} className='prodcont'><img src={shoe.thumbnail} height={150} width={150} alt="" /> 
                    <h4>{shoe.title}</h4>
                    <h4>Rs.{convertToINR(shoe.price)}</h4>
                    <button onClick={()=>handleRemove(shoe.id)}>Remove</button>
                    </div>
      ))
       ): (<h3>No products Added to Cart</h3>)
    }
    </div>
  )
}

export default Cart