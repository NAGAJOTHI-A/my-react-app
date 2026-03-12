import React from 'react'

const BrandContainer = ({title,brands}) => {

 

  return (
    <div className='brandsection'>
     <h2 className='brandtitle'>{title}</h2>
    <div className='brandcontainer'>{
        brands.map((item,i)=>(
          <div key={i} className='brandcard'>
            <img src={item.img} alt="" />
            <div className='pricetag'>{item.price}</div>
          </div>
        ))
        }
    </div> </div>
  )
}

export default BrandContainer