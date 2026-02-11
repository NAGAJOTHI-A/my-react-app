import React from 'react'
import Data from './Data'

const Product = (props) => {
  console.log(props)
  return (
    <Data lio={props.max}></Data>
  )
}

export default Product