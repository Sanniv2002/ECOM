import { useState } from "react"
import cart from "../assets/icon-cart.svg"

interface contents{
    items: string[],
    corresPrices: number[],
    corresQty: number[]
}

export default function Basket(content: contents){
    const [hide, setHide] = useState<boolean>(false)
    return <div className="relative">
        <h2 className="absolute top-0 left-0 right-0 bottom-0 bg-[#fb7e1e] text-white font-bold rounded-lg h-4 w-7 pl-3 pb-7 ">{content.corresQty.reduce((a,b) => a+b, 0)}</h2>
        <img src={cart} alt="" />
    </div>
}