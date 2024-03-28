import Image from "next/image";
import m4 from './6.jpg'
const Actualities = () => {
    return  <div className="flex relative flex-col w-full   border-blue-950 mx-auto mb-[80px] sm:h-[800px]">
<div className=" flex  mx-auto text-[11px] xs:text-[13px] sm:text-[21px] md:text-[30px] text-black font-serif font-thin tracking-[5px] justify-center border-b-[1px]
 border-black  px-[55px]  mt-[20px] pb-[10px]">
ACTUALITÉS
</div>
<div className=" flex absolute left-[39%] xs:left-[40%] sm:left-[46%] bg-white text-[5px] xs:text-[8px] sm:text-[11px] 
top-[40px] xs:top-[40px] sm:top-[50px] md:top-[70px] tracking-[5px] px-[5px]">
    VOIR PLUS</div>


<div className=" flex flex-col md:flex-row    justify-between items-start mt-[20px] xs:mt-[25px] sm:mt-[50px] ">
    
    <div className="flex w-full md:w-[48%]   mx-auto  bg-blue-300 relative rounded-sm align-middle">
        <Image src={m4}   className=" w-full object-cover h-full md:aspect-square "/>
    </div>
    <div className="flex flex-col w-full md:w-[48%] mx-auto justify-start   relative">
        
        
        
   <label className="text-left  ml-[10px]  mr-[15px] text-[15px] sm:text-[25px] md:text-[30px] lg:text-[40px] text-black font-serif  tracking-[2px] 
            pb-[20px] font-thin">Cellule d’écoute- Formation des ambassadeurs</label> 
    
    <div className="flex relative">
        <div className="absolute flex atext-[8px] sm:text-[15px] bg-white px-[5px] 
    ">25-04-2024</div>
    <div className="flex  h-[15px] border-b-[1px] w-full"></div>
    </div>
    {/* <div className=" flex atext-[8px] sm:text-[15px] ml-[15px] bg-white
    ">25-04-2024</div> */}
      
<div className="  flex  mx-auto text-[8px] sm:text-[20px] text-black font-serif font-thin tracking-[2px] 
         justify-end items-start
    mt-[40px] pb-[10px]">
Mardi 9 novembre a eu lieu la formation des ambassadeurs avec la cellule d’écoute. Etaient présents: Chloé Imad (présidente des ambassadeurs),
 Yasmine El Masri (Vice Présidente) et Tristan Deffontaines (secrétaire). Différents comités ont été crées, […]

</div>
<div className=" flex items-end w-[50%]">
    <div className=" h-[10px] border-t-[1px] border-black w-[20%]"></div>
    <div className=" flex items-end ml-[5px] text-[8px] xs:text-[10px] sm:text-[15px]">LIRE LA SUITE</div>
</div>
{/*navigation*/}
<div className="flex justify-between w-[50%] mt-[10px] ">
        <div className=" flex h-[20px] xs:h-[25px] xs:w-[25px] sm:h-[40px]   mx-[10px]  sm:mx-[0px] w-[20px]  sm:w-[40px]   rounded-full justify-center items-center border-[1px] border-black cursor-pointer hover:bg-yellow-300 hover:shadow-md hover:shadow-blue-600 hover:border-[0px] hover:text-white">1</div>
        <div className=" flex h-[20px] xs:h-[25px] xs:w-[25px] sm:h-[40px]   mx-[10px]  sm:mx-[0px] w-[20px]  sm:w-[40px]   rounded-full justify-center items-center border-[1px] border-black cursor-pointer hover:bg-yellow-300 hover:shadow-md hover:shadow-blue-600 hover:border-[0px] hover:text-white">2</div>
        <div className=" flex h-[20px] xs:h-[25px] xs:w-[25px] sm:h-[40px]   mx-[10px]  sm:mx-[0px] w-[20px]  sm:w-[40px]   rounded-full justify-center items-center border-[1px] border-black cursor-pointer hover:bg-yellow-300 hover:shadow-md hover:shadow-blue-600 hover:border-[0px] hover:text-white">3</div>
        <div className=" flex h-[20px] xs:h-[25px] xs:w-[25px] sm:h-[40px]   mx-[10px]  sm:mx-[0px] w-[20px]  sm:w-[40px]   rounded-full justify-center items-center border-[1px] border-black cursor-pointer hover:bg-yellow-300 hover:shadow-md hover:shadow-blue-600 hover:border-[0px] hover:text-white">4</div>
        <div className=" flex h-[20px] xs:h-[25px] xs:w-[25px] sm:h-[40px]   mx-[10px]  sm:mx-[0px] w-[20px]  sm:w-[40px]   rounded-full justify-center items-center border-[1px] border-black cursor-pointer hover:bg-yellow-300 hover:shadow-md hover:shadow-blue-600 hover:border-[0px] hover:text-white">5</div>
    </div>
    </div>
    
</div>
    </div>
}
 
export default Actualities;