import React from "react";
import { useGlobalContext } from "../../Context";
import ItemsCard from "../../Components/main/ItemsCard";
function Wishlist() {
  const context = useGlobalContext();
  const products = context.Wishlist;
  console.log(products);

  return (
    <div>
      <h1>Wishlist</h1>
      {
        products.map((items)=>(

          <ItemsCard key={items.id} item={items.image} width="247px" height="250px" name={items.name} price={items.price} id={items.id}  />

        ))

      }
    </div>
  );
}

export default Wishlist;
