import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes, Route, Redirect, Link } from "react-router-dom";
import Login from './login/Login';

const Admin = () => {
  return (
    <div>
        <Router>
            <Routes>

                <Route path='/' element={<Login />}></Route>

            </Routes>
        </Router>
    </div>
  )
}

export default Admin

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}
