import React from "react";
import Products from "./Products";
import "./App.css";
function App() {
  const allProduscs = [
    {id:1,name:'samsung',price:128}, 
    {id:1,name:'apple',price:500}, 
    {id:1,name:'xmi',price:90}
  ];
  return (
    // <div className="all-product">
    //   <Products name={allProduscs[0].name} price={allProduscs[0].price} /> 
    //    <Products name={allProduscs[1].name} price={allProduscs[1].price} />
    //    <Products name={allProduscs[2].name} price={allProduscs[2].price} />  
    // </div>

     <div className="all-product">
      <Products  {...allProduscs[0]} /> 
       <Products {...allProduscs[1]} />
       <Products {...allProduscs[2]} />  
    </div>
  );
}

export default App;
