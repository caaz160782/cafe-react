import styles from "./ButtonAgregar.module.scss"
import ButtonCounter from "../ButtonCounter/ButtonCounter";

const ButtonAgregar = ({product,qty,addToCart,resToCart}) => {

 return (
      <div className={styles.contbutton}>
      <div className={styles.contagregar}>
     { qty<=0 &&    <button className={styles.btnAgregar} onClick={ ()=>{
                                                        addToCart(product)                                                       
                                                        } 
                                                    } >Agregar</button>
     }
       </div>
       <div className={styles.btnCounter}>
       {qty>0 &&  <ButtonCounter qty={qty}
                                        product={product}
                                        addToCart={addToCart}
                                        resToCart={resToCart}
                                        />
        }
        </div>
      </div>
   )
}
export default ButtonAgregar


