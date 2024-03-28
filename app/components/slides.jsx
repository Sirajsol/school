'use client'
import Image from 'next/image'
import m1 from './1.jpg'
import m2 from './2.jpg'
import m3 from './4.jpg'
import m4 from './6.jpg'
import { useEffect, useState } from "react";

const Slides = () => {
    const mm=[{"im":m1,"desc":"hi"},
    {"im":m2,"desc":"how"},
    {"im":m3,"desc":"are"},
    {"im":m4,"desc":"you"},


]
let i=0
useEffect(()=>{
    
    const u=setInterval(() => {
       { setCurrent(i)
            i++}
           if(i==4){i=0}
       
    }, 2000);
    return ()=>clearInterval(u)
    
    // setTimeout(() => {
       
    // }, 3500);
},[])

    const[current,setCurrent]=useState(0)
    return  <div className=' flex overflow-hidden w-screen h-[250px] xs:h-[300px] sm:h-[500px] md:h-[800px] relative '>
     {/* <div className='flex relative w-screen  h-[600px] justify-center   items-center border-[2px] '
    > */}
     <div className='flex w-screen  h-full justify-start items-center  transition-transform ease-in-out duration-500'
     style={{transform:`translateX(-${current*100}%)`}}
    >
 {mm.map((m,index)=>{
    return( <div key={index} className='flex w-full h-full  items-center flex-col ' 
  
    >
    <div className='flex w-screen h-[250px] xs:h-[300px] sm:h-[500px] md:h-[800px] relative border-[1px]'>
<Image src={mm[index].im} alt='' className='w-full h-full object-cover opacity-100 transition duration-300 aspect-square'/>

    </div>
    <h3 className=' flex absolute text-[40px] 
    top-[60%] tracking-[5px] font-serif font-[700] text-white 
    '>{mm[index].desc}{current}</h3>
    {/* <div className='h-[30px] w-[30px] rounded-full border-[2px]'
    // onClick={()=>{setCurrent(index-1)}}
    ></div> */}
    </div>)
 })}
  
    </div>
    <div className='flex w-[30%] xs:w-[25%] ml-[40%] mt-[40%] absolute justify-between items-center'>
   {mm.map((m,index)=>{return <div key={index} className={`h-[15px] w-[15px] sm:h-[30px] sm:w-[30px]
    rounded-full border-[2px] ${current==index?'bg-white':'bg-transparent'}`}
    onClick={()=>{setCurrent(index)}}
   ></div>})
    
   }
   </div>
    </div>
    // </div>
}
 
export default Slides;