import React from 'react'
import './App.css'
import { lazy, Suspense } from 'react'
// import {Navbar, Footer} from './index'
import { Outlet } from 'react-router-dom'

const navbar = {
  Navbar: lazy(() => import('./Navbar/Navbar')),
  Footer: lazy(() => import('./Components/footer/Footer')),
}
function App() {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      <navbar.Navbar />
    </Suspense>
      <Outlet />
    <Suspense fallback={<div>Loading...</div>}>
      <navbar.Footer />
    </Suspense>
      </div>
  )
}
export default App
