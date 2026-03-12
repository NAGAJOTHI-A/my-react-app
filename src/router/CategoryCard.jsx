import React from 'react'

const CategoryCard = ({title,items}) => {
  return (
    <div className='categorycard'>
        <h3 className='categorytitle'>{title}</h3>

        <div className='categorygrid'>
            { 
              items.map((item,i)=>(
                <div key={i} className='categoryitem'>
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                </div>
              ))
            }
        </div>

        <a href="#" className='seemore'>See more</a>
    </div>
  )
}

export default CategoryCard