'use client'

import Image from "next/image";
import im from './acheivments.png'
const Establishments = () => {
    return <div className=" flex flex-col  w-screen h- my-[20px]">

        <div className=" flex  mx-auto justify-center tracking-[5px] my-[10px]
        border-b-[1px] text-[11px] xs:text-[13px] sm:text-[21px] md:text-[27px] border-b-red-600">L’ÉTABLISSEMENT EN CHIFFRES</div>

        <div className="flex w-screen justify-center relative   ">
<Image  src={im} alt=""  className=" w-full h-full object-cover  "/>

        </div>
    </div>
}
 
export default Establishments;