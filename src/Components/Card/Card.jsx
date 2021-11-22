import CardImg from "./CardImg/CardImg"
import CardTitle from "./CardTitle/CardTitle"
import CardInfo from "./CardInfo/CardInfo"
import ButtonSeleccionar from "../Button/ButtonSeleccionar/ButtonSeleccionar"
import ButtonAgregar from "../Button/ButtonAgregar/ButtonAgregar"
//import ButtonCounter from "../Button/ButtonCounter/ButtonCounter"
import styles from "./Card.module.scss"

const Card = ({id,imgUrl,titleCard,price,qty,txtinfo,totalCartArt,txtbtn1,txtbtn2,txtbtn3,addToCart,onMediumClick,onNormalClick,carProducts,resToCart,changeQtyP,changeQtyM}) => {
  const product={id,
              price,
              title:titleCard,
              url:imgUrl}



  return (
     <div className={styles.cardContainer}>
       <CardImg imgUrl={imgUrl}  />
       <CardTitle titleCard={titleCard}
                      price={price}  />
   {txtinfo &&   <CardInfo txtinfo={txtinfo}
                           totalCartArt={totalCartArt}  />
     }
   { !txtinfo &&  <ButtonSeleccionar
             txtbtn1={txtbtn1}
             txtbtn2={txtbtn2}
             txtbtn3={txtbtn3}
             onNormalClick={()=>onNormalClick(id)}
             onMediumClick={()=>onMediumClick(id)}
       />
   }
       <ButtonAgregar
                     qty={qty}
                     carProducts={carProducts}
                     product={product}
                     addToCart={addToCart}
                     changeQtyP={changeQtyP}
                     changeQtyM={changeQtyM}
                     resToCart={resToCart}
                     />  
    </div>
    )
}
export default Card
