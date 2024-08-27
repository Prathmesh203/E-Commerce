import { createContext, useContext } from "react";
import  data  from "../public/data.json";
import { useState } from "react";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
     const [content, setcontent] = useState(data);
     const [Wishlist, setWishlist] = useState([]);
     const [Cart, setCart] = useState([]);
     const[Favourite,setFavourite] = useState([]);
     const[itemQuantity,setitemQuantity] = useState(1);

     return (
          <Context.Provider value={{content, setcontent, Cart, setCart, Wishlist, setWishlist, Favourite,setFavourite,itemQuantity,setitemQuantity}}>
               {children}
          </Context.Provider>
     )
}
export const useGlobalContext = () => {
     return useContext(Context);
}