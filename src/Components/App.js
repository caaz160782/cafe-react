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
  /*
  useEffect(
    ()=>{
     axios.get(endpoint)
    .then(res=>{    persons = res.data;
    
    })
    .catch(error=>{ return error; })
   },[])
*/

console.log(products)

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

const onTotalProduct= products.reduce((accumm,product) => {
  return accumm+product.price
},0);


const onlessProductClick = (id) => {
  const newProducts = products.map((product) => {
    if (product.id !== id) return product;
    else return { ...product, qty: product.qty -1 };
  });
  setProducts(newProducts);
};


  return (
    <div>
       <Nav
          onPlusProduct={onPlusProduct}
          onTotalProduct={onTotalProduct}
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