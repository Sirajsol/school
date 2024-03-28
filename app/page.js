import Image from "next/image";
import Corousel from "./components/Corousel";
import Slides from "./components/slides";
import Section from "./components/section";
import Establishments from "./components/Establishment";
import Actualities from "./components/Actiualties";
import Calender from "./components/Calender";
import Events from "./components/Events";

export default function Home() {
  return (
  
   <div className="flex flex-col">
     {/* <Corousel/> */}
     {/* <h5>corousel</h5> */}
     <Slides/>
   
      <Establishments/>
      <Actualities/>
      <Events/>

      {/* <Calender/> */}
       <h5></h5>
        <h5></h5>
         <h5></h5>
          <h5></h5>
           <h5></h5>
   </div>
  );
}
