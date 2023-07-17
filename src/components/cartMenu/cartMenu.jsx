import { useRecoilState } from 'recoil'
import CartOption from '../cartOption/cartOption'
import styles from './cartMenu.module.css'
import { cartState } from '@/atoms/cart'



export default function CartMenu(){

    const [cart,setCart] = useRecoilState(cartState)

    const handleRemoveProduct = (pos) => {
        setCart(cart.filter((obj, posObj) => posObj !== pos));
      }; 

    return(
        <div className={styles.menu}>
            <div className={styles.options}>
           { cart.length === 0  && <p>Nenhum produto no seu carrinho</p>}
           { cart.map((cartInfo, pos)=>
           <CartOption
            image={cartInfo.image}
            title={cartInfo.name}
            price={cartInfo.price.toFixed(2)}
           onRemove={() => handleRemoveProduct(pos)}
           key={`cart-info-${pos}`}
           />
           )}

            </div>
            <div className={styles.priceline}>
                <h2>Total</h2>
                <h2 className={styles.price}> 
                {
                cart.reduce((prev,current) => prev + current.price, 0).toFixed(2)
                }</h2>
            </div>
        </div>
    )
}