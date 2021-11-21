import { useState } from "react";
import styles from "./ButtonAgregar.module.scss"
import ButtonCounter from "../ButtonCounter/ButtonCounter";
const ButtonAgregar = ({qty,onPlusProductClick,onlessProductClick}) => {

    return (
    <div className={styles.contbutton}>
       <div className={styles.contagregar}>
        {qty<=0  &&  <button className={styles.btnAgregar} onClick={()=>{
                                                                         onPlusProductClick()}
                                                                                  }>Agregar</button>
        }
       </div>
       <div className={styles.btnCounter}>
        {qty>0  &&  <ButtonCounter qty={qty}
                                        onPlusProductClick={onPlusProductClick}
                                        onlessProductClick={onlessProductClick}
                                        />
        }
        </div>
    </div>
    )
}
export default ButtonAgregar