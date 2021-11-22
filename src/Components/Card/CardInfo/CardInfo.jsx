import styles from './CardInfo.module.scss'

const CardInfo = ({txtinfo,totalCartArt}) => {
     return (
       <div className={styles.contentinfo}>
            <span>Cantidad:{txtinfo}</span>
            <span>Total:{totalCartArt}</span>
       </div>
    )
 }
 
export default CardInfo