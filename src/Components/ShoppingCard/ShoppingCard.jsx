import styles from "./ShoppingCard.module.scss"
const ShoppingCard = ({carProducts}) => {

  const productTotal= carProducts.reduce((accumm,product) => {
    return accumm+product.qty
    },0);
  
    const TotalPrice=carProducts.reduce((accum,product)=>{
        return parseFloat(accum+ product.price *product.qty)
     },0)

    return (
        <div className={styles.shop} >
             <span className={styles.infcar}>{productTotal} </span>
             <span>Total :${TotalPrice} </span>
        </div>
    )
}

export default ShoppingCard
