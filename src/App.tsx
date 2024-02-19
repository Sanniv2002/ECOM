import p1 from "./assets/image-product-1.jpg"
import p2 from "./assets/image-product-2.jpg"
import p3 from "./assets/image-product-3.jpg"
import p4 from "./assets/image-product-4.jpg"

import t1_t from "./assets/image-product-1-thumbnail.jpg"
import t2_t from "./assets/image-product-2-thumbnail.jpg"
import t3_t from "./assets/image-product-3-thumbnail.jpg"
import t4_t from "./assets/image-product-4-thumbnail.jpg"

import Carousel from "./components/Carousel"
import { useState } from "react";
import Description from "./assets/Description"


function App() {
  const [qty, setQty] = useState<number>(0)

  const images = [p1, p2, p3, p4]
  const thumbnails = [t1_t, t2_t, t3_t, t4_t]


  return (
    <div> 
      <div className="flex border-b border-gray-200 mx-36 mt-10">
        <div className="flex">
          <h2 className="font-bold text-3xl text-[#202226] pb-10 pr-14">sneakers</h2>
          <button className="text-[#a8aaad] pb-8 mr-7 hover:text-black hover:border-b-4 border-orange-500 transition-all duration-150">Collections</button>
          <button className="text-[#a8aaad] pb-8 mr-7 hover:text-black hover:border-b-4 border-orange-500 transition-all duration-150" >Men</button>
          <button className="text-[#a8aaad] pb-8 mr-7 hover:text-black hover:border-b-4 border-orange-500 transition-all duration-150">Women</button>
          <button className="text-[#a8aaad] pb-8 mr-7 hover:text-black hover:border-b-4 border-orange-500 transition-all duration-150">About</button>
          <button className="text-[#a8aaad] pb-8 mr-7 hover:text-black hover:border-b-4 border-orange-500 transition-all duration-150">Contact</button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 gap-32">
        <div className=" w-[22rem]">
          <Carousel images={images} thumbnails={thumbnails} />
        </div>
        <div>
          <Description qty={qty} setQty={setQty} />
        </div>
      </div>
    </div>
  )
}

export default App
