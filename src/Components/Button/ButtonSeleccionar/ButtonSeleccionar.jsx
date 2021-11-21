import { useState } from "react";
import styles from "./ButtonSeleccionar.module.scss"

const ButtonSeleccionar = ({txtbtn1,txtbtn2,txtbtn3,onNormalClick,onMediumClick}) => {
    const [seleccionado, setselecciona] = useState([1,2,3]);
    
    const handleNormal = () => setselecciona(1);
    const handleMediano= () => setselecciona(2);
    const handleGrande = () => setselecciona(3);
    
    let normal=true
    let mediano
    let grande
   switch (seleccionado) {
        case 1:
            normal=true;
            mediano=false
            grande=false
          break;
        case 2:
            normal=false;
            mediano=true
            grande=false
            break;
        case 3:
            normal=false;
            mediano=false
            grande=true
          break;
        default:
         //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
         break;
      }
    return (
        <div className={styles.contentbtnsel}>
        <div></div>
        <div><button disabled={normal}  className="btnsize" onClick={()=>{
                                                            onNormalClick()
                                                            handleNormal()
                                                                   }
                                                     }>{txtbtn1}</button></div>
        <div><button disabled={mediano} className="btnsize" onClick={()=>{
                                                       onMediumClick()
                                                       handleMediano()
                                                    }
                                                   }>{txtbtn2}</button></div>
    {/*    <div><button disabled={grande} className="btnsize"  onClick={()=>{

                                                            handleGrande()
                                                        }
                                                       }>{txtbtn3}</button></div> */}
        <div></div>
        </div>
    )
}
export default ButtonSeleccionar
