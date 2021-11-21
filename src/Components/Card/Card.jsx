import CardImg from "./CardImg/CardImg"
import CardTitle from "./CardTitle/CardTitle"
import CardInfo from "./CardInfo/CardInfo"
import ButtonSeleccionar from "../Button/ButtonSeleccionar/ButtonSeleccionar"
import ButtonAgregar from "../Button/ButtonAgregar/ButtonAgregar"
import styles from "./Card.module.scss"

const Card = ({imgUrl, titleCard,price,qty,txtinfo,txtbtn1,txtbtn2,txtbtn3,onNormalClick,onMediumClick,onPlusProductClick,onlessProductClick}) => {
  return (
     <div className={styles.cardContainer}>
       <CardImg imgUrl={imgUrl}  />
       <CardTitle titleCard={titleCard}
                  price={price}  />
       <CardInfo txtinfo={txtinfo} />
       <ButtonSeleccionar
             txtbtn1={txtbtn1}
             txtbtn2={txtbtn2}
             txtbtn3={txtbtn3}
             onNormalClick={onNormalClick}
             onMediumClick={onMediumClick}
       />
       <ButtonAgregar
                     qty={qty}
                     onPlusProductClick={onPlusProductClick}
                     onlessProductClick={onlessProductClick}
                     />
    </div>
    )
}
export default Card
