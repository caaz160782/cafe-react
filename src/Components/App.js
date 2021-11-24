import {useState } from "react";
import Nav from "./Nav/Nav"
import { Route, Routes} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Index from "./Index";
import Cafes from "./Cafes/Cafes"
import Cakes from "./Cakes/Cake"
import Carshop from "./CarShop/Carshop";
import './App.css';

function App() {

const [carProducts, setCarProducts]=useState([]);
const [cakes, setCakes]=useState([]);

const addToCart = (product) => {
  const {id,title,url,price}=product
  if(carProducts.find(p =>p.id === product.id)){
    const newCarProducts= carProducts.map(x=>x.id === product.id
      ?({...x,qty:x.qty +1  })
      :x)
    return   setCarProducts(newCarProducts)
  }
   return   setCarProducts(
    [...carProducts, { id,title,url,price,qty:1 }])
}

const resToCart = (product) => {
  if(carProducts.find(p =>p.id === product.id)){
    const newCarProducts= carProducts.map(x=>x.id === product.id
      ?({...x,qty:x.qty -1  })
      :x)
    return   setCarProducts(newCarProducts)
  }
}

const onEmptyCar = () => {
  setCarProducts([])
}
return (
    <div>
       <Nav    onEmptyCar={onEmptyCar}  carProducts={carProducts} />
     <div className="container">
       <Routes>
          <Route path="/"        element={<Index />} />
          <Route path="/coffe"   element={<Cafes
                                                 carProducts={carProducts}
                                                 setCarProducts={setCarProducts}
                                                 addToCart={addToCart}
                                                 resToCart={resToCart}
                                                />}/>
          <Route path="/cake"    element={<Cakes
                                              carProducts={carProducts}
                                              setCarProducts={setCarProducts}
                                              cakes={cakes}
                                              setCakes={setCakes}
                                              addToCart={addToCart}
                                              resToCart={resToCart}
                                           />} />
          <Route path="/carshop" element={<Carshop carProducts={carProducts}
                                                    setCarProducts={setCarProducts}
                                          />} />
       </Routes>
     </div>
    </div>
  );
}
export default App;
