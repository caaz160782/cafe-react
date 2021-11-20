import React from 'react'
import Card from './Card/Card'

const Cafes = ({imgUrl, titleCard,price,qty,onMediumClick ,onPlusProductClick,onlessProductClick}) => {
   
    return (
        <div>
           
            <Card
                 imgUrl={imgUrl}
                 titleCard={titleCard}
                 price={price}
                 qty={qty}
                 onMediumClick={onMediumClick}
                 onPlusProductClick={onPlusProductClick}
                 onlessProductClick={onlessProductClick}
             />
        </div>
    )
}

//

export default Cafes
