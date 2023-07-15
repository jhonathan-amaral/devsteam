import Image from 'next/image'
import style from './gameCard.module.css'
import Button from '@/components/forms/button/button'

export default function GameCard({image,title,category,fullPrice}){
    return(
        <div className={style.gamecard}>
            <Image className={style.image} src={`/products/${image}`} width={300} height={145}/>
            <div className={style.info}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.category}>{category}</p>
                <div className={style.pricing}>
                    <h2 className={style.price}>R${fullPrice}</h2>
                    <Button >Adicionar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}


GameCard.defaultProps={
    image:"counter-strike.jpg",
    title:"Counter strike: Global offensive",
    category:"Ação, estratégia, multijogador.",
    fullPrice:"90,90"

}