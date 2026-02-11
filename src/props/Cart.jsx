import React, { Fragment } from 'react'

const Cart = (props) => {
  console.log(props)

  return (
    props.jio.products.map((magic)=>{
      console.log(magic)
       return <Fragment>
         <img src={magic.images[0]} alt="" width="200px" height="200px"/>
         <button>Add to card</button>
        </Fragment>
    })
  )
}

export default Cart