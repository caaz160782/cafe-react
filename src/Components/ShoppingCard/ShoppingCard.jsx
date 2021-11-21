import styles from "./ShoppingCard.module.scss"
const ShoppingCard = ({onPlusProduct,onTotalProduct}) => {
    return (
        <div className={styles.shop} >
             <span className={styles.infcar}>{onPlusProduct} </span>
             <span>Total :${onTotalProduct} </span>
        </div>
    )
}

export default ShoppingCard
