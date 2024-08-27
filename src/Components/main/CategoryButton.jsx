import React from 'react'
import '../../App.css'
// import { useNavigate } from 'react-router-dom';
function CategoryButton({children}) {
// const navigate = useNavigate();



  return (
    
      <button className='categorybtn w-[10vw] h-[20vh] border p-7 rounded-md hover:bg-[#DB4444] hover:text-white text-4xl grid place-items-center font-semibold mx-4 transition-colors' >
        {children}
      </button>
    
  )
}

export default CategoryButton