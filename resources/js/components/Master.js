import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes, Route, Redirect, Link } from "react-router-dom";
import Web from './frontend/Web';

const Master = () => {
  return (
    <div>
       <Router>
            <Routes>
                <Route path='/' element={<Web />}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Master

if (document.getElementById('master')) {
    ReactDOM.render(<Master />, document.getElementById('master'));
}
