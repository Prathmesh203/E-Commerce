import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../Context';
import ItemsCard from '../../Components/main/ItemsCard';
function FilteredProducts() {
     const context = useGlobalContext();
     const Products = context.content;
     const {category} = useParams();
     const item = Products.filter((item) => item.category == category);
     console.log(item);
  return (
    <div className='p-10 flex flex-col gap-5 w-full'>
      <h1 className='text-4xl font-bold w-full text-center '>{item[0].category}</h1>
      <div className='w-[90%] mx-auto grid grid-cols-3 max-[450px]:grid-cols-1 gap-y-10'>
      {
        item.map((items)=>(

          <ItemsCard key={items.id} item={items.image} width="247px" height="250px" name={items.name} price={items.price} id={items.id}  />

        ))

      }
      </div>
    </div>
  )
}

export default FilteredProducts