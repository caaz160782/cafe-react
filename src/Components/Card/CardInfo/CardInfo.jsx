import styles from './CardInfo.module.scss'

const CardInfo = ({onMediumClick }) => {
     return (
        <div className={styles.contentCard}>
           <div></div>
           <div><button  onClick={onMediumClick} className="btnsize" >Mediano</button></div>
           <div><button className="btnsize" >Grande</button></div>
           <div></div>

      </div>
    )
 }
 
export default CardInfo