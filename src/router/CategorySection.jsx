import React from 'react'
import CategoryCard from './CategoryCard'

const CategorySection = () => {

  const categories=[{
    title:"Up to 60% off | Smart home ",
    items:[{img: "/smac.png", name: "AC"},
        {img: "/smlamp.jpg", name: "Lamp"},
        {img: "/smfan.png", name: "Fan"},
        {img: "/smtv.jpg", name: "TV"}]
  },{
    title:"Up to 40% off | Electronics",
    items:[{img: "/smarthm1.jpg", name: "Laptop"},
        {img: "/smarthm2.jpg", name: "Smart watch"},
        { img: "/smarthm3.jpg", name: "Tablet"},
        {img: "/smarthm4.jpg", name: "Accessories"}]
  },{
    title:"Up to 70% off | Furniture",
    items:[{ img: "/furni1.webp", name: "Bed"},
        {img: "/furni2.webp", name: "Sofa"},
        {img: "/furni3.jpg", name: "Chair"},
        {img: "/furni4.jpg", name: "Table" }]
  },{
    title:"Up to 80% off | Home decor",
    items:[{ img: "/decor1.webp", name: "Decor items" },
        {img: "/decor2.webp", name: "Kitchen"},
        {img: "/decor3.webp", name: "Furniture"},
        {img: "/decor4.webp", name: "Lighting"}]
  },{
    title: "Up to 50% off | Fashion",
    items: [
      { img: "/menswear1.avif", name: "Men Wear" },
      { img: "/womenswear.jpg", name: "Women Wear" },
      { img: "/footwear.jpg", name: "Footwear" },
      { img: "/bagwear.jpg", name: "Bags" }
    ]
  },{
  title: "Up to 75% off | Kids Collection",
  items: [
    { img: "/kidswear1.jpg", name: "Toys" },
    { img: "/kidswear2.jpg", name: "Clothing" },
    { img: "/kidswear3.jpg", name: "School Bags" },
    { img: "/kidswear4.jpg", name: "Footwear" }
  ]
},{
  title: "Up to 55% off | Sports & Fitness",
  items: [
    { img: "/gym equipment.webp", name: "Gym Equipment" },
    { img: "/gymshoes.jpg", name: "Shoes" },
    { img: "/trackpants.webp", name: "Track Pants" },
    { img: "/gym accessory.jpg", name: "Accessories" }
  ]
},{
  title: "Up to 65% off | Beauty & Makeup",
  items: [
    { img: "/lipstick1.webp", name: "Lipstick" },
    { img: "/fountationcategory.jpg", name: "Foundation" },
    { img: "/skincarecategory1.webp", name: "Skincare" },
    { img: "/perfumecategory.jpg", name: "Perfume" }
  ]
} ]

  return (
    <div className='categorysection'>
        {
            categories.map((cat,i)=>(
               <CategoryCard key={i} {...cat}></CategoryCard>
            ))
        }
    </div>
  )
}

export default CategorySection