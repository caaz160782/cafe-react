import {useState, useEffect, } from "react";
//import axios from "axios"
import Nav from "./Nav/Nav"
import { Route, Routes} from "react-router-dom";
import Index from "./Index";
import Cafes from "./Cafes"
import Cake from "./Cake"
import Carshop from "./Carshop";
import './App.css';

const endpoint = `https://democoffe-34a53-default-rtdb.firebaseio.com/.json`;


function App() {
  
  /*const [carProducts, setCarProducts]=useState([]);
  const addToCart =(product)=>{
       if(carProducts.find(p =>p.id === product.id)){
         const newCarProducts= carproducts  
        //setCarProducts
       }
  }
*/

  /*const newProducts = products.map((product) => {
    if (product.id !== id) return product;
    else return { ...product, price: product.price-15 };
  });
*/

  const [products, setProducts]=useState([]);
  useEffect(
    () => {
  //    console.log('obteniendo datos de internet')
      fetch(endpoint).then((res) => {
        res.json().then((data) => {
          setProducts(data);
        });
      });
    },
    []
  );

console.log(products)
const onNormalClick = (id) => {
  const newProducts = products.map((product) => {
    if (product.id !== id) return product;
    else return { ...product, price: product.price-15 };
  });
  setProducts(newProducts);
};

const onMediumClick = (id) => {
  const newProducts = products.map((product) => {
    if (product.id !== id) return product;
    else return { ...product, price: product.price+15 };
  });
  setProducts(newProducts);
};
const onPlusProductClick = (id) => {
  const newProducts = products.map((product) => {
    if (product.id !== id) return product;
    else return { ...product, qty: product.qty +1 };
  });
  setProducts(newProducts);
};
const onPlusProduct= products.reduce((accumm,product) => {
  return accumm+product.qty
},0);

const qtyProduct= products.filter((products)=> products.qty !==0)

const onTotalProduct=qtyProduct.reduce((accum,product)=>{
   return parseFloat(accum+ product.price *product.qty)
},0)

const onlessProductClick = (id) => {
  const newProducts = products.map((product) => {
    if (product.id !== id) return product;
    else return { ...product, qty: product.qty -1 };
  });
  setProducts(newProducts);
};

const onEmptyCar = () => {
  const newProducts = products.map((product) => {
      return { ...product, qty: 0};
  });
  setProducts(newProducts);
};
  return (
    <div>
       <Nav
          onPlusProduct={onPlusProduct}
          onTotalProduct={onTotalProduct}
          onEmptyCar={() => onEmptyCar()}
       />
     <div className="container">
       <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/coffe" element={
                                      products.map(({id,title,url,price,qty})=> (
                                      <Cafes
                                        key={id}
                                        imgUrl={url}
                                        titleCard={title}
                                        price={price}
                                        qty={qty}
                                        onNormalClick={()=>onNormalClick(id)}
                                        onMediumClick={()=>onMediumClick(id)}
                                        onPlusProductClick={()=>onPlusProductClick(id)}
                                        onlessProductClick={()=>onlessProductClick(id)}
                                        />
                                      ))
                                     } />
          <Route path="/cake" element={<Cake />} />
          <Route path="/carshop" element={<Carshop />} />
       </Routes>
     </div>
    </div>
  );
}



export default App;
