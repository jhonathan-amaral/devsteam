import { useState } from 'react'

import { BsCart4 } from 'react-icons/bs'
import { useRecoilValue } from 'recoil'
import { cartState } from '@/atoms/cart'

import styles from './cartButton.module.css'
import CartMenu from '@/components/cartMenu/cartMenu'


export default function CartButton(){
    const [open, setOpen] = useState(false)
    const cart = useRecoilValue(cartState)
   
    return(
       
         <div className={styles.cartbutton}
         onClick={() => setOpen(!open)}
         >
            <BsCart4 
            size={40}
            />
            <div className={styles.quantity}>{cart.length}</div>
            {open && <CartMenu  />}
        </div>
    
    )
}