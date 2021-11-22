import React from 'react'
import Card from '../Card/Card'
import styles from "./Cafes.module.scss"

import { useEffect, } from "react";

const endpoint = `https://democoffe-34a53-default-rtdb.firebaseio.com/cafe/.json`;

const Cafes = ({carProducts,addToCart,resToCart,cafes,setCafes}) => {

  
   useEffect(() => {
        fetch(endpoint).then((res) => {
        res.json().then((data) => {
          if(carProducts.length ===0){
           setCafes(data);
          }
        });
      });
    },
    [setCafes]);
 
 const onMediumClick = (id) => {
      const newProducts = cafes.map((product) => {
        if (product.id !== id) return product;
        else return { ...product, price: product.price+15 };
      });
      setCafes(newProducts);
   };
  
   const onNormalClick = (id) => {
    const newProducts = cafes.map((product) => {
      if (product.id !== id) return product;
      else return { ...product, price: product.price-15 };
    });
    setCafes(newProducts);
  };    

const changeQtyP=(product)=>{
      const {id,title,url,price}=product
          if(cafes.find(p =>p.id === product.id)){
                const newCafes= cafes.map(x=>x.id === product.id
                   ?({...x,qty:x.qty +1  })
                   :x)
            return   setCafes(newCafes)
           }
            return   setCafes(
            [...cafes, { id,title,url,price,qty:1 }])
     }

const changeQtyM=(product)=>{
     if(cafes.find(p =>p.id === product.id)){
       const newCafes= cafes.map(x=>x.id === product.id
         ?({...x,qty:x.qty -1  })
         :x)
       return setCafes(newCafes)
     }
 }

  return (
        <div className={styles.containerCafe}>
           {cafes.map(({id,title,url,price,qty}) => {
            return(
                <Card
                 key={id}
                 id={id}
                 imgUrl={url}
                 titleCard={title}
                 price={price}
                 txtbtn1={"Normal"}
                 txtbtn2={"Mediano"}
                 qty={qty}
                 cafes={cafes} 
                 setCafes={setCafes}
                 carProducts={carProducts}
                 onMediumClick={onMediumClick}
                 onNormalClick={onNormalClick}
                 addToCart={addToCart}
                 changeQtyP={changeQtyP}
                 changeQtyM={changeQtyM}
                 resToCart={resToCart}
               />
             )
            })}
        </div>
    )
}
export default Cafes
