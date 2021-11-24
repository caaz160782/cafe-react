import React from 'react'
import Card from '../Card/Card'
import styles from "./Cakes.module.scss"
import {useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const endpoint = `https://democoffe-34a53-default-rtdb.firebaseio.com/pasteles/.json`;

const Cakes = ({cakes,setCakes,carProducts,addToCart,resToCart}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

useEffect(
  () => {
    let elComponenteExiste = true
    fetch(endpoint).then((result) =>
      result.json().then((data) => {
        if (elComponenteExiste){
          setCakes(data);
        }
      })
  ).catch((e) => {
    console.log(e)
    setError(true)
  }).finally(()=> setLoading(false));
 return () => {
    elComponenteExiste = false
  }
}
, []);

if (loading)
return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;

if (error)
return (
  <div className="alert alert-danger">
    Error al obtener los datos. Por favor, intentar nuevamente
  </div>
);
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
      { cakes.map(({id,title,url,price}) => {
         const carItem = carProducts.find(item=> item.id === id)
         const qty= carItem?carItem.qty :0
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
              resToCart={resToCart}
            />
          )
         }) }
     </div>
    )
}

export default Cakes
