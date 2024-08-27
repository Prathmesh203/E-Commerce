import React from 'react'
import { useGlobalContext } from '../../Context'
import ItemsCard from "../../Components/main/ItemsCard";
function AllProducts() {
     const context = useGlobalContext();
     const products = context.content;
     
  return (
    <div className='grid grid-cols-3 gap-y-10 w-full place-items-center  p-10 max-[450px]:grid-cols-1 '>
     {products.map((items)=>(
          
          <ItemsCard key={items.id} item={items.image} width="247px" height="250px" name={items.name} price={items.price} id={items.id} Favourite={true} Wishlist={true} />
          
     ))}
    </div>
  )
}

export default AllProducts