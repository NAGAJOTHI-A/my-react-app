import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Dress = () => {
  let navigate=useNavigate()
    
    let [products,setProducts]=useState([])

    useEffect(()=>{
      fetch("https://dummyjson.com/products/category/womens-dresses").then((res)=>res.json()).then(
        data => setProducts(data.products)
      )
    },[])


    let handleClick=(shoe)=>{
        console.log(shoe);
        
        
        navigate("/cart",{state:{ shoedata:shoe}}) 
    }

  return (
    <div id='mainprodcont'>
      <h2>mens-shoes Collection</h2>
    <div id='shoes'>

       {
        products.map((shoe)=>{
        return  <div key={shoe.id} id='prodcont'>
          
          <img src={shoe.thumbnail}  width={150} alt="" /> 
          
          <h4>{shoe.title}</h4>
          <h4>Rs.{shoe.price}</h4>
          <button onClick={()=>handleClick(shoe)}>ADD TO CARD</button> </div>
          
        })
       }

        
    </div> </div>
  )
}

export default Dress