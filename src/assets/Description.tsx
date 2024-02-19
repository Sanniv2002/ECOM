import { Dispatch, SetStateAction } from "react";
import plus from "../assets/icon-plus.svg"
import minus from "../assets/icon-minus.svg"
import basket from "../assets/icon-cart.svg"

interface itemProps{
    qty: number,
    setQty: Dispatch<SetStateAction<number>>
}

export default function Description(props: itemProps){
    return <div className="flex flex-col">
        <h2 className="text-orange-400 text-sm font-bold">SNEAKER COMPANY</h2>
        <h2 className="text-5xl font-bold text-black">Fall Limited Edition Sneakers</h2>
        <p className="text-[#95969c] text-sm">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className="flex gap-4">
            <h2 className="text-black font-bold text-xl">$125.00</h2>
            <h2 className="text-[#ff8e34] font-bold bg-[#ffeddf] rounded-xl px-3 py-[0.125rem]">50%</h2>
        </div>
        <div className="flex gap-4">
            <div className="flex gap-4 bg-[#f7f8fd] rounded-xl">
                <h2 onClick={() => props.setQty( props.qty===0? 0 :props.qty-1)} className="pl-3 font-bold text-orange-500 text-5xl hover:opacity-60 transition-opacity duration-150 cursor-pointer">-</h2>
                <h2 className="px-2 py-4 text-lg font-bold">{props.qty}</h2>
                <h2 onClick={() => props.setQty(props.qty+1)} className="p-2 font-bold text-orange-500 text-3xl hover:opacity-60 transition-opacity duration-150 cursor-pointer">+</h2>
            </div>
            <div className="flex gap-10">
                <img src={basket} alt="" />
                <h2 className="text-nowrap">Add to cart</h2>
            </div>
        </div>
    </div>
}