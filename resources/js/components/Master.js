import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes, Route, Redirect, Link } from "react-router-dom";
import Web from './frontend/Web';
import SingleBlog from './frontend/pages/SingleBlog';
import Blog from './frontend/pages/Blog';
import Product from './frontend/pages/Product';
import ProductDetails from './frontend/pages/ProductDetails';
import Login from './login/Login';

const Master = () => {
  return (
    <div>
       <Router>
            <Routes>
                <Route path='/' element={<Web />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/single-blog' element={<SingleBlog />}></Route>
                <Route path='/category' element={<Product />}></Route>
                <Route path='/product-details' element={<ProductDetails />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Master

if (document.getElementById('master')) {
    ReactDOM.render(<Master />, document.getElementById('master'));
}
