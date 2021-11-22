import React from 'react'
import Card from '../Card/Card'
import styles from "./Cakes.module.scss"

import { useEffect } from "react";

const endpoint = `https://democoffe-34a53-default-rtdb.firebaseio.com/pasteles/.json`;

const Cakes = ({cakes,setCakes,carProducts,addToCart,resToCart}) => {
  useEffect(() => {
        fetch(endpoint).then((res) => {
        res.json().then((data) => {
          if(carProducts.length ===0){
             setCakes(data);
           }
        });
      });
    },
    [setCakes]);

//console.log(cakes)

const changeQtyP=(product)=>{
      const {id,title,url,price}=product
          if(cakes.find(p =>p.id === product.id)){
                const newCafes= cakes.map(x=>x.id === product.id
                   ?({...x,qty:x.qty +1  })
                   :x)
            return   setCakes(newCafes)
           }
            return   setCakes(
            [...cakes, { id,title,url,price,qty:1 }])
     }

const changeQtyM=(product)=>{
     if(cakes.find(p =>p.id === product.id)){
       const newCafes= cakes.map(x=>x.id === product.id
         ?({...x,qty:x.qty -1  })
         :x)
       return setCakes(newCafes)
     }
   }

   const onMediumClick = (id) => {
    const newProducts = cakes.map((product) => {
      if (product.id !== id) return product;
      else return { ...product, price: product.price+15 };
    });
    setCakes(newProducts);
 };

 const onNormalClick = (id) => {
  const newProducts = cakes.map((product) => {
    if (product.id !== id) return product;
    else return { ...product, price: product.price-15 };
  });
  setCakes(newProducts);
};

 return (
    <div className={styles.containercake}>
      { cakes.map(({id,title,url,price,qty}) => {
         return(
             <Card
              key={id}
              id={id}
              imgUrl={url}
              titleCard={title}
              price={price}
              txtbtn1={"Normal"}
              txtbtn2={"Mediano"}
              txtbtn3={"Grande"}
              qty={qty}
              cakes={cakes} 
              setCakes={setCakes}
              carProducts={carProducts}
              addToCart={addToCart}
              onMediumClick={onMediumClick}
              onNormalClick={onNormalClick}
              changeQtyP={changeQtyP}
              changeQtyM={changeQtyM}
              resToCart={resToCart}
            />
          )
         }) }
     </div>
    )
}

export default Cakes
