import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from './UserContext'
import axios from "axios"


const Shoes = () => {

    let {category}=useParams()

    let navigate=useNavigate()  
    let [products,setProducts]=useState([])
    let {state}=useContext(UserContext)

    useEffect(()=>{
      fetch(`https://dummyjson.com/products/category/${category}`).then((res)=>res.json()).then(
        data => setProducts(data.products)
      )
    },[category])


    let handleClick=async (shoe)=>{
        console.log(shoe);
         if(!state){
          navigate("/login")
          return
         }

         try {

          let res=await axios.get(
            `https://my-react-app-pojg.onrender.com/cart?userEmail=${state.email}&productId=${shoe.id}`
          );

          if (res.data.length>0) {
            alert("Product Already in Cart")
            return
          }

          await axios.post("https://my-react-app-pojg.onrender.com/cart",{
            userEmail: state.email,
            productId: shoe.id,
            title: shoe.title,
            price: shoe.price,
            thumbnail: shoe.thumbnail
          })
          navigate("/cart")
          
         } catch (error) {
           console.log(error);
           
         }
        
    }
    
    let convertToINR=(usd)=>{
        return (usd*83).toFixed(2)
    } 

  return (
    <div id='mainprodcont'>
      <h2>{category} Collection</h2>
    <div id='shoes'>

       {
        products.map((shoe)=>{
        return  <div key={shoe.id} className='prodcont'>
          
          <img src={shoe.thumbnail}  width={150} alt="" /> 
          
          <h4>{shoe.title}</h4>
          <h4>Rs.{convertToINR(shoe.price)}</h4>
          <button onClick={()=>handleClick(shoe)}>
            { state ? "Add To Cart": "Login To Add"}  
          </button> </div>
          
        })
       }

        
    </div> </div>
  )
}

export default Shoes