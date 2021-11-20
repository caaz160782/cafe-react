import CardImg from "./CardImg/CardImg"
import CardTitle from "./CardTitle/CardTitle"
import CardInfo from "./CardInfo/CardInfo"
import ButtonAgregar from "../Button/ButtonAgregar/ButtonAgregar"
import styles from "./Card.module.scss"


const Card = ({imgUrl, titleCard,price,qty,onMediumClick,onPlusProductClick,onlessProductClick}) => {
  
  return (
     <div className={styles.cardContainer}>
       <CardImg imgUrl={imgUrl}  />
       <CardTitle titleCard={titleCard}
                  price={price}  />
       <CardInfo  onMediumClick={onMediumClick}/>
       <ButtonAgregar
                     qty={qty}
                     onPlusProductClick={onPlusProductClick}
                     onlessProductClick={onlessProductClick}
                     />
    </div>
    )
}



export default Card
