import React from 'react'
import Slider from "react-slick"

const ImageSlider = () => {

  const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }
  const images=[
    "/ban1.png",
    "/ban2.png",
    "/ban3.png",
    "/ban4.png",
    "/ban5.png",
    "/ban6.png"
  ];

  return (
    <div style={{ width:"90%", margin:"20px auto"}}>
       <Slider {...settings}>
        {
          images.map((img,index)=>(
            <div key={index} className='slidecontainer'>
              <img src={import.meta.env.BASE_URL +img} alt="" />
            </div>
          ))
        }
       </Slider>
    </div>
  )
}

export default ImageSlider