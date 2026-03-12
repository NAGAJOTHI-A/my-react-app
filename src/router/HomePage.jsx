import React from 'react'
import ImageSlider from './ImageSlider'
import BrandContainer from './BrandContainer'

const HomePage = () => {

  const brandsections=[
    {
      title: "Top Makeup Brands",
      brands:[
        {img:"/lakme.webp",price:"Under Rs.499"},
        {img:"/loreal.jpg",price:"Under Rs.899"},
        {img:"/mac.webp",price:"Start Rs.1499"},
        {img:"/sugar.jpg",price:"Under Rs.699"},
        {img:"/facescanada.webp",price:"Under Rs.599"}
      ]
    },{
      title: "Top Mens Clothing Brands",
      brands:[
        {img:"/blackberry.jpg",price:"Start Rs.1999"},
        {img:"/ralph.jpg",price:"Start Rs.3999"},
        {img:"/levis.webp",price:"Start Rs.2499"},
        {img:"/gucci.jpg",price:"Start Rs.14999"},
        {img:"/louis.jpg",price:"Start Rs.4999"}
      ]
    },{
      title: "Top Skincare Brands",
      brands:[
        {img:"/plom.png",price:"Under Rs.699"},
        {img:"/minimalist.webp",price:"Under Rs.599"},
        {img:"/derma.webp",price:"Under Rs.799"},
        {img:"/cerave.webp",price:"Start Rs.1499"},
        {img:"/dotkey.jpg",price:"Start Rs.399"}
      ]
    },,{
      title: "Top T-Shirt Brands",
      brands:[
        {img:"/adidas.webp",price:"Start Rs.1499"},
        {img:"/puma.avif",price:"Start Rs.1299"},
        {img:"/veirdo.webp",price:"Under Rs.699"},
        {img:"/orifinal.webp",price:"Under Rs.499"},
        {img:"/nike.jpg",price:"Under Rs.1899"}
      ]
    }
  ]


  return (
    <div>
      <div className='imageslider-wrapper'>
      <ImageSlider></ImageSlider>
      </div>
      {
        brandsections.map((item,i)=>(
         <BrandContainer key={i} title={item.title} brands={item.brands}></BrandContainer>
        ))
      }
    </div>
  )
}

export default HomePage