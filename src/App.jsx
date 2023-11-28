import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/Header'
// import ProductComponent from './components/ProductComponent'
import ProductListing from './components/ProductListing'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route element={<ProductListing/>} path='/' />
                {/* <Route element={<ProductComponent/>} path='/productcomponent' /> */}
                <Route element={<ProductDetail/>} path='/product/:productId' />
                <Route element={<Cart/>} path='/cart' />
            </Routes>
        </BrowserRouter>
        {/* <Cart/> */}
    </div>
  )
}

export default App