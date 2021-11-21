import styles from "./ButtonCounter.module.scss"
const ButtonCounter = ({qty,onPlusProductClick,onlessProductClick}) => {
    return (
        <div className={styles.contcounter}>
            <div className={styles.less}> <button onClick={onlessProductClick}> <i className="fas fa-minus"></i> </button></div>
            <div> <span >{qty} pz</span>                             </div>
            <div className={styles.plus}> <button onClick={onPlusProductClick}> <i className="fas fa-plus"></i> </button> </div> 
        </div>
    )
}

export default ButtonCounter
