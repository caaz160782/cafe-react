

const ButtonCounter = ({qty,onPlusProductClick,onlessProductClick}) => {
    
    
    return (
        <div>
             <button onClick={onlessProductClick} > - </button>
              <span >{qty}</span>
             <button onClick={onPlusProductClick}> + </button>  
        </div>
    )
}

export default ButtonCounter
