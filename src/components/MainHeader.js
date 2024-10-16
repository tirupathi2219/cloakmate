import { Icon } from '@mui/material';
import styles from '../styles/MainHeader.module.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const MainHeader = () => {
return(
    <section className={`${styles.headerContainer} h-[100px] place-content-center`}>
        <div className={`${styles.searchContainer} flex relative w-4/5 content-center m-auto`}>
            <input type='search' placeholder='Search...' className='block w-full text-gray-900 border-none rounded-lg bg-transparent shadow-lg shadow-gray-900 px-5 text-red-600 focus-visible:outline-none focus-visible:border-none' />
            <Icon sx={{color:'#fff', fontSize:'large'}} className='absolute right-5 h-auto '>< SearchRoundedIcon sx={{fontSize:'large'}}/></Icon>
        </div>
    </section>
)

}
export default MainHeader