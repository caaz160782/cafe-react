import styles from "./ShoppingCard.module.scss"
const ShoppingCard = ({onPlusProduct,total}) => {
    return (
        <div className={styles.shop}>
           <span>{onPlusProduct}</span> <span>Total :${total}</span>
        </div>
    )
}

export default ShoppingCard
