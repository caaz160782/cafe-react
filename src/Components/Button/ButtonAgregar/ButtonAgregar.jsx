import { useState } from "react";
import styles from "./ButtonAgregar.module.scss"
import ButtonCounter from "../ButtonCounter/ButtonCounter";
const ButtonAgregar = ({qty,onPlusProductClick,onlessProductClick}) => {

    const [agregar, setAgrega] = useState(false);
    const handleAgregar = () => setAgrega(true);
    return (
    <div className={styles.contbutton}>
       <div className={styles.contagregar}>
        {(qty<=0 && !agregar) &&  <button className={styles.btnAgregar} onClick={()=>{
                                                                                  handleAgregar()
                                                                                  onPlusProductClick()}
                                                                                  }>Agregar</button>
        }
        {(qty<=0 && agregar) &&  <button className={styles.btnAgregar} onClick={()=>{
                                                                                  handleAgregar()
                                                                                  onPlusProductClick()}
                                                                                  }>Agregar</button>
        }
       </div>
       <div className={styles.btnCounter}>
        {(qty>0 && !agregar) &&  <ButtonCounter qty={qty}
                                        onPlusProductClick={onPlusProductClick}
                                        onlessProductClick={onlessProductClick}
                                        />
        }
         {(qty>0 && agregar) &&  <ButtonCounter qty={qty}
                                        onPlusProductClick={onPlusProductClick}
                                        onlessProductClick={onlessProductClick}
                                        />
        }
        </div>
    </div>
    )
}
export default ButtonAgregar