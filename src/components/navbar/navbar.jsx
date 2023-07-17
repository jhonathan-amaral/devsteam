import CartButton from '../forms/cartButton/cartButton'
import Input from '../forms/input/input'
import Logo from '../logo/logo'
import styles from './navbar.module.css'



export default function Navbar(){
return(
    <div className={styles.navbar}>
        <Logo/>
        <div className={styles.search}>
            <Input placeholder="Buscar" fullWidth type="text"/>
        </div>
        <CartButton
     
        />
    </div>
)
}