import Input from '../forms/input/input'
import Logo from '../logo/logo'
import styles from './navbar.module.css'
import { BsCart4 } from'react-icons/bs'


export default function Navbar(){
return(
    <div className={styles.navbar}>
        <Logo/>
        <div className={styles.search}>
            <Input placeholder="Buscar" fullWidth type="text"/>
        </div>
        <BsCart4 size={40}/>
    </div>
)
}