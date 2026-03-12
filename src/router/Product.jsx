import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {

    let categories=[ { slug: "beauty", name: "Beauty" ,image: "/beauty.webp"},
  { slug: "fragrances", name: "Fragrances" ,image: "/fra.png"},
  { slug: "furniture", name: "Furniture" ,image: "/fur.webp"},
  { slug: "groceries", name: "Groceries" ,image: "/grocery.png"},
  { slug: "home-decoration", name: "Home Decoration",image: "/decor.png" },
  { slug: "kitchen-accessories", name: "Kitchen Accessories" ,image: "/kitchen.png"},
  { slug: "laptops", name: "Laptops" ,image: "/laptops.png"},
  { slug: "mens-shirts", name: "Mens Shirts" ,image: "/menshirt.png"},
  { slug: "mens-shoes", name: "Mens Shoes" ,image: "/menshoe.png"},
  { slug: "mens-watches", name: "Mens Watches" ,image: "/menwatch.png"},
  { slug: "mobile-accessories", name: "Mobile Accessories" ,image: "/headphone.png"},
  { slug: "motorcycle", name: "Motorcycle" ,image: "/bike.png"},
  { slug: "skin-care", name: "Skin Care" ,image: "/skincare.png"},
  { slug: "smartphones", name: "Smartphones" ,image: "/phone.png"},
  { slug: "sports-accessories", name: "Sports Accessories" ,image: "/sports.png"},
  { slug: "sunglasses", name: "Sunglasses" ,image: "/sunglasses.png"},
  { slug: "tablets", name: "Tablets" ,image: "/tablet.png"},
  { slug: "tops", name: "Tops" ,image: "/womentops.png"},
  { slug: "vehicle", name: "Vehicle" ,image: "/vehicle.png"},
  { slug: "womens-bags", name: "Womens Bags" ,image: "/womenbags.png"},
  { slug: "womens-dresses", name: "Womens Dresses" ,image: "/womendress.png"},
  { slug: "womens-jewellery", name: "Womens Jewellery" ,image: "/womenjewel.png"},
  { slug: "womens-shoes", name: "Womens Shoes" ,image: "/womenshoe.png"},
  { slug: "womens-watches", name: "Womens Watches" ,image: "/womenwatch.png"}]

  return (
    <div >
        <ul className='prodnavbar'>

            { categories.map((cat)=>(
                <li key={cat.slug}>
                    
                <Link to={`/product/${cat.slug}`} className='prodnavlink'>
                <img src={cat.image} alt={cat.name} />
                <span>{cat.name}</span></Link>
                </li>
            ))}         
       </ul>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Product