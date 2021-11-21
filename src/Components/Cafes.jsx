import React from 'react'
import Card from './Card/Card'

const Cafes = ({imgUrl, titleCard,price,qty,onNormalClick,onMediumClick ,onPlusProductClick,onlessProductClick}) => {

    return (
        <div>
            <Card
                 imgUrl={imgUrl}
                 titleCard={titleCard}
                 price={price}
                 qty={qty}
                 txtbtn1={"Normal"}
                 txtbtn2={"Mediano"}
                 txtbtn3={"Grande"}
                 onNormalClick={onNormalClick}
                 onMediumClick={onMediumClick}
                 onPlusProductClick={onPlusProductClick}
                 onlessProductClick={onlessProductClick}
             />
        </div>
    )
}

//

export default Cafes
