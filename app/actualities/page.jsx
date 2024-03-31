import Style from './page.module.css'
import ActualityCard from '../components/actualotyCard/actualityCard';
import Link from 'next/link';
const Actualities = () => {
    return <div className='flex flex-wrap'><ActualityCard/>
   <Link href={`/actualities/1`}><ActualityCard/></Link> 
    <ActualityCard/>
    <ActualityCard/>
    <ActualityCard/>
    </div>
}
 
export default Actualities;