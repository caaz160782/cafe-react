import React from 'react'
import Card from '../Card/Card'
import styles from "./Cafes.module.scss"
import { useState,useEffect, } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const endpoint = `https://democoffe-34a53-default-rtdb.firebaseio.com/cafe/.json`;

//const Cafes = ({carProducts,addToCart,resToCart,cafes,setCafes}) => {
  const Cafes = ({carProducts,addToCart,resToCart}) => {
  const [cafes, setCafes]=useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

    useEffect(
      () => {
        let elComponenteExiste = true
        fetch(endpoint).then((result) =>
          result.json().then((data) => {
            if (elComponenteExiste){
              setCafes(data);
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
  return (
        <div className={styles.containerCafe}>
           {cafes.map(({id,title,url,price}) => {
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
                 qty={qty}
                 cafes={cafes} 
                 setCafes={setCafes}
                 carProducts={carProducts}
                 onMediumClick={onMediumClick}
                 onNormalClick={onNormalClick}
                 addToCart={addToCart}               
                 resToCart={resToCart}
               />
             )
            })}
        </div>
    )
}
export default Cafes
