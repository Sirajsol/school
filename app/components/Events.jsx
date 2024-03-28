import Calender from "./Calender";
import m3 from './1.jpg'
import Image from "next/image";
const Events = () => {
    return <div className="flex flex-col w-full ">
        <div className="flex flex-col relative  ">
            <label className="flex mx-auto text-[35px] px-[20px]
         pb-[20px] border-b-[1px] border-black">ÉVÉNEMENTS</label>
                  <div className="flex absolute bg-white text-[15px] tracking-[3px] px-[5px]
                   top-[55px] left-[47%]">VOIR PLUS</div>

         </div>
         <div className="flex flex-col sm:flex-row w-full  justify-between  mt-[30px] max-h-[400px] ">
            <div className="flex flex-col w-full sm:w-[49%]  ">
            <div className=" flex w-full justify-end  ">
                <label className="border-b-[1px] border-black ">VUE CALENDRIER</label>
                </div>
                <div className=" flex  justify-center items-start h-full w-full ">
                    <Calender/>
                </div>
            </div>
            
            {/* <div className="flex flex-col w-[50%] items-center ">
                <div>VUE CALENDRIER</div>
                <div className=" flex  justify-center items-center">calender</div>
            </div> */}
            
            <div className="flex flex-col  sm:w-[49%] ">
                <div className=" flex w-full  "> <label className="border-b-[1px] border-black ">VUE AGENDA</label></div>
                <div className=" flex justify-start items-start mt-[10px] w-full sm:w-[80%] sm:mx-auto  border-[1px]  ">
                    <Image src={m3} alt="" className="w-full h-full object-cover rounded-sm xs:min-h-[300px]
                    cursor-pointer transition duration-300
                    hover:scale-105
                    hover:shadow-lg hover:shadow-black"/>
                </div>
            </div>
         </div>
    </div>
}
 
export default Events;