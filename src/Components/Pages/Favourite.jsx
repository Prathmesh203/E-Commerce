import React from 'react'
// import { useGlobalContext } from '../../Context'
import { useGlobalContext } from "../../Context";
import ItemsCard from "../../Components/main/ItemsCard";

function Favourite() {
  const context = useGlobalContext();
  const products = context.Favourite;
  if (products.length == 0) {
    return(
      <h1>No Favourite</h1>
    )
  }else{
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl w-full border text-center'>Favourite</h1>
      <div className='grid grid-cols-3 w-full gap-3 m-5 bg-slate-50'>
      {
        products.map((items)=>(

          <ItemsCard key={items.id} item={items.image} width="247px" height="250px" name={items.name} price={items.price} id={items.id} deleteItem={true}  />

        ))

      }
      </div>
    </div>
  )}
}

export default Favourite