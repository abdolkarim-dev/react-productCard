import React from "react";
import "./Products.css";
// export default function Products(props) { 
//   let {id,name,price}=props;
//   console.log();
//   let title = "product card"
//   // return (
//   //   <div>
//   //     <h2>Product Card</h2>
//   //     <div className="card">
//   //       <img src="logo192.png" alt="Denim Jeans" />
//   //       <h1> { props.name  }  </h1>
//   //       <p className="price">${props.price}</p>
//   //       <p className="p-justify">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum .</p>
//   //       <button className="btn-add">Add to Cart</button>
//   //     </div>
//   //   </div>
//   // );
//    return (
//     <div>
//       <h2>Product Card</h2>
//       <div className="card">
//         <img src="logo192.png" alt={id} />
//         <h1> {  name  }  </h1>
//         <p className="price">${ price}</p>
//         <p className="p-justify">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum .</p>
//         <button className="btn-add">Add to Cart</button>
//       </div>
//     </div>
//   );
// }
export default function Products({id : id_card ,name,price}) {  
  let id =1;
   return (
    <div>
      <h2>Product Card</h2>
      <div className="card">
        <img src="logo192.png" alt={id_card} />
        <h1 alt={id}> {  name  }  </h1>
        <p className="price">${ price}</p>
        <p className="p-justify">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum .</p>
        <button className="btn-add">Add to Cart</button>
      </div>
    </div>
  );
}
