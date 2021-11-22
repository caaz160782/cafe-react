import React from 'react'
import Card from '../Card/Card'
import styles from "./CardShop.module.scss"

const Carshop = ({carProducts,setCarProducts}) => {
   
 
  const constPriceTotArt= carProducts.map((product)=>{
     let toP =product.qty * product.price
     const newCarShop = {...product, total:toP }
     return newCarShop
    })

 return (
        <div className={styles.containercarshop}>
         { constPriceTotArt.map(({id,title,url,price,qty,total}) => {
         return(
             <Card
              key={id}
              id={id}
              imgUrl={url}
              titleCard={title}
              price={price}
              txtinfo={qty}
              totalCartArt={total}
             />
          )
         }) }
        </div>
    )
}

export default Carshop
