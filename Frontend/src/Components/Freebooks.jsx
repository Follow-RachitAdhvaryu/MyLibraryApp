import React from 'react'

import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebooks() {
    const filerdata=list.filter((data)=>data.category==="free")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h1 className="text-xl font-semibold pb-2">Free Offered Books</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus reprehenderit beatae a odio doloribus ex repellendus, ab perspiciatis saepe iure fuga fugiat molestias vero, expedita quia doloremque quo ad.
        </p>      
        </div>         
    
    <div>
    <Slider {...settings}>
       {filerdata.map((item)=>(
        <Cards item={item} key={item.id}></Cards>
       ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebooks