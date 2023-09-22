import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes, Route, Redirect, Link } from "react-router-dom";
import Login from './login/Login';
import Dashboard from './backend/Dashboard';

const Admin = () => {
  return (
    <div>
        <Router>
            <Routes>

                <Route path='/' element={<Login />}></Route>
                <Route path='/admin-dashboard' element={<Dashboard />}></Route>

            </Routes>
        </Router>
    </div>
  )
}

export default Admin

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}
