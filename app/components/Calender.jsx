'use client'
const   Calender= () => {
    const date=new Date()
    const year=date.getFullYear()
    const month=date.getMonth()
    const months=[
        "janvier ",
        "février ",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "aout",
        "septembre",
        "octobre",
        "novembre",
        "décembre"
    ]
    const days=[
        "dim",
        "lun",
        "mar",
        "mer",
        "jeu",
        "ven",
        "sam"
    ]
    const startday=new Date(year,month,0).getDay()
    const daycount=new Date(year,month+1,0).getDate()
    const endday=new Date(year,month,daycount+1).getDay()
    const dd=[]
    if(startday>0){
        for(let i=0;i<startday+1;i++){
            const prevdaycount=Number(new Date(year,month,0).getDate())
            console.log('start day ',startday)
              dd.push({"day":(i),"date":prevdaycount-(startday-i)})
           
        }
   
    
    }

// alert(endday)
   

    // dd.push({"day":6,"date":24})
    // dd.push({"day":0,"date":25})
    // dd.push({"day":1,"date":26})
    // dd.push({"day":2,"date":27})
    // dd.push({"day":3,"date":28})
    // dd.push({"day":4,"date":29})
    for(let i=1;i<=daycount;i++){
        const startday=new Date(year,month,i).getDay() 
        const prevdaycount=new Date(year,month,0).getDate()
     
        dd.push({"day":new Date(year,month,i).getDay(),"date":i})
    }


    if(endday<6){
        console.log('end at '+endday)
        for(let i=endday;i<7;i++){
            const prevdaycount=Number(new Date(year,month,0).getDate())
            console.log('start day ',startday)
              dd.push({"day":i,"date":i})
           
        }
   
    
    }


    const calen=()=>{
        const startday=new Date(year,month,0).getDay()/*return then number of day[0,...6] in the week for the last day in
        the previous month
        the first day in the week is sunday number 0*/
        const daycount=new Date(year,month+1,0).getDate() /*Date(year,month+,0).getDate()the last day in the previous month
         "count of day of previous month"
         so Date(year,month+1,0).getDate() retun the count of days of the current month
         */
        console.log('start:'+startday+', end '+daycount)
        return 'start:'+startday+', end '+daycount+'month:'+month
    }
    return  <div className=" flex justify-between bg-blue-950
     text-white ml-[10px]   my-[10px] rounded-md w-full h-full">
        {/* {calen()} */}
{days.map((day,index)=>{
   
    return<div className="flex flex-col justify-center mx-[1%] w-[10.5%]">
        <div className=" flex  text-blue-400 font-bold text-[10px] xs:text-[10px] sm:text-[12px]">{day}</div>
        {dd.map(d=>{
            if(d.day==index){
                return<div className={`flex relative text-center border-b-[1px] border-white m-[3px]
                 ${(d.day==new Date().getDay() && (d.date==new Date().getDate()))?'text-yellow-400':'text-white'}`}>
                    {d.date}
                    <div className={` absolute w-[25px] h-[25px] rounded-full left-[-5px] border-yellow-300 border-[2px]
                   ${(d.day==new Date().getDay() && (d.date==new Date().getDate()))?'flex':'hidden'}
                  
                  `}></div>
                    </div>
            }
        })
        
        }
      
    </div>
})}
 {/* {dd.map(d=>{return <div>{days[d.day]} {d.date}</div>})} */}
    </div>
}
 
export default Calender ;