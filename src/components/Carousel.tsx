import { useState } from "react";

interface CarouselProps {
    images: string[];
    thumbnails: string[];
}

export default function Carousel({ images, thumbnails }: CarouselProps){
    const [currentImage, setCurrentImage] = useState<number>(0)
    return <div>
        <img className="rounded-2xl" src={images[currentImage]} alt="" />
        <div className="flex gap-4 pt-8">
            {thumbnails.map((image) => {
                const index: number = thumbnails.findIndex((thumb) => thumb === image)
                if(currentImage===index){
                    return <div className="relative">
                        <img className="rounded-2xl" onClick={() => {setCurrentImage(index)}} src={image} alt="" />
                        <div className="absolute bg-white opacity-50 top-0 left-0 bottom-0 right-0 border-2 border-[#febc87] rounded-2xl hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                }
                else{
                    return <div>
                    <img className="rounded-2xl" onClick={() => {setCurrentImage(index)}} src={image} alt="" />
                </div>
                }
               
            })}
        </div>
    </div>
}