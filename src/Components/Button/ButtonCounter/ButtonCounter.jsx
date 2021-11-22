import styles from "./ButtonCounter.module.scss"
const ButtonCounter = ({product,qty,addToCart,resToCart,changeQtyP,changeQtyM}) => {

   return (
        <div className={styles.contcounter}>
            <div className={styles.less}> <button onClick={()=>{
                                                       resToCart(product)
                                                       changeQtyM(product)
                                                    }
                                             }> <i className="fas fa-minus"></i> </button></div>
            <div> <span >{qty} pz</span>                             </div>
            <div className={styles.plus}> <button onClick={()=>{
                                                               addToCart(product)
                                                               changeQtyP(product)
                                                   }}> <i className="fas fa-plus"></i> </button> </div> 
        </div>
    )
}

export default ButtonCounter
