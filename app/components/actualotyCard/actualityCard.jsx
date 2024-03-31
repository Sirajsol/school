import Style from './actualotyCard.module.css'
import m4 from '../6.jpg'
import Image from 'next/image';
const ActualityCard = () => {
    return <div className={Style.container}>
        <div className={Style.img}>
            <Image src={m4} alt='fuck' className='object-cover w-full h-full'/>
         
        </div>
        
        <div className={Style.title}>geeg</div>
       
    </div>
}
 
export default ActualityCard;