
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ContextProvider } from './Context.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Main,About,Cart,Wishlist,Favourite,Contact,Signup, Product, Order, AllProducts,FilteredProducts} from "./index.js"
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path: "",
          element: <Main />
        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path:"/Cart",
          element: <Cart/>
        },
        {
          path:"/Favourite",
          element: <Favourite/>
        },
        {
          path:"/Contact",
          element: <Contact/>
        },
        {
          path:"/Wishlist",
          element: <Wishlist/>
        },
        {
          path:"/Signup",
          element: <Signup/>
        },
        {
          path:"/Product/:id",
          element: <Product/>
        },
        {
          path:"/Order",
          element: <Order/>
        },
        {
          path: "/AllProducts",
          element: <AllProducts />,
        },
        {
          path: "/FilteredProducts/:category",
          element: <FilteredProducts />,
        }
      ]
    }
  ])
createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>,
)
