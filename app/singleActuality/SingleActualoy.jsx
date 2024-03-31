import Style from './SingleActuality.module.css'
import m1 from '../components/4.jpg'
import Image from 'next/image';
const SingleActuality = ({id}) => {
    return <div className={Style.container}>
        <div className={Style.title}>title i thing it is ammazing</div>
        <div className={Style.img}>
            <Image src={m1} alt='' className='object-cover w-full h-full'/>
        </div>
        <div className={Style.desc}>description</div>
    </div>
}
 
export default SingleActuality;